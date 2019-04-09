
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.awt.event.*;

public class DialogFrame extends AppFrame {
  Dialog d;

  public DialogFrame() {
    super("DialogFrame");
    setSize(200, 100);
    Button btn, dbtn;
    add(btn = new Button("Press for Dialog Box"),
      BorderLayout.SOUTH);
    d = new Dialog(this, "Dialog Box", false);
    d.setSize(150, 150);
    d.add(new Label("This is the dialog box."),
      BorderLayout.CENTER);
    d.add(dbtn = new Button("OK"),
      BorderLayout.SOUTH);
    btn.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent e) {
        d.setVisible(true);
      }
    });
    dbtn.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent e) {
        d.setVisible(false);
      }
    });
    d.addWindowListener(new WindowAdapter() {
      public void windowClosing(WindowEvent e) {
        d.setVisible(false);
      }
    });
  }
  public static void main(String[] args) {
    DialogFrame app = new DialogFrame();
    app.setVisible(true);
  }
}
