
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
public class MyKeyAdapter extends KeyAdapter {
 public void keyTyped(KeyEvent e) {
  System.out.println("User typed: " +
    KeyEvent.getKeyText(e.getKeyCode()));
 }
}
                           }
