
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.awt.event.*;
public class WMDialog extends Dialog
    implements WindowListener {
  public WMDialog(Frame ref, String title, boolean modal) {
    super(ref, title, modal);
    addWindowListener(this);
  }
  public void windowClosing(WindowEvent e) {
    setVisible(false);
  }
  public void windowClosed(WindowEvent e) {}
  public void windowDeactivated(WindowEvent e) {}
  public void windowActivated(WindowEvent e) {}
  public void windowDeiconified(WindowEvent e) {}
  public void windowIconified(WindowEvent e) {}
  public void windowOpened(WindowEvent e) {}
}
