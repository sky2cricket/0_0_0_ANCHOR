
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.applet.Applet;

public class CheckboxSimpleTest extends Applet {
  public void init() {
    Checkbox m = new Checkbox("Allow Mixed Case");
    add(m);
  }
}
