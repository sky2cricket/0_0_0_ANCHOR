
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.awt.event.*;

public class Draw extends java.applet.Applet {
  public void init() {
    addMouseListener(
        new MouseAdapter() {
            int savedX, savedY;
            public void mousePressed(MouseEvent e) {
              savedX = e.getX();
              savedY = e.getY();
            }
            public void mouseReleased(MouseEvent e) {
              Graphics g = Draw.this.getGraphics();
              g.drawRect(savedX, savedY, 
                         e.getX()-savedX,
                         e.getY()-savedY);
            }
        }
    );
  }
}
