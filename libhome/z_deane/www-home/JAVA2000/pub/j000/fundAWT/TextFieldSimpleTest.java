
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html



import java.awt.*;
import java.applet.Applet;

public class TextFieldSimpleTest extends Applet {
  public void init() {
    TextField f1 =
      new TextField("type something");
    add(f1);
  }
}
