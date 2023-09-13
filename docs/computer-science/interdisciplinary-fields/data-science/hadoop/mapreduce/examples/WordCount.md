# WordCount

- Driver Class `WordCountDriver.java`

```java
import java.io.IOException;

// file system 
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;

// box classes import 
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;

// mapreduce imports
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

public class WordCountDriver {
 public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {

  Job j = new Job();
  j.setJobName("My First Job");
  j.setJarByClass(WordCountDriver.class);
  j.setMapperClass(WordCountMapper.class);
  j.setReducerClass(WordCountReducer.class);
  j.setOutputKeyClass(Text.class);
  j.setOutputValueClass(IntWritable.class);

  FileInputFormat.addInputPath(j, new Path(args[0]));
  FileOutputFormat.setOutputPath(j, new Path(args[1]));

  System.exit(job.waitForCompletion(true) ? 0 : 1);
 }

}

```

- Mapper Class `WordCountMapper.java`

```java
// exception handling 
import java.io.IOException;

// box classes import
import org.apache.hadoop.io.DoubleWritable;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;

// import mapper class
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Mapper.Context;

public class WordCountMapper extends Mapper<LongWritable, Text, Text, IntWritable> {

 public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
  String inputstring = value.toString();
  for (String x : inputstring.split(" ")) {
   context.write(new Text(x), new IntWritable(1));
  }
 }
}

```

- Reducer Class `WordCountReducer.java`

```java
// exceptions import
import java.io.IOException;

// import box classes
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;

// import reducer class
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.Reducer.Context;

public class WordCountReducer extends Reducer<Text, IntWritable, Text, IntWritable> {

 public void reduce(Text key, Iterable<IntWritable> values, Context context)
   throws IOException, InterruptedException {
  int y = 0;
  for (IntWritable x : values) {
   y++;
  }
  context.write(key, new IntWritable(y));
 }
}

```

- Input File `poem.txt`

```
What I won't tell you is how I became a flute
and brushed against lips but there was no music.
When the blows came furious as juniper.

There were days when I was a parachute
and the wind was free but kind. I won't lie
and say there were no such days. There were days

when I curled into hailstone and pretended
it was only breezing outside. Another man's music.
Eventually the need to unfurl overcame the need

to stay anchored. Tsunami greeted me in its maw.
I have his smell all about me but it dwindles every day.
What I won't tell you is how I escaped. One day

I met a map at a bar. It pointed to a gash on its head
and said I could get there by becoming someone else.
Most of me was still scrawled on a carpet under a belt.

What was there to lose that I hadn't already lost?
Alone, in the middle of the night, the road smelled
like freshly sawed mesquite. I wormed my way out.

A buckle still loomed in the background.
And I told myself, there is no gleam.
```

## How to execute

1. `H_CLASSPATH=$(hadoop classpath)`
   - creating a varible to store the path for the jar files needed for compiling
2. `javac *.java -cp $H_CLASSPATH`
   - compiling files to create `.class` files
3. `jar -cvf wordcount.jar *.class`
   - creating jar file
4. `hadoop fs -put poem.txt`
   - uploading the input file to HDFS
5. `hadoop jar wordcount.jar WordCountDriver poem.txt wordcountout`
   - executing the map reduce program
6. `hadoop fs -ls wordcountout`
   - listing the output files
7. `hadoop fs -cat wordcountout\part-r-00000`
   - lising the contents of output file (only if step 5 was successful)
