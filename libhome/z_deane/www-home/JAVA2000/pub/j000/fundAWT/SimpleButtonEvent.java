
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

public class SimpleButtonEvent extends Applet
       implements ActionListener {
  private Button b;

  public void init() {
    b = new Button("Press me");
    b.addActionListener(this);
    add(b);
  }

  public void actionPerformed(ActionEvent e) {
    // If the target of the event was our Button
    // In this example, the check is not 
    //   truly necessary as we only listen to
    //   a single button
    if ( e.getSource() == b ) {
      getGraphics().drawString("OUCH",20,20);
    }
  }
}
