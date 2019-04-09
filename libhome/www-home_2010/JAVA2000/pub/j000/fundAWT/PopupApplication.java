
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html

       

import java.awt.*;
import java.awt.event.*;
public class PopupApplication extends AppFrame {
  Button btn; TextField msg; PopupAppMenu m;
  public PopupApplication() {
    super("PopupApplication");
    setSize(200, 200);
    btn = new Button("Press for pop-up menu...");
    add(btn, BorderLayout.NORTH);
    msg = new TextField();
    msg.setEditable(false);
    add(msg, BorderLayout.SOUTH);
    m = new PopupAppMenu(this);
    add(m);
    btn.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent e) {
        m.show(btn, 10, 10);
      }
    });
    addMouseListener(new MouseAdapter() {
      public void mousePressed(MouseEvent e) {
        if (e.isPopupTrigger())
          m.show(e.getComponent(), e.getX(), e.getY());
      }
      public void mouseReleased(MouseEvent e) {
        if (e.isPopupTrigger())
          m.show(e.getComponent(), e.getX(), e.getY());
      }
    });
  }
  public static void main(String[] args) {
    PopupApplication app = new PopupApplication();
    app.setVisible(true);
  }
}


class PopupAppMenu extends PopupMenu
    implements ActionListener {
  PopupApplication ref;
  public PopupAppMenu(PopupApplication ref) {
    super("File");
    this.ref = ref;
    MenuItem mi;
    add(mi = new MenuItem("Copy"));
    mi.addActionListener(this);
    add(mi = new MenuItem("Cut"));
    mi.addActionListener(this);
    add(mi = new MenuItem("Paste"));
    mi.addActionListener(this);
  }
  public void actionPerformed(ActionEvent e) {
    String item = e.getActionCommand();
    ref.msg.setText("Selected menu item: " + item);
  }
}

