
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.awt.event.*;

public class AppFrame extends Frame
    implements WindowListener {
  public AppFrame(String title) {
    super(title);
    addWindowListener(this);
  }
  public void windowClosing(WindowEvent e) {
    setVisible(false);
    dispose();
    System.exit(0);
  }
  public void windowClosed(WindowEvent e) {}
  public void windowDeactivated(WindowEvent e) {}
  public void windowActivated(WindowEvent e) {}
  public void windowDeiconified(WindowEvent e) {}
  public void windowIconified(WindowEvent e) {}
  public void windowOpened(WindowEvent e) {}
}
