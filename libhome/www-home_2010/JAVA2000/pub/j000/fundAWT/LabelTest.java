
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.applet.Applet;

public class LabelTest extends Applet {
  public void init() {
    add(new Label("A label"));
    // right justify next label
    add(new Label("Another label", Label.RIGHT));
  }
}
