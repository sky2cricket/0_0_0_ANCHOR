//file: PerfometerApplet.java  
//makes the histogram to show PerfAPI cts
//gets new y values from ydata_vals array

//by Cricket Haygood Deane, Aug 27, 1999

import java.lang.*;
import java.awt.*;
import java.applet.Applet;


public class PerfometerApplet extends Applet {

	//Bar width =2
	//This gives 280/2=140 histogram bars
        //so need 140x2 +3 points to draw the polygon (283)
        //the first and last point have same coordinates

   int  GLOBAL_SCALE=1; //max y value for histogram display area
   int  GLOBAL_MAX_PTS=283;//dimension xcoord, ycoord
   int  GLOBAL_TIME=0;
   int  GLOBAL_COUNT=0;
   int  PAPI_TIMER_INTERVAL=1000;

   int [] ydata_vals;    //declare int array of count values
   int [] ycoord; //declare int array of ypixel values
   int [] xcoord; //declare int array of xpixel values

   Color BACKGROUND_COLOR = new Color (255,255,255);
   Font  f  = new Font("Monospaced",Font.BOLD,16);


   //======================================================
   //use constructor if this class is a frame 
   //use init() if this is an applet
   //======================================================
    public void init() 
    {
        //code for frame
   	//call base class constructor
   	//super(NameForThisWindow);

           StringBuffer Buff = new StringBuffer();
           //setLayout(new FlowLayout(0,9,9));//not need for applet
           //setSize(280,200);//width,height not need for applet
           setBackground(BACKGROUND_COLOR);

         PAPI_TIMER_INTERVAL=1000; //milliseconds

         ycoord = new int [GLOBAL_MAX_PTS]; // dynamically allocate the array
 	 ycoord = get_init_ycoords(); // load initial y_values for pixels
	
         xcoord = new int [GLOBAL_MAX_PTS]; // dynamically allocate the array
 	 xcoord = get_init_xcoords(); // load x_values for pixels ONCE

	ydata_vals = new int [200]; //dynamically allocate the array
        ydata_vals = get_init_ydata();//load values for this array ONCE
	
	GLOBAL_SCALE=1;

	}//end init [ replaces constructor ]


   //======================================================
    public void paint(Graphics g) 
    {

        //For drawing the polygon, 
        //Start with lower right corner of graph then
        //draw in a "clockwise" direction
        //Note in java, the point [ 0, 0 ] is always 
        //the upper left corner of display area

        //For Perfometer.java application:
        //YCOORDS ARE RESET EVERY TIME A NEW READ COMES IN
    
        //For PerfometerApplet.java applet:
        //YCOORDS ARE RESET EVERY TIME THE TIMER WAKES UP 

           int new_y_value=ydata_vals[GLOBAL_COUNT%200];
	   GLOBAL_COUNT++;

	   String DataStr; 
	   DataStr = new String(GLOBAL_TIME + "  " + new_y_value );
	   GLOBAL_TIME += PAPI_TIMER_INTERVAL;

	if(new_y_value > GLOBAL_SCALE )
        {
	   GLOBAL_SCALE = (new_y_value *2); //need y_vals from 0 to 100
	}

	//shift values left, then add new bar on right end
	ycoord = get_new_ycoords(ycoord,new_y_value);
	

	g.drawString(DataStr,25,75); //draw time in ms, cts
	g.drawLine(0,100,280,100);//x1,y1,x2,y2      //draw centerline
	g.fillPolygon(xcoord,ycoord,GLOBAL_MAX_PTS); //draw histogram


        //When you are using dynamic input to drive
        //the Perfometer, if you don't sleep the same 
        //amount as the timer interval set in writeCts, 
        //it starts blinking 
        //BLINKING IS BAD
	//To change the rate of running the PerfometerApplet,
	//change the value of PAPI_TIMER_INTERVAL in 
        //the init function

 	try {
                Thread.sleep(PAPI_TIMER_INTERVAL, 0 ); //ms, ns
        }

        catch (InterruptedException e) {
                System.out.println( e.toString());
                }
        repaint();

    }//end public void paint()


   //======================================================
	public int[] get_init_ycoords  () {

        //for barwidth=2
	//with x-length=280, you will have 140 bars,
        //need (140*2)+3=283 points to define the histogram
	//GLOBAL_MAX_PTS=283

	int y[];//declare an array of integers
	y = new int [GLOBAL_MAX_PTS]; //dynamically allocate the array

        //These are the init values  for y
        int [] init_ycoord = { 200, 200,
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 

        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 

        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 

        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 

        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 

        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 
        200  };
       
	for(int i=0;i<GLOBAL_MAX_PTS;i++) {
	y[i]=init_ycoord[i];
	}

	return (y);
	} // end get_init_ycoords

   //======================================================
	public int[] get_init_xcoords  () {

	int x[];//declare an array of integers
	x = new int [GLOBAL_MAX_PTS]; //dynamically allocate the array

        //XCOORD VALUES ARE NEVER RESET.
	int[] xcoord = { 280, 
          0,   0,    2,   2,   4,   4,   6,   6,   8,   8,  
         10,  10,   12,  12,  14,  14,  16,  16,  18,  18,  
         20,  20,   22,  22,  24,  24,  26,  26,  28,  28,  
         30,  30,   32,  32,  34,  34,  36,  36,  38,  38,  
         40,  40,   42,  42,  44,  44,  46,  46,  48,  48,  
         50,  50,   52,  52,  54,  54,  56,  56,  58,  58,  
         60,  60,   62,  62,  64,  64,  66,  66,  68,  68,  
         70,  70,   72,  72,  74,  74,  76,  76,  78,  78,  
         80,  80,   82,  82,  84,  84,  86,  86,  88,  88,  
         90,  90,   92,  92,  94,  94,  96,  96,  98,  98,  

        100, 100,  102, 102, 104, 104, 106, 106, 108, 108,  
        110, 110,  112, 112, 114, 114, 116, 116, 118, 118,  
        120, 120,  122, 122, 124, 124, 126, 126, 128, 128,  
        130, 130,  132, 132, 134, 134, 136, 136, 138, 138,  
        140, 140,  142, 142, 144, 144, 146, 146, 148, 148,  
        150, 150,  152, 152, 154, 154, 156, 156, 158, 158,  
        160, 160,  162, 162, 164, 164, 166, 166, 168, 168,  
        170, 170,  172, 172, 174, 174, 176, 176, 178, 178,  
        180, 180,  182, 182, 184, 184, 186, 186, 188, 188,  
        190, 190,  192, 192, 194, 194, 196, 196, 198, 198,  

        200, 200,  202, 202, 204, 204, 206, 206, 208, 208,  
        210, 210,  212, 212, 214, 214, 216, 216, 218, 218,  
        220, 220,  222, 222, 224, 224, 226, 226, 228, 228,  
        230, 230,  232, 232, 234, 234, 236, 236, 238, 238,  
        240, 240,  242, 242, 244, 244, 246, 246, 248, 248,  
        250, 250,  252, 252, 254, 254, 256, 256, 258, 258,  
        260, 260,  262, 262, 264, 264, 266, 266, 268, 268,  
        270, 270,  272, 272, 274, 274, 276, 276, 278, 278,  
        280, 280 };

	for(int i=0;i<GLOBAL_MAX_PTS;i++) {
	x[i]=xcoord[i];
	}

	return (x);
	} // end get_init_xcoords

   //======================================================
        public int[] get_init_ydata    () {

        //this is the pseudo input data array
        //comprised of values generated by writeCts0 on redwood

        int y[];//declare an array of integers
        y = new int [200]; //dynamically allocate the array

        //YDATA  VALUES ARE NEVER RESET.
        //These values were generated by writeCts.c  
        int[] ydata_vals = {
19820808, 16169811, 20079735, 23102256, 17249209,
9959138, 7188458, 19278380, 16069744, 20038354,
23188587, 17162900, 9824949, 8060686, 18951075,
16106097, 20422432, 23497260, 16586914, 9305498,
8870098, 18602704, 16049467, 20597720, 23550708,
16292700, 8875154, 9456815, 18287277, 16009649,
20687786, 23528015, 16029315, 8739694, 9962775,
17994145, 16009761, 20887596, 23665242, 15794145,
8416672, 10467362, 17824109, 16061911, 21150230,
23637953, 15429197, 8189396, 10861666, 17684033,
15979963, 21195277, 23801982, 15269449, 7941914,
11306035, 17430343, 15973380, 21259524, 23766627,
15065527, 7853224, 11576131, 17353925, 16144098,
21390727, 23577350, 15068651, 7631431, 12149862,
17142287, 16361742, 21261743, 23420701, 15079722,
7341859, 12722165, 16855304, 16463300, 21470532,
23225715, 15064187, 7018888, 13311160, 16532243,
16526076, 21397230, 22940399, 15084409, 6882321,
13469796, 16471519, 16701537, 21591898, 22837239,
15053228, 6619858, 13897800, 16298029, 16794430,
21578291, 22611714, 15115557, 6452392, 14168239,
16261379, 16877958, 21558419, 22339610, 14945434,
6452205, 14268272, 16285935, 16946563, 21604974,
22251715, 14840869, 6463799, 14505653, 16346099,
17190827, 21873855, 21912558, 14525969, 6479729,
14973044, 16390155, 17320369, 21794480, 21622609,
14205703, 6464239, 15188280, 16319842, 17588114,
22044079, 21284183, 13908581, 6459016, 15508305,
16222098, 17611105, 21944480, 21163372, 13766031,
6534295, 15878768, 16348882, 17818719, 22235952,
20756089, 13353985, 6501927, 16350852, 16211024,
18031246, 22159695, 20358842, 13110184, 6483492,
16637611, 16319541, 18219060, 22236507, 20120407,
12766895, 6459160, 16652283, 16195143, 18263884,
22252408, 20085199, 12725976, 6493322, 17083884,
16154452, 18402969, 22335988, 19805347, 12465688,
6453447, 17186543, 16228316, 18641254, 22586383,
19481669, 12184239, 6455052, 17360047, 16156823,
18596963, 22433113, 19476462, 12138560, 6461291,
17533674, 16166307, 18715055, 22544367, 19368306
        }; //200 y values generated by writeCts on redwood

        for(int i=0;i<200;i++) {
        y[i]=ydata_vals[i];
        }
        return (y);
        } // end get_init_ydata


   //======================================================
       
	public int[] get_new_ycoords  ( int[] prev_yct, int new_y_value ) {
        //this func returns array of scaled y values
        //scaling done one pt at a time, using current value of GLOBAL_SCALE

	int[] new_yct; //declare and array of integers 
        new_yct = new int [GLOBAL_MAX_PTS]; //dynamically allocate the array

        //no change for first two points 
        //  (lower right corner, lower left corner)
	new_yct[0]=prev_yct[0];
	new_yct[1]=prev_yct[1];

	//left shift all of these 2 places
	for(int i=2; i< GLOBAL_MAX_PTS-3; i++) {
		new_yct[i]=(prev_yct[i+2]);
		}

	   
	//new_y_val coming in on right side
        // the ycts array holds scaled values, but no
        // need to rescale previous values
        // Note new_y_val/GLOBAL_SCALE always gives answer between 0 and 100
        // and new_yct[n] always gives answer between 100 and 200
	new_yct[GLOBAL_MAX_PTS-3]=200 - (  ((new_y_value*100)/GLOBAL_SCALE)   );
	new_yct[GLOBAL_MAX_PTS-2]=200 - (  ((new_y_value*100)/GLOBAL_SCALE)   );
	 
        // if new_yct[n] too large, give default value of 190
        // too large value would result in pixel value outside histogram box
	if(new_yct[GLOBAL_MAX_PTS-3] > 190 ) {
		new_yct[GLOBAL_MAX_PTS-3] = 200 - 10;
		new_yct[GLOBAL_MAX_PTS-2] = 200 - 10;
		}

        //no change for the last point (lower right corner)
	new_yct[GLOBAL_MAX_PTS-1]=prev_yct[GLOBAL_MAX_PTS-1];

	return(new_yct);

	}//end get_new_ycoords
	

}//end class PerfometerApplet


