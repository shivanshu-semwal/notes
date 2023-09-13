# MapReduce

## Examples

- [`WordCount`](./examples/WordCount.md)
- [`EvenOdd`](./examples/EvenOdd.md)
- [`MyCricket`](./examples/MyCricket.md)

## Box Classes

`Serialization` is the process of converting object data into byte stream data for transmission over a network across different nodes in a cluster or for persistent data storage.

Since hadoop use serialization for optimization, native java wrapper class are not used, but rather box classes similar to them are used in MapReduce programs.

Java Native | MapReduce  | Import
---|---|---
`Boolean` |`BooleanWritable`| `import org.apache.hadoop.io.BooleanWritable`
`Byte` |`ByteWritable`| `import org.apache.hadoop.io.ByteWritable`
`Integer` |`IntWritable`| `import org.apache.hadoop.io.IntWritable;`
`long int` | `VIntWritable`| `import org.apache.hadoop.io.VIntWritable`
`Float` | `FloatWritable`| `import org.apache.hadoop.io.FloatWritable`
`Long` | `LongWritable`| `import org.apache.hadoop.io.LongWritable;`
`long long` | `VLongWritable`| `import org.apache.hadoop.io.VLongWritable`
`Double` |`DoubleWritable`| `import org.apache.hadoop.io.DoubleWritable;`
`String` | `Text` | `import org.apache.hadoop.io.Text;`

## Mapper Class

Any mapper class for a `MapReduce` program extends the abstract `Mapper` class.
And then we have to override the `map` function, which takes the `key-value` pair and reference to a `Context` variable, which is them handled by the `reduce` function.

Basic template for a mapper class -

```java
public class [mapper-class] extends Mapper<[key-type1], [value-type-1], [key-type-2], [value-type-2]> {
 public void map([key-type-1] key, [value-type-1] value, Context context) {
        // body of mapper
    }
}
```

Needed imports

```java
import java.io.IOException;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Mapper.Context;
```

## Reducer Class

Reducer class for a `MapReduce` program extends the abstract class `Reducer`. The `reduce` method is to be overridden in this class.

Basic template of reducer class -

```java
public class [reducer-class] extends Reducer<[key-type-1], [value-type-1], [key-type-2], [value-type-2]> {
 public void reduce([key-type-1] key, Iterable<[value-type-1]> values, Context context){
        //body of reducer
    }
}
```

Needed imports

```java
import java.io.IOException;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.Reducer.Context;
```

## Driver Class

Driver class is the main class which controls the execution of the program. Here we create a `Job` object and set the driver, mapper, and reducer class used in our program.

Basic template for a driver class-

```java
public class [driver-class] {
 public static void main(String[] args) {
  Job j = new Job();
  j.setJobName("My First Job");
  j.setJarByClass([driver-class].class);
  j.setMapperClass([mapper-class].class);
  j.setReducerClass([reducer-class].class);
  j.setOutputKeyClass([key-type].class);
  j.setOutputValueClass([value-type].class);
  FileInputFormat.addInputPath(j, new Path(args[0]));
  FileOutputFormat.setOutputPath(j, new Path(args[1]));
  System.exit(job.waitForCompletion(true) ? 0 : 1);
 }
}
```

Needed imports

```java
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import java.io.IOException;
import org.apache.hadoop.conf.Configuration;
```

## How to execute MapReduce

### Step 1

- execute the following command to store the location of all the jar files needed for the execution of the map reduce program.

```bash
H_CLASSPATH=$(hadoop classpath)
```

Check if the command was succesful.

```bash
echo $H_CLASSPATH
```

### Step 2

- compile to `.java` files to there respective `.class` files, either individually or all at once.

For individual files, here `-cp` flag stands for `classpath`

```bash
javac -cp $H_CLASSPATH filename.java
```

or all `.java` files at once using wildcards like `*.java`

```bash
javac -cp $H_CLASSPATH *.java
```

### Step 3

- make a jar file of all the `.class` files, using this command

```
jar -cvf [jarfilename.jar] *.class
```

replace `[jarfilename.jar]` with the name of jar file you want.

### Step 4

- put the files which you want to use `MapReduce` program on, to the `HDFS Filesystem`

```bash
hadoop fs -put [path to files]
```

### Step 5

- execute the `MapReduce` program

```bash
hadoop jar [jar-file-name.jar] [driver-class-name] [input-file] [output-folder]
```

### Step 6

- see the output

```
hadoop fs -ls [output-folder]
```

- this will show the contents of the output folder, to see the contents of the files in the output folder use this command

```bash
hadoop fs -cat [output-folder]/[filename]
```

### Example

- for [`WordCount`](./examples/WordCount) program (clone this repo to try it, make sure you are in the `WordCount` directory while executing these commands)

```sh
H_CLASSPATH=$(hadoop classpath)
javac *.java -cp $H_CLASSPATH
jar -cvf wordcount.jar *.class
hadoop fs -put poem.txt
hadoop jar wordcount.jar WordCountDriver poem.txt wordcountout
hadoop fs -ls wordcountout
```

## MapReduce (WordCount Example)

Consider the `MapReduce` program for the `WordCount` program.

Here are some things to consider first-

- Input file - `poem.text`

Here is some part of the input file `poem.txt`

```txt
What I won't tell you is how I became a flute
and brushed against lips but there was no music.
When the blows came furious as juniper.
```

So input-value type is `Text`, and now we have to decide for the key value, since key value has to be unique we can choose the line no to be its key, and so input-key type is `LongWritable`. A example of key-value pair in this case is `<0, "What I won't tell you is how I became a flute">`.

In output of this program we want the total occurences of a particular word so output key-value pair will look like `<"the", 5>`.

So here is summary of what will happen:-

- input file
    - `poem.txt`

- driver class will recieve this input file
    - driver class will then call the mapper function

- map function will receive key-value pairs in form
    - `{ <0, "What I won't tell you is how I became a flute">,`
    - `<1, "and brushed against lips but there was no music.">, ... }`

- map function will generate key value pair of form
    - `{ <"What", 1>, <"I", 1>, <"won't", 1>, <"tell", 1>, ...}`

- reducer class will recieve the key-value pair generated by the mapper class
    - output key-value pair generated by the reducer class
        - `{ <"What", 13>, <"I", 2>, <"won't", 8>, <"tell", 100>, ...}`

- output file
    - `part1000`

### Driver Class

``` java
public class WordCountDriver {
 public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {
        Job j = new Job(); // creates a new job object.
        j.setJobName("My First Job"); // sets the job name

        j.setJarByClass(WordCountDriver.class); // sets the name of the driver class
        j.setMapperClass(WordCountMapper.class); // sets the name of the mappper class
        j.setReducerClass(WordCountReducer.class); // sets the name of the reducer class

        j.setOutputKeyClass(Text.class); // sets the type of the output key
        j.setOutputValueClass(IntWritable.class); // sets the type of the output value

        FileInputFormat.addInputPath(j, new Path(args[0])); // sets the input path, input file
        FileOutputFormat.setOutputPath(j, new Path(args[1])); // sets the output path

        System.exit(job.waitForCompletion(true) ? 0 : 1); // return the return value of the job execution
    }
}
```

### Mapper Class

Here are some thing we need to make a mapper class:

- input key type - `LongWritable` in this case
- input value type - `Text` in this case
- output key type - `Text` in this case
- output value type - `IntWritable` in this case

- `public class WordCountMapper extends Mapper<LongWritable, Text, Text, IntWritable>{}`
    - the declaration of the mapper class
        - `Mapper<[key-type1], [value-type-1], [key-type-2], [value-type-2]>`
- `public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException{}`
    - overriding the map function

```java
public void map(LongWritable key, Text value, Context context) {
    /* 
        sample input
        key - 0, value - "What I won't tell you is how I became a flute"
        key - 1, value - "and brushed against lips but there was no music."
     */

    /* convering the Text type to native String type so we can perform operations on it */
    String inputstring = value.toString(); 
    /* splitting the sentence into words */
    /* "What I won't tell you is how I became a flute" will split into - "What", "I", "won't", ... */
    for (String x : inputstring.split(" ")) {
        /* writing key value pairs to the context object */
        context.write(new Text(x), new IntWritable(1));
    }

    /* 
        sample output, key value pairs written to the context object
        <"What", 1>, <"I", 1>, <"won't", 1>, ...
    */
}
```

### Reducer Class

Here are some things we need to consider while making reducer class

- input key type - `Text` (same as mapper output key type)
- input value type - `IntWritable` (same as mapper output value type)
- output key type - `Text` in this case
- output value type - `IntWritable` in this case

- `public class WordCountReducer extends Reducer<Text, IntWritable, Text, IntWritable> {}`
    - the declaration of the reducer class
        - `Reducer<[key-type-1], [value-type-1], [key-type-2], [value-type-2]>`
- `public void reduce(Text key, Iterable<IntWritable> values, Context context)throws IOException, InterruptedException {}`
    - overriding the reduce function

```java

/* 
    suppose output of the reduce function is 
        <"the", 1>, <"a", 1>, <"the", 1>, <"hello", 1>, <"a", 1>, <"the", 1>
    then reduce function will receive 
        <"the", [1,1,1]>, <"a", [1,1]>, <"hello", [1]>
    i.e. a key and a iterable object contining the values
    and then the ouptut we need in this case is
        <"the", 3>, <"a", 2>, <"hello", 1>
*/

public void reduce(Text key, Iterable<IntWritable> values, Context context){
    int y = 0;
    /* looping over the values of the iterable object */
    for (IntWritable x : values) {
        /* summing them up */
     y++;
    }

    /* writing the output key value pair to the contexet object */
    context.write(key, new IntWritable(y));
}
```

An then the final context object is passed back to the `Job` object in the driver class which then produces the output file.

### Execution

```sh
H_CLASSPATH=$(hadoop classpath)
javac -cp $H_CLASSPATH *.java
jar -cvf wordcount.jar *.class
hadoop fs -put poem.txt
hadoop jar wordcount.jar WordCountDriver poem.txt wordcountout
hadoop fs -ls wordcountout
hadoop fs -cat evenodd\part-r-00000
```
