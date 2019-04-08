#t1_grab_title.py
#from
#t0_grab_title.py

#/gwork/cdeane/VANVACTOR/py/at/t1_grab_title.py

# generic_shell.py
# /gwork/cdeane/vpy/generic_shell.py

# chd nov 5 2016

# chd sep 11 2018

# purpose:  pull title out of top level MODS.xml file
#           to replace in page level MODS.xml file.
#           page level errors continue to be mysterious.

# cmdline: python t0_grab_title.py batch5d

###############################FUNCTION###########################

def do_something(arg):
        #this is a function
        print "this is a function: "+arg
        N=4
        return(N)
        #
        #

##################################MAIN############################
import sys, os
import datetime #for datetime
timestamp0=datetime.datetime.now()

pgm           = sys.argv[0] #name of pgm
if (len(sys.argv)<2):
        print "usage: python "+pgm+" source_dir   "
        sys.exit(0)
        #
        #
source_dir   = sys.argv[1] #name of input dir



if (os.path.isdir(source_dir) == False) :
        print "source_dir: no such directory: "+source_dir
        print "usage: python "+pgm+" source_dir "
        sys.exit(0)
        #
        #



cmdline="python"
for item in sys.argv:
        s0=item
        cmdline = cmdline +" "+s0
        #
        #
print cmdline


#ReturnValue=do_something("example of a function")

Elist = os.listdir(source_dir)
Flist = []
Glist = []
Hlist = []
TITLElist = []

for item in Elist:
        e00 = item
        e01 = e00.replace("\n","")
        if e01.find(".xml") < 0:
                Flist.append(e01)
        #
        #

Flist.sort()
for item in Flist:
        f00 = item
        f01 = f00.replace("\n","")
        Gfile = source_dir+'/'+f01+".xml"
        Hdir  = source_dir+'/'+f01
        G     = open(Gfile,"r")
        title_state=0
        Glist = G.readlines()
        for item in Glist:
                g00 = item
                if (title_state < 1):
                        g01 = g00.replace("\n","")
                        if g01.find("<title>")>-1:
                                title_state=1
                                title_line = g01.replace('title>','mods:title>',2)
                                #
                                # end if
                        #
                        #end if title_state
                #
                # end for item in Glist
        print "Gfile= "+Gfile
        print "g01= "+str(g01)
        print "title_line= "+title_line
        Hlist = os.listdir(Hdir)
        for item in Hlist:
                h00 = item
                h01 = h00.replace("\n","")
                if h01.find('MODS.xml') < 0:
                        Hfile = source_dir+'/'+f01+'/'+h01+'/MODS.xml'
                        print "Hfile="+Hfile   ####h01="+h01
                        J = open(Hfile,"r")
                        Jlist = J.readlines()
                        Jall = ""
                        for item in Jlist:
                                j00 = item
                                j01 = j00.replace("\n","")
                                if j01.find('<mods:title>')>-1:
                                        Jall = Jall+title_line+"\n"
                                else:
                                        Jall = Jall+j01+"\n"
                                        #
                                        #
                                #
                                #end for item in Jlist
                        J.close()
                        K = open(Hfile,"w")
                        K.write(Jall)
                        K.close()
                        #
                        #end if
                #
                # end for item in Hlist
        #
        #end for item in Flist


timestamp1=datetime.datetime.now()
duration=timestamp1-timestamp0
print "       begin time: "+str(timestamp0)
print "         end time: "+str(timestamp1)
print "         duration: "+str(duration)
print cmdline
