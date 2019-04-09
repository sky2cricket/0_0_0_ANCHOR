
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.applet.Applet;

public class ChoiceSimpleTest extends Applet {
  public void init() {
    Choice rgb = new Choice();

    rgb.add("Red");
    rgb.add("Green");
    rgb.add("Blue");

    add(rgb);
  }
}   
