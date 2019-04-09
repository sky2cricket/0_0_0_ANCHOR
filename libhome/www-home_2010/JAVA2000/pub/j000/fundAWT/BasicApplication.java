
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.awt.event.*;

public class BasicApplication extends Frame {
  public BasicApplication() {
    super("BasicApplication Title");
    setSize(200, 200);
    // add a demo component to this frame
    add(new Label("Application Template...", Label.CENTER),
      BorderLayout.CENTER);
    addWindowListener(new WindowAdapter() {
      public void windowClosing(WindowEvent e) {
        setVisible(false); dispose();
        System.exit(0);
      }
    });
  }

  public static void main(String[] args) {
    BasicApplication app = new BasicApplication();
    app.setVisible(true);
  }
}
