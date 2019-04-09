
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
import java.awt.*;
import java.awt.event.*;

// Make a main window with two top-level menus: File and Help.
// Help has a submenu and demonstrates a few interesting menu items.
public class MainWindow extends Frame {
  public MainWindow() {
    super("Menu System Test Window");
    setSize(200, 200);

    // make a top level File menu
    FileMenu fileMenu = new FileMenu(this);

    // make a top level Help menu
    HelpMenu helpMenu = new HelpMenu(this);

    // make a menu bar for this frame 
    // and add top level menus File and Menu
    MenuBar mb = new MenuBar();
    mb.add(fileMenu);
    mb.add(helpMenu);
    setMenuBar(mb);
    addWindowListener(new WindowAdapter() {
      public void windowClosing(WindowEvent e) {
        exit();
      }
    });
  }

  public void exit() {
    setVisible(false); // hide the Frame
    dispose(); // tell windowing system to free resources
    System.exit(0); // exit
  }

  public static void main(String args[]) {
    MainWindow w = new MainWindow();
    w.setVisible(true);
  }
}
// Encapsulate the look and behavior of the File menu
class FileMenu extends Menu implements ActionListener {
  MainWindow mw;  // who owns us?
  public FileMenu(MainWindow m) {
    super("File");
    mw = m;
    MenuItem mi;
    add(mi = new MenuItem("Open"));
    mi.addActionListener(this);
    add(mi = new MenuItem("Close"));
    mi.addActionListener(this);
    add(mi = new MenuItem("Exit"));
    mi.addActionListener(this);
  }
  // respond to the Exit menu choice
  public void actionPerformed(ActionEvent e) {
    String item = e.getActionCommand();
    if (item.equals("Exit")) 
      mw.exit();
    else 
      System.out.println("Selected FileMenu " + item);
  }
}

// Encapsulate the look and behavior of the Help menu
class HelpMenu extends Menu implements ActionListener {
  MainWindow mw;  // who owns us?
  public HelpMenu(MainWindow m) {
    super("Help");
    mw = m;
    MenuItem mi;
    add(mi = new MenuItem("Fundamentals"));
    mi.addActionListener(this);
    add(mi = new MenuItem("Advanced"));
    mi.addActionListener(this);
    addSeparator();
    add(mi = new CheckboxMenuItem("Have Read The Manual"));
    mi.addActionListener(this);
    add(mi = new CheckboxMenuItem("Have Not Read The Manual"));
    mi.addActionListener(this);

    // make a Misc sub menu of Help menu
    Menu subMenu = new Menu("Misc");
    subMenu.add(mi = new MenuItem("Help!!!"));
    mi.addActionListener(this);
    subMenu.add(mi = new MenuItem("Why did that happen?"));
    mi.addActionListener(this);
    add(subMenu);
  }
  // respond to a few menu items
  public void actionPerformed(ActionEvent e) {
    String item = e.getActionCommand();
    if (item.equals("Fundamentals"))
      System.out.println("Fundamentals");
    else if (item.equals("Help!!!")) 
      System.out.println("Help!!!");
    // etc...
  }
}
