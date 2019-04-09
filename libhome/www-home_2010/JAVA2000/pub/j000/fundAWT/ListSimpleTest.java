
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.applet.Applet;

public class ListSimpleTest extends Applet {
  public void init() {
    List list = new List(5, false);
    list.add("Seattle");
    list.add("Washington");
    list.add("New York");
    list.add("Chicago");
    list.add("Miami");
    list.add("San Jose");
    list.add("Denver");

    add(list);
  }
}
