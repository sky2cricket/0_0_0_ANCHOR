
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html


import java.awt.*;
import java.applet.Applet;

public class TextAreaScroll extends Applet {
  String s = 
    "This is a very long message " +
    "It should wrap when there is " +
    "no horizontal scrollbar.";
  public void init() {
    add(new TextArea (s, 4, 15, 
      TextArea.SCROLLBARS_NONE));
    add(new TextArea (s, 4, 15, 
      TextArea.SCROLLBARS_BOTH));
    add(new TextArea (s, 4, 15,
      TextArea.SCROLLBARS_HORIZONTAL_ONLY));
    add(new TextArea (s, 4, 15, 
      TextArea.SCROLLBARS_VERTICAL_ONLY));
  }
}
