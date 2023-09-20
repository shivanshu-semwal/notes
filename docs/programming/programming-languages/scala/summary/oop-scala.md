# OOP in Scala

## Classes

```scala
class Point(xc: Int, yc: Int) {
  var x: Int = xc
  var y: Int = yc
  def move(dx: Int, dy: Int) {
    x = x + dx
    y = y + dy
    println ("Point x location : " + x);
    println ("Point y location : " + y);
  }
}
```

```scala
class Point(val xc: Int, val yc: Int) {
  var x: Int = xc
  var y: Int = yc

  def move(dx: Int, dy: Int) {
    x = x + dx
    y = y + dy
    println("Point x location : " + x);
    println("Point y location : " + y);
  }
}

class Location(override val xc: Int, override val yc: Int, val zc: Int)
    extends Point(xc, yc) {
  var z: Int = zc

  def move(dx: Int, dy: Int, dz: Int) {
    x = x + dx
    y = y + dy
    z = z + dz
    println("Point x location : " + x);
    println("Point y location : " + y);
    println("Point z location : " + z);
  }
}

object Demo {
  def main(args: Array[String]) {
    val loc = new Location(10, 20, 15);
    // Move to a new location
    loc.move(10, 10, 5);
  }
}
```

## Objects

### `Singleton Objects`

- A singleton is a class that can have only one instance, i.e., Object.
- You create singleton using the keyword object instead of class keyword.
- Since you can't instantiate a singleton object, you can't pass parameters to the primary constructor.
- it is a design pattern where you make constructor private

e.g. here `Demo` is a singleton object

```scala
class Point(val xc: Int, val yc: Int) {
  var x: Int = xc
  var y: Int = yc
  def move(dx: Int, dy: Int): Unit = {
    x = x + dx
    y = y + dy
  }
}

object Demo {
  def main(args: Array[String]): Unit = {
    val point = new Point(10, 20)
    printPoint()
    def printPoint {
      println("Point x location : " + point.x);
      println("Point y location : " + point.y);
    }
  }
}
```

## Access Modifiers

### private

- A private member is visible only inside the class or object that contains the member definition

```scala
class Outer {
  class Inner {
    private def f():Unit = { println("f") }
    class InnerMost {
        f() // OK
    }
  }
  new Inner.f() // Error: f is not accessible
}
```

### protected

- A protected member is only accessible from subclasses of the class in which the member is defined

### public

- Unlike private and protected members, it is not required to specify Public keyword for Public members.
- There is no explicit modifier for public members.
- Such members can be accessed from anywhere.

### scope of protection

- Access modifiers in Scala can be augmented with qualifiers.
- A modifier of the form `private[X]` or `protected[X]` means
- that access is private or protected "up to" `X`,
- where `X` designates some enclosing package, class or singleton object.

```scala
package society {
  package professional {
    class Executive {
      private[professional] var workDetails = null
      private[society] var friends = null
      private[this] var secrets = null

      def help(another: Executive) = {
        println(another.workDetails)
        println(another.secrets) //ERROR
      }
    }
  }
}
```

- `workDetails` will be accessible to any class within the enclosing package professional.
- `friends` will be accessible to any class within the enclosing package society.
- `secrets` will be accessible only on the implicit object within instance methods (this).

## Traits

- like interfaces in java
- encapsulate methods and field definition
- which can then be reused by mixing them into classes
- unlike inheritance, where only one class can be inherited
- no of traits can be mixed in one class
- traits can be partially implemented, have no constructors

```scala
trait Equal{
  def isEqual(x:Any):Boolean
  def isNotEqual(x:Any):Boolean = !isEqual(x)
}
```

using trait

```scala
class Point(xc:Int, yc:Int) extends Equal{
  var x:Int = xc;
  var y:Int = yc;
  def isEqual(obj:Any) = {
    obj.isInstanceOf[Point] && obj.asInstanceOf[Point].x == y
  }
}

object Demo{
  def main(args: Array[String]):Unit = {
    val p1 = new Point(2, 3)
    val p2 = new Point(2, 4)
    val p3 = new Point(3, 3)
    println(p1.isNotEqual(p2))
    println(p1.isNotEqual(p3))
    println(p1.isNotEqual(2))
  }
}
```

- multiple traits, `extends` and then `with`

```scala
trait Bark {
    def bark: String = "Woof"
}
trait Dog {
    def breed: String
    def color: String
}
class SaintBernard extends Dog with Bark {
    val breed = "Saint Bernard"
    val color = "brown"
}
```
