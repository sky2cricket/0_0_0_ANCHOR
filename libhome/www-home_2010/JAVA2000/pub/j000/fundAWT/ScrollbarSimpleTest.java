
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.applet.Applet;

// A simple example that makes a Scrollbar appear
public class ScrollbarSimpleTest extends Applet {
  public void init() {
    Scrollbar sb = 
      new Scrollbar(Scrollbar.HORIZONTAL,
                    0, // initial value is 0
                    5, // width of slider
                 -100, 105); // range -100 to 100
    add(sb);
  }
}
