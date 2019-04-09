
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html

import java.awt.Canvas;
import java.awt.Graphics;

class DrawingRegion extends Canvas {
  public DrawingRegion() { 
    setSize(100, 50);
  }
  public void paint(Graphics g) {
    g.drawRect(0, 0, 99, 49); // draw border
    g.drawString("A Canvas", 20,20);
  }
}
