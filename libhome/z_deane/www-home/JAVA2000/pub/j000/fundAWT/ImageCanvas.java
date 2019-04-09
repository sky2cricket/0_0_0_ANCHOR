
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.applet.*;

class ImageCanvas extends Component {
  private Image image;
  public ImageCanvas(Image i) {
    image = i;
  }
  public void paint(Graphics g) {
    if (image != null)
      g.drawImage(image, 0, 0, this);
  }
}

public class ScrollingImage extends Applet {
  public void init() {
    setLayout(new BorderLayout());
    ScrollPane sp =
      new ScrollPane(ScrollPane.SCROLLBARS_ALWAYS);
    Image im =
      getImage(getCodeBase(), "./images/SMarea.gif");
    sp.add(new ImageCanvas(im));
    add(sp, BorderLayout.CENTER);
  }
}
