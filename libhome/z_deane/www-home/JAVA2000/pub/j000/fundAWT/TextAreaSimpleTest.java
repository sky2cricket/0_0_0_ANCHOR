
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.applet.Applet;

public class TextAreaSimpleTest extends Applet {
  TextArea disp;
  public void init() {
    disp = new TextArea("Code goes here", 10, 30);
    add(disp);
  }
}
