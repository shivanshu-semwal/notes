# Flight Analysis

`FlightMapper.java`

```java
package flight;

import java.io.IOException;

// box classes
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.LongWritable;

// mapper class
import org.apache.hadoop.mapreduce.Mapper;

// 0  IX-2342,Kingfisher,Bangalore,Hyderabad,05,01-Jan-2017

public class FlightMapper extends Mapper<LongWritable, Text, Text, FlightWritable> {

 private FlightWritable flightInfo = new FlightWritable();

 protected void map(LongWritable key, Text value, Context c) throws IOException, InterruptedException {

  // line --> IX-2342,Kingfisher,Bangalore,Hyderabad,05,01-Jan-2017
  String line = value.toString(); 
  
  // words --> [ IX-2342 Kingfisher Bangalore Hyderabad 05 01-Jan-2017 ]
  String[] words = line.split(","); 

  // 05 01-Jan-2017 IX-2342
  flightInfo.set(words[4], 1, words[5], words[0]);

  String monthYear = flightInfo.getFlightDate().split("-")[1];
  
  // key Jan 2017
  monthYear += " " + flightInfo.getFlightDate().split("-")[2]; 

  // Jan 2017 {05,1,01-Jan-2017,IX-2342}
  c.write(new Text(monthYear), flightInfo);
 }
}

```

`FlightReducer.java`

```java
package flight;

import java.util.Map;
import java.util.TreeMap;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map.Entry;
import java.io.IOException;
import java.util.Comparator;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.mapreduce.Reducer;

//Jan 2017  [ {05,1,01-Jan-2017,IX-2342} {93,1,01-Jan-2017,IX-4644} {186,1,01-Jan-2017,IX-8345} {10,1,02-Jan-2017,IX-2342}......]

public class FlightReducer extends Reducer<Text, FlightWritable, Text, Text> {
 @Override
 protected void reduce(Text key, Iterable<FlightWritable> values, Context c)
   throws IOException, InterruptedException {
  // Create a map to claculate total trips for each flight

  // flightNUmber, NumberOfTripsInThisMonth
  HashMap<String, Integer> TripCounts = new HashMap<String, Integer>();

  // Create a map to claculate total passengers for each flight

  // flightNumber, TotalNumberOfPassengersForAllTripsIntHisMonth
  HashMap<String, Integer> PassengerCounts = new HashMap<String, Integer>();

  FlightWritable f = null;
  Iterator<FlightWritable> v1 = values.iterator(); // v1= 1,05,01-Jan-2017

  while (v1.hasNext()) {
   // f --> 05,1,01-Jan-2017,IX-2342
   f = v1.next(); 

   String flightNumber = f.getFlightNumber(); // IX-2342

   if (TripCounts.containsKey(flightNumber)) {
    TripCounts.put(flightNumber, TripCounts.get(flightNumber) + 1);

    PassengerCounts.put(flightNumber, PassengerCounts.get(flightNumber) + f.getPassengersCount());
   } else {
    TripCounts.put(flightNumber, 1); // TripCounts IX-2342, 2 IX-4644,1 IX-8345,1
    PassengerCounts.put(flightNumber, f.getPassengersCount()); // PassengerCounts IX-2342,2859 IX-4644,93
                   // IX-8345,186
   }
  }

  // AveragePassengers, FlightNUmber
  Map<Double, String> treeMap = new TreeMap<Double, String>(new Comparator<Double>() {
   @Override
   public int compare(Double o1, Double o2) // {(131.0) IX-8567},{(129.0)IX-4656},{(128.0) IX-3563}
   {
    return o2.compareTo(o1);
   }
  });

  /* Calculate average passengers count for all flight for this month */
  String lessUtilizedFlitghts = "";

  for (Entry<String, Integer> e : PassengerCounts.entrySet()) // PassengerCounts IX-2342,2859 IX-4644,93
                 // IX-8345,186
  {
   String flightNumber = e.getKey(); // IX-2342
   int passengersCount = e.getValue(); // 2859
   int tripCount = TripCounts.get(flightNumber); // 27

   /* flights having more than 25 trips and less than 3000 passengers */
   if ((passengersCount < 3000) && (tripCount > 25))
    lessUtilizedFlitghts += "," + flightNumber; // lessUtilizedFlitghts = IX-2342

   Double avgPassengersPerMonth = new Double(passengersCount / tripCount * 1.0);
   treeMap.put(avgPassengersPerMonth, flightNumber);
  }

  String out = "";
  int count = 0;

  for (Entry<Double, String> e : treeMap.entrySet()) {
   out += "," + e.getValue() + "(" + e.getKey() + ")"; // emit top three filghts for this month //
   if (count++ >= 2)
    break;
  }

  /* emit less utilized flights as well */
  out += " - " + lessUtilizedFlitghts;

  /* format: month, top_3_flights - lessUtilizedFlights */
  c.write(key, new Text(out));
 }
}

```

`FlightDriver.java`

```java
package flight;

import java.io.IOException;

import org.apache.hadoop.conf.Configuration;

//file system
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.fs.FileSystem;

// box classes
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;

// mapreduce 
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

public class FlightDriver {
 public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {

  // Path input_dir = new
  // Path("hdfs://localhost:9000/user/cloudera/vijaysingh/flight.txt");
  // Path output_dir = new
  // Path("hdfs://localhost:9000/user/cloudera/vijaysingh/output");

  Configuration conf = new Configuration();
  Job job = new Job(conf, "Flight");

  job.setJarByClass(FlightDriver.class);
  job.setNumReduceTasks(1);

  job.setMapOutputKeyClass(Text.class);
  job.setMapOutputValueClass(FlightWritable.class);

  job.setOutputKeyClass(Text.class);
  job.setOutputValueClass(Text.class);

  job.setMapperClass(FlightMapper.class);
  job.setReducerClass(FlightReducer.class);

  // Setting your input and output directory
  FileInputFormat.addInputPath(job, new Path(args[0]));
  FileOutputFormat.setOutputPath(job, new Path(args[1]));
  // output_dir.getFileSystem(job.getConfiguration()).delete(output_dir, true);

  System.exit(job.waitForCompletion(true) ? 0 : 1);
 }
}
```

`FlightWritable.java`

```java
package flight;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import org.apache.hadoop.io.Writable;
import org.apache.hadoop.io.WritableUtils;

public class FlightWritable implements Writable {

    private int passengersCount;
    private int tripsCount;
    private String flightDate;
    private String flightNumber;

    public FlightWritable() {
        set("0", 0, "", "");
    }

    /* getters and setters for custom values */
    public void set(String passengersCount, int tripsCount, String dateStr, String flightNumber) {
        this.passengersCount = Integer.parseInt(passengersCount);
        this.flightDate = dateStr;
        this.tripsCount = tripsCount;
        this.flightNumber = flightNumber;
    }

    public int getPassengersCount() {
        return this.passengersCount;
    }

    public int getTripsCount() {
        return this.tripsCount;
    }

    public String getFlightDate() {
        return this.flightDate;
    }

    public String getFlightNumber() {
        return this.flightNumber;
    }

    @Override // Mandatory function for Hadoop to know how to write values for this class //

    public void write(DataOutput out) throws IOException {
        out.writeInt(this.passengersCount);
        out.writeInt(this.tripsCount);
        WritableUtils.writeString(out, this.flightDate);
        WritableUtils.writeString(out, this.flightNumber);
    }

    @Override // Mandatory function for Hadoop to know how to read values for this class //
    public void readFields(DataInput in) throws IOException {
        this.passengersCount = in.readInt();
        this.tripsCount = in.readInt();
        this.flightDate = WritableUtils.readString(in);
        this.flightNumber = WritableUtils.readString(in);
    }

}

```

`flight.txt`

```
IX-2342,Kingfisher,Bangalore,Hyderabad,80,01-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,93,01-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,186,01-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,101,01-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,129,01-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,172,01-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,99,01-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,10,02-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,143,02-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,85,02-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,121,02-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,194,02-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,176,02-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,85,02-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,136,03-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,171,03-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,99,03-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,93,03-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,126,03-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,35,04-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,102,04-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,125,04-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,155,04-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,122,04-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,101,04-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,53,04-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,18,05-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,51,05-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,156,05-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,53,05-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,95,05-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,189,05-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,194,06-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,75,06-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,140,06-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,151,06-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,65,06-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,120,06-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,19,07-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,169,07-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,156,07-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,169,07-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,93,07-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,152,07-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,189,07-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,88,08-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,198,08-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,68,08-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,59,08-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,55,08-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,195,08-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,29,09-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,106,09-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,130,09-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,109,09-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,81,09-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,98,09-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,125,09-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,10,10-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,90,10-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,106,10-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,93,10-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,181,10-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,53,10-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,154,10-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,18,11-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,185,11-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,186,11-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,127,11-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,171,11-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,55,11-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,131,11-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,11,12-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,84,12-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,185,12-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,106,12-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,72,12-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,140,12-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,51,13-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,59,13-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,51,13-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,178,13-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,65,13-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,177,13-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,130,13-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,65,14-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,138,14-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,66,14-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,54,14-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,99,14-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,54,14-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,166,14-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,185,15-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,188,15-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,158,15-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,110,15-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,123,15-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,132,15-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,143,15-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,132,17-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,138,17-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,186,17-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,68,17-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,98,17-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,119,17-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,169,17-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,148,18-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,187,18-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,108,18-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,56,18-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,146,18-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,136,18-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,160,18-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,55,19-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,80,19-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,89,19-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,106,19-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,139,19-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,173,19-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,92,19-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,195,20-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,165,20-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,94,20-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,140,20-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,107,20-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,149,20-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,72,20-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,199,21-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,138,21-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,63,21-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,189,21-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,63,21-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,108,21-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,68,21-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,60,22-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,173,22-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,72,22-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,63,22-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,114,22-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,101,22-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,103,22-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,108,23-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,130,23-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,108,23-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,141,23-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,53,23-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,91,23-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,81,23-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,104,24-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,103,24-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,81,24-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,192,24-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,82,24-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,69,24-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,156,24-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,112,25-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,198,25-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,138,25-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,109,25-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,181,25-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,74,26-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,108,26-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,166,26-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,155,26-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,79,26-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,62,27-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,56,27-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,178,27-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,167,27-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,62,27-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,107,27-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,173,27-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,100,28-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,190,28-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,113,28-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,162,28-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,196,28-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,178,28-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,115,28-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,170,29-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,50,29-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,175,29-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,95,29-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,133,29-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,73,29-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,136,29-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,109,30-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,172,30-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,97,30-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,107,30-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,88,30-Jan-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,178,30-Jan-2017
IX-8567,Kingfisher,Bangalore,Kolkata,130,30-Jan-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,135,31-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,138,31-Jan-2017
IX-8345,Kingfisher,Bangalore,Delhi,138,31-Jan-2017
IX-3563,Kingfisher,Bangalore,Mumbai,196,31-Jan-2017
IX-4656,Kingfisher,Bangalore,Pune,119,31-Jan-2017
IX-4644,Kingfisher,Bangalore,Chennai,149,01-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,144,01-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,191,01-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,68,01-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,109,01-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,110,01-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,66,02-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,07,02-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,183,02-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,175,02-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,92,02-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,57,02-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,82,02-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,12,03-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,73,03-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,186,03-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,190,03-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,188,03-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,109,03-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,146,03-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,15,04-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,18,04-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,89,04-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,91,04-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,146,04-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,97,04-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,200,04-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,20,05-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,84,05-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,52,05-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,176,05-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,139,05-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,95,05-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,174,05-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,60,06-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,66,06-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,79,06-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,156,06-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,141,06-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,170,06-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,180,06-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,14,07-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,162,07-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,159,07-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,190,07-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,132,07-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,172,07-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,157,07-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,178,08-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,51,08-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,64,08-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,144,08-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,54,08-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,74,08-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,147,08-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,52,09-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,107,09-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,120,09-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,58,09-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,183,09-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,63,09-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,97,09-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,87,10-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,99,10-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,61,10-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,140,10-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,99,10-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,176,10-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,106,10-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,111,11-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,150,11-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,115,11-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,71,11-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,103,11-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,120,11-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,61,11-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,16,12-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,77,12-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,103,12-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,70,12-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,156,12-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,87,12-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,158,12-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,130,13-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,90,13-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,163,13-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,181,13-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,170,13-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,136,13-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,160,14-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,99,14-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,191,14-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,54,14-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,147,14-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,79,15-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,177,15-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,136,15-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,77,15-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,197,15-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,132,15-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,167,15-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,13,16-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,162,16-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,57,16-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,154,16-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,155,16-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,178,16-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,98,16-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,131,17-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,61,17-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,102,17-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,172,17-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,147,17-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,162,17-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,156,17-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,166,18-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,183,18-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,154,18-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,51,18-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,157,18-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,175,18-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,89,19-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,59,19-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,55,19-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,89,19-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,154,19-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,118,19-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,146,20-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,67,20-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,155,20-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,103,20-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,92,20-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,91,20-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,190,20-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,92,21-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,113,21-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,125,21-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,162,21-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,51,21-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,166,21-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,135,21-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,154,22-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,171,22-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,171,22-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,174,22-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,191,22-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,76,22-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,173,22-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,119,23-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,98,23-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,84,23-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,167,23-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,188,23-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,155,23-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,185,23-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,171,24-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,74,24-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,186,24-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,189,24-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,97,24-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,64,24-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,97,25-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,182,25-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,141,25-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,76,25-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,57,25-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,123,25-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,111,26-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,105,26-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,108,26-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,128,26-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,76,26-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,51,26-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,135,26-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,126,27-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,124,27-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,77,27-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,145,27-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,152,27-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,107,27-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,50,27-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,126,28-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,177,28-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,149,28-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,98,28-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,139,28-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,73,28-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,88,28-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,167,29-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,158,29-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,50,29-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,123,29-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,114,29-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,74,29-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,120,29-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,182,30-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,138,30-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,105,30-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,73,30-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,172,30-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,183,30-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,59,30-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,50,31-Feb-2017
IX-4644,Kingfisher,Bangalore,Chennai,160,31-Feb-2017
IX-8345,Kingfisher,Bangalore,Delhi,148,31-Feb-2017
IX-3563,Kingfisher,Bangalore,Mumbai,50,31-Feb-2017
IX-4656,Kingfisher,Bangalore,Pune,70,31-Feb-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,193,31-Feb-2017
IX-8567,Kingfisher,Bangalore,Kolkata,121,31-Feb-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,176,01-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,114,01-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,97,01-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,193,01-March-2017
IX-4656,Kingfisher,Bangalore,Pune,86,01-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,177,01-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,86,01-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,169,02-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,176,02-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,178,02-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,54,02-March-2017
IX-4656,Kingfisher,Bangalore,Pune,141,02-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,136,02-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,117,02-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,174,03-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,166,03-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,125,03-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,185,03-March-2017
IX-4656,Kingfisher,Bangalore,Pune,123,03-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,156,03-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,110,03-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,140,04-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,124,04-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,127,04-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,94,04-March-2017
IX-4656,Kingfisher,Bangalore,Pune,121,04-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,143,04-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,89,04-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,97,05-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,106,05-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,194,05-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,125,05-March-2017
IX-4656,Kingfisher,Bangalore,Pune,135,05-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,113,05-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,140,05-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,165,06-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,176,06-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,75,06-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,78,06-March-2017
IX-4656,Kingfisher,Bangalore,Pune,119,06-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,108,06-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,134,06-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,199,07-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,170,07-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,94,07-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,91,07-March-2017
IX-4656,Kingfisher,Bangalore,Pune,143,07-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,126,07-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,65,07-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,64,08-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,164,08-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,110,08-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,179,08-March-2017
IX-4656,Kingfisher,Bangalore,Pune,176,08-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,80,08-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,126,08-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,68,09-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,165,09-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,198,09-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,101,09-March-2017
IX-4656,Kingfisher,Bangalore,Pune,75,09-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,54,09-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,153,09-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,62,10-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,119,10-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,59,10-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,125,10-March-2017
IX-4656,Kingfisher,Bangalore,Pune,200,10-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,176,10-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,187,10-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,185,11-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,105,11-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,132,11-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,95,11-March-2017
IX-4656,Kingfisher,Bangalore,Pune,119,11-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,171,11-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,105,11-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,77,12-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,144,12-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,61,12-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,62,12-March-2017
IX-4656,Kingfisher,Bangalore,Pune,167,12-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,128,12-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,155,12-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,79,13-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,58,13-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,62,13-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,123,13-March-2017
IX-4656,Kingfisher,Bangalore,Pune,166,13-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,55,13-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,180,13-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,112,14-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,96,14-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,102,14-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,132,14-March-2017
IX-4656,Kingfisher,Bangalore,Pune,188,14-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,195,14-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,144,14-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,153,15-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,145,15-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,174,15-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,134,15-March-2017
IX-4656,Kingfisher,Bangalore,Pune,199,15-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,139,15-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,154,15-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,72,16-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,117,16-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,80,16-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,107,16-March-2017
IX-4656,Kingfisher,Bangalore,Pune,85,16-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,161,16-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,94,16-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,114,17-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,171,17-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,108,17-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,98,17-March-2017
IX-4656,Kingfisher,Bangalore,Pune,182,17-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,95,17-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,84,17-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,101,18-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,144,18-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,119,18-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,182,18-March-2017
IX-4656,Kingfisher,Bangalore,Pune,95,18-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,129,18-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,70,18-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,90,19-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,117,19-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,189,19-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,131,19-March-2017
IX-4656,Kingfisher,Bangalore,Pune,81,19-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,52,19-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,178,19-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,85,20-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,104,20-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,110,20-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,55,20-March-2017
IX-4656,Kingfisher,Bangalore,Pune,159,20-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,159,20-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,192,20-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,143,21-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,60,21-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,168,21-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,115,21-March-2017
IX-4656,Kingfisher,Bangalore,Pune,133,21-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,134,21-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,77,21-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,58,22-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,149,22-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,152,22-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,105,22-March-2017
IX-4656,Kingfisher,Bangalore,Pune,79,22-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,69,22-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,158,22-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,124,23-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,98,23-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,80,23-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,104,23-March-2017
IX-4656,Kingfisher,Bangalore,Pune,159,23-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,170,23-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,182,23-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,161,24-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,130,24-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,131,24-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,62,24-March-2017
IX-4656,Kingfisher,Bangalore,Pune,193,24-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,65,24-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,181,24-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,152,25-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,117,25-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,55,25-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,109,25-March-2017
IX-4656,Kingfisher,Bangalore,Pune,104,25-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,124,25-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,122,25-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,199,26-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,114,26-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,96,26-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,146,26-March-2017
IX-4656,Kingfisher,Bangalore,Pune,93,26-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,138,26-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,182,26-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,117,27-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,165,27-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,118,27-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,198,27-March-2017
IX-4656,Kingfisher,Bangalore,Pune,194,27-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,152,27-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,118,27-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,76,28-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,154,28-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,111,28-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,111,28-March-2017
IX-4656,Kingfisher,Bangalore,Pune,50,28-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,156,28-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,85,28-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,93,29-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,164,29-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,120,29-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,184,29-March-2017
IX-4656,Kingfisher,Bangalore,Pune,81,29-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,75,29-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,99,29-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,96,30-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,138,30-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,75,30-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,119,30-March-2017
IX-4656,Kingfisher,Bangalore,Pune,110,30-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,165,30-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,63,30-March-2017
IX-2342,Kingfisher,Bangalore,Hyderabad,109,31-March-2017
IX-4644,Kingfisher,Bangalore,Chennai,176,31-March-2017
IX-8345,Kingfisher,Bangalore,Delhi,54,31-March-2017
IX-3563,Kingfisher,Bangalore,Mumbai,188,31-March-2017
IX-4656,Kingfisher,Bangalore,Pune,68,31-March-2017
IX-3456,Kingfisher,Bangalore,Chandigarh,51,31-March-2017
IX-8567,Kingfisher,Bangalore,Kolkata,186,31-March-2017
```
