
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.awt.event.*;
public class CursorFrame extends Frame {
  TextField a, b;
  Button btn;
  public CursorFrame() {
    super("CursorFrame");
    setSize(400, 200);
    setLayout(new FlowLayout());
    add(new Label("Click the mouse..."));
    a = new TextField("0", 4);
    b = new TextField("0", 4);
    btn = new Button("RESET");
    add(a); add(b); add(btn);
    addMouseListener(new MouseAdapter() {
      public void mousePressed(MouseEvent e) {
        a.setText(String.valueOf(e.getX()));
        b.setText(String.valueOf(e.getY()));
      }
    });
    addWindowListener(new WindowAdapter() {
      public void windowClosing(WindowEvent e) {
        setVisible(false);
        dispose();
        System.exit(0);
      }
    });
    btn.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent e) {
        a.setText("0");
        b.setText("0");
      }
    });
  }
  public static void main(String[] args) {
    CursorFrame app = new CursorFrame();
    app.setVisible(true);
  }
}
