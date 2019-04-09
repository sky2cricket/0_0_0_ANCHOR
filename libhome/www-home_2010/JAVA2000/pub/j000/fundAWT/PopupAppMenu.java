
//from http://developer.java.sun.com/developer/onlineTraining/awt/contents.html
this is part of PopupApplication.java
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

