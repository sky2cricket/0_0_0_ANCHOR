
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.applet.Applet;

public class CheckboxGroupTest extends Applet {
  public void init() {
    // create button controller
    CheckboxGroup cbg = new CheckboxGroup();

    Checkbox cb1 = 
      new Checkbox("Show lowercase only", cbg, true);
    Checkbox cb2 =
      new Checkbox("Show uppercase only", cbg, false);

    add(cb1);
    add(cb2);
  }
}

