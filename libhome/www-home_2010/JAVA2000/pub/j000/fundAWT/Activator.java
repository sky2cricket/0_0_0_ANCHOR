
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html

import java.awt.*;
import java.awt.event.*;

public class Activator {
  public static void main(String[] args) {
    Button b;
    ActionListener al = new MyActionListener();
    Frame f = new Frame("Hello Java");
    f.add(b = new Button("Hola"), BorderLayout.NORTH);
    b.setActionCommand("Hello");
    b.addActionListener(al);
    f.add(b = new Button("Aloha"), BorderLayout.CENTER);
    b.addActionListener(al);
    f.add(b = new Button("Adios"), BorderLayout.SOUTH);
    b.setActionCommand("Quit");
    b.addActionListener(al);
    f.pack();
    f.show();
  }
}

class MyActionListener implements ActionListener {
  public void actionPerformed(ActionEvent e) {
    // Action Command is not necessarily label
    String s = e.getActionCommand();
    if (s.equals("Quit")) {
      System.exit(0);
    }
    else if (s.equals("Hello")) {
      System.out.println("Bon Jour");
    }
    else {
      System.out.println(s + " selected");
    }
  }
}
