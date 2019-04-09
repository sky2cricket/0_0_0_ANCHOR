
//from http://java.sun.com/docs/books/tutorial/uiswing/overview/example-swing/Unit.java


public class Unit {
    String description;
    double multiplier;

    Unit(String description, double multiplier) {
        super();
        this.description = description;
        this.multiplier = multiplier;
    }

    public String toString() {
        String s = "Meters/" + description + " = " + multiplier;
        return s;
    }
}
