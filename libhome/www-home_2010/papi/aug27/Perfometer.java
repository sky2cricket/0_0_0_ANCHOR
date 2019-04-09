//file: Perfometer.java  
//makes the histogram to show writeCts.c results
//gets input from stdin
//command line:
//
//  writeCts -t PAPI_FP_INS | java Perfometer
//
//This program is longer than the PerfometerApplet code,
//because this program reads in data and then updates
//the display.  There is no io for the applet.


//by Cricket Haygood Deane, Aug 5, 1999

import java.io.*;
import java.net.*;
import java.awt.*;
import java.awt.event.*;

public class Perfometer extends Frame {


   int  GLOBAL_RESCALE_FLAG=0;//flag to denote rescaling is needed 
   int  GLOBAL_SCALE=1; //max y value for histogram display area
   int  GLOBAL_INIT_SCALE=1;
   int  GLOBAL_MAX_PTS=283;//dimension xcoord, ycoord
   int  GLOBAL_TIME=0;
   int  GLOBAL_COUNT=0;
   int  OPEN=0;
   int  PAPI_TIMER_INTERVAL=1000;
    StringBuffer new_y_sb = new StringBuffer();
    StringBuffer DataStr = new StringBuffer();

   int [] yct;    //declare int array of count values
   int [] ycoord; //declare int array of ypixel values

   int [] xcoord; //declare int array of xpixel values

   Color BACKGROUND_COLOR = new Color (255,255,255);
   Font  f  = new Font("Monospaced",Font.BOLD,16);


    //use base class constructor instead of init since this is a frame 
    public Perfometer(String NameForThisWindow) 
    {

   	//call base class contructor
   	super(NameForThisWindow);

           StringBuffer Buff = new StringBuffer();
           setSize(280,200);//width,height
           setBackground(BACKGROUND_COLOR);//default bg is grey

	try {
	        int inputC=2;
                //read in the timing interval 
	        while(true) {
	        inputC=System.in.read();
		if(  (inputC==' ') || (inputC=='\n' ) )break;
		Buff.append((char)inputC);
		}
		PAPI_TIMER_INTERVAL=Integer.parseInt(Buff.toString());

	    }

	catch (IOException e) {
		System.out.println(" io error on interval value\n");
		} 

         yct   = new int [GLOBAL_MAX_PTS]; // dynamically allocate the array
 	 yct   = get_init_ycts(); // load initial values for cts

         ycoord = new int [GLOBAL_MAX_PTS]; // dynamically allocate the array
 	 ycoord = get_init_ycoords(); // load initial values for pixels
	
         xcoord = new int [GLOBAL_MAX_PTS]; // dynamically allocate the array
 	 xcoord = get_init_xcoords(); // load initial values for pixels
	
	new_y_sb.append("1");
	DataStr.append("1");
	GLOBAL_SCALE=1;

	}//end constructor


    public void paint(Graphics g) 
    {

        //For drawing the polygon, all Xvals stay the same
        //Start with lower right corner of graph then
        //draw in a "clockwise" direction


        //YCOORDS ARE RESET EVERY TIME A NEW READ COMES IN

        /* this reloads the StringBuffer DataStr */ 
	DataStr.setLength(0);
	DataStr.append(get_one_line().toString());

        /* this extracts cts and converts to a long integer*/
        int new_y_value;
        OPEN=1;
         new_y_value=get_one_y_value(DataStr.toString());

        if(GLOBAL_COUNT>0) {
	 new_y_value=1;
	 GLOBAL_COUNT++;
         GLOBAL_SCALE=2;
	 }
  
        else {
           new_y_value=get_one_y_value(DataStr.toString());
           }


	if(new_y_value > GLOBAL_SCALE )
        {
	   GLOBAL_SCALE = (new_y_value *2); //need y_vals from 0 to 100
	   //System.out.println(" GLOBAL_SCALE: "+GLOBAL_SCALE);
	}
           yct = get_new_ycts (yct, new_y_value);


	ycoord = get_new_ycoords(yct);
	

	g.drawString(DataStr.toString(),25,75); //draw time in ms, cts
	g.drawLine(0,100,280,100);//x1,y1,x2,y2      //draw centerline
	g.fillPolygon(xcoord,ycoord,GLOBAL_MAX_PTS); //draw histogram


	//if you don't sleep the same amount as the 
	//timer interval, it starts blinking 
        //BLINKING IS BAD

	if(OPEN==1) {
 	try {
                Thread.sleep(PAPI_TIMER_INTERVAL, 0 ); //ms, ns
        }

        catch (InterruptedException e) {
                System.out.println( e.toString());
                }
        repaint();

	}

        

	
    }//end public void paint()

   //======================================================
	public int[] get_init_ycts  () {
	//initialize ycts array

	int y[];//declare an array of integers
	y = new int [GLOBAL_MAX_PTS]; //dynamically allocate the array

	for(int i=0;i<GLOBAL_MAX_PTS;i++) {
	y[i]=0;
	}

	return (y);
	} // end get_init_ycts



   //======================================================
	public int[] get_init_ycoords  () {

        //for barwidth=2
	//with x-length=280, you will have 140 bars,
        //need (140*2) +3 points to define the histogram
        //right now using barwidth = 5, GLOBAL_MAX_PTS=115
	//right now using barwidth =2,  GLOBAL_MAX_PTS=283

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
       
	public int[] get_new_ycts  ( int[] prev_yct, int new_y_value ) {
        //this func returns array of scaled y values
        //scaling done one pt at a time, using current value of GLOBAL_SCALE

	int[] new_yct; //declare and array of integers 
        new_yct = new int [GLOBAL_MAX_PTS]; //dynamically allocate the array

        //no change for first two points 
        //  (lower right corner, lower left corner)
	new_yct[0]=prev_yct[0];
	new_yct[1]=prev_yct[1];

	//left shift all of these 2 places
	//for(int i=2; i< 112; i++) 
	for(int i=2; i< GLOBAL_MAX_PTS-3; i++) {
		new_yct[i]=(prev_yct[i+2]);
		}

	   

	//new val coming in on right side
        // the ycts array holds scaled values, but no
        // need to rescale previous values
        // Note yval/GLOBAL_SCALE always gives answer between 0 and 100
	new_yct[GLOBAL_MAX_PTS-3]=(new_y_value*100)/GLOBAL_SCALE;
	new_yct[GLOBAL_MAX_PTS-2]=(new_y_value*100)/GLOBAL_SCALE;
	 
	if(new_yct[GLOBAL_MAX_PTS-3] < 10 ) {
		new_yct[GLOBAL_MAX_PTS-3] = 10;
		new_yct[GLOBAL_MAX_PTS-2] = 10;
		}

        //no change for the last point (lower right corner)
	//new_yct[114]=prev_yct [114];
	new_yct[GLOBAL_MAX_PTS-1]=prev_yct[GLOBAL_MAX_PTS-1];

	return(new_yct);

        }// end get_new_ycts


   //======================================================
	public int[] get_new_ycoords  ( int[] yct ) {

	//covert yct values to scaled_y_values to  pixel values

	int[] new_ycoord; //declare and array of integers 
        new_ycoord = new int [GLOBAL_MAX_PTS]; //dynamically allocate the array

	for(int i=0;i<GLOBAL_MAX_PTS;i++) {
		new_ycoord[i]=200-yct[i];
		}

	return(new_ycoord);
	
	}//end get_new_ycoords
	

   //======================================================
	public StringBuffer get_one_line () {

        int i=0;
        int j=0;

        int inputC=2;
	int end_one_line=0;
	StringBuffer ascii_str = new StringBuffer();
	
        while(end_one_line==0) {
	try {

	    ////Step 1. Read the input
	    ////        store in ascii_str buffer
            inputC=System.in.read();

	    if (inputC == (int)'\n')  { 
                end_one_line++; 
               } //'\n' flag to end line 

	    else {
	    	ascii_str.append((char)inputC);
		}
	    
	}//end try

	catch ( IOException e ) 
            {
	    e.printStackTrace();
	    }

        }//end while(end_one_line==0)

        return(ascii_str);
	}//end method public StringBuffer get_one_line


   //======================================================
	public int get_one_y_value (String dat_str) {
	//This function takes the ct value
        //and converts it to the bar height for the
        //histogram.

        long ct_value = 1;
        int i_ct_value=1;
        StringBuffer local_str = new StringBuffer();
        local_str.append(dat_str); 
	//System.out.println("local_str >>" +local_str+"<<");

	    ////Step 1. Extract the count value  
	    ////        from ascii_str buffer
	    ////        store in new_y_sb 

	    int i=0;
            int j=0;
            int k=0;
            //find first ' '
	    while(i<local_str.length()) {
		if(local_str.charAt(i)==' ') {
			j=i;
			break;
			}
		i++;
		}

            //find first non ' '
            
	    i=j;
	    while(i<local_str.length()-1) {
		if(local_str.charAt(i)!=' ' ) {
			j=i;
			break;
			}
		i++;
		}
	     
            i=j;
  
	    new_y_sb.setLength(0);
            //put  cts value in new_y_sb
	    while(i<local_str.length()) {
                //if (local_str.charAt(i)==' ')  break;
		if (local_str.charAt(i)=='\n') break;
	        new_y_sb.append(local_str.charAt(i));
	
             i++;
 	    }

	//System.out.println(local_str.toString() + " --- >>" + new_y_sb.toString()+"<<\n\n");


	
	    ////Step 2.  Convert new_y_sb to an integer

	    try {
		i_ct_value=Integer.parseInt(new_y_sb.toString());
		//System.out.println(" get_one_y_value: ct_value: "+i_ct_value);
		}
	    catch(NumberFormatException e) {
		//System.out.println(" get_one_y_value: bad value: "
		//+new_y_sb.toString());
		//return(0);
		}
		
            //i_ct_value = (int ) ct_value;
	    return(i_ct_value);

	}//end method public long get_one_y_value
	

	
//main method -- note absence of main method in applet
public static void main(String argv[]) {
	StringBuffer Buff = new StringBuffer();
        if(argv.length > 0 )  Buff.append(argv[0] +", ");
	Buff.append("uptime in ms, counts" );
        Perfometer pj = new Perfometer (Buff.toString() );
        pj.setSize(280,200);//width,height
        pj.show();
  }


}//end class Perfometer


