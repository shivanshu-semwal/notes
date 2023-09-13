# My Cricket

`CricMapper.java`

```java
import java.io.IOException;

// import Box classes 
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;

// import mapper class
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Mapper.Context;

public class CricMapper extends Mapper<LongWritable, Text, Text, IntWritable> {

 public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
  String[] data = value.toString().split(",");
  Integer score = new Integer(data[2]);
  Integer four = new Integer(data[3]);
  Integer six = new Integer(data[4]);
  if (score >= 100) {
   context.write(new Text("Total Centuries"), new IntWritable(1));
  }
  if (score >= 50 && score < 100) {
   context.write(new Text("Total 50's"), new IntWritable(1));
  }
  context.write(new Text("Total Boundries"), new IntWritable(four));
  context.write(new Text("Total Six"), new IntWritable(six));
 }

}

```

`CricReducer.java`

```java
import java.io.IOException;

// import box classes
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;

// import reducer class
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.Reducer.Context;

public class CricReducer extends Reducer<Text, IntWritable, Text, IntWritable> {

 public void reduce(Text key, Iterable<IntWritable> values, Context context)
   throws IOException, InterruptedException {
  int sum = 0;
  for (IntWritable value : values) {
   sum += value.get();
  }
  context.write(key, new IntWritable(count));
 }

}

```

`MyCric.java`

```java
import java.io.IOException;

// file system
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;

// import box classes
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;

// mapreduce imports
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

public class MyCric {
 public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {

  Job j = new Job();
  j.setJobName("My First Job");
  j.setJarByClass(MyCric.class);
  j.setMapperClass(CricMapper.class);
  j.setReducerClass(CricReducer.class);
  j.setMapOutputKeyClass(Text.class);
  j.setMapOutputValueClass(IntWritable.class);
  j.setOutputKeyClass(Text.class);
  j.setOutputValueClass(IntWritable.class);

  FileInputFormat.addInputPath(j, new Path(args[0]));
  FileOutputFormat.setOutputPath(j, new Path(args[1]));

  System.exit(j.waitForCompletion(true) ? 0 : 1);
 }

}

```

`input_cric.java`

```csv
101,Shikhar Dhawan,100,10,2
102,Rohit Sharma,65,2,5
103,Virat Kohli,0,0,0
104,Mahendra Singh Dhoni,65,3,7
105,Hardik Pandya,51,6,2
```

Input file structure `101,Shikhar Dhawan,100,10,2`

- `101` - nunber
- `Shikhar Dhawan` - name of player
- `100` - total score
- `10` - total six
- `2` - total boundaries

## How to execute

- to get these files use

```sh
wget https://raw.githubusercontent.com/shivanshu-semwal/hadoop/master/src/mapreduce/src/MyCricket/get.sh
chmod +x get.sh
./get.sh
cd MyCricket
```

1. `H_CLASSPATH=$(hadoop classpath)`
   - creating a varible to store the path for the jar files needed for compiling
2. `javac *.java -cp $H_CLASSPATH`
   - compiling files to create `.class` files
3. `jar -cvf cricket.jar *.class`
   - creating jar file
4. `hadoop fs -put input_cric.txt`
   - uploading the input file to HDFS
5. `hadoop jar cricket.jar MyCric input_cric.txt cricket_out`
   - executing the map reduce program
6. `hadoop fs -ls cricket_out`
   - listing the output files
7. `hadoop fs -cat cricket_out\part-r-00000`
   - lising the contents of output file (only if step 5 was successful)
