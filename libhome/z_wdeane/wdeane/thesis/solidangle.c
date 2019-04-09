/* BILL DEANE  THESIS  June 5, 1998 */
/* solidangle.c                     */

#include <stdlib.h>
#include <stdio.h>
#include <math.h>

main()
{
 float x1 = 0.0;
 float x2 = 0.67;
 float x3 = 0.67;
 float x4 = 0.0;
 float y1 = 42.0;
 float y2 = 42.0;
 float y3 = (-42.0);
 float y4 = (-42.0);
 float px, py;
 float m1, m2, m3, m4, c1, c2, c3, c4;  
 float X, L, S, H;     
 float COS_OMEGA, COS_ALPHA, COS_BETA, OMEGA, BETA, ALPHA; 
 float convert;

convert = 360./(2*3.14159);

for(px = 0.0; px <= 0.34; px = px + 0.03)
{
for(py = 0.0; py <= 23.0; py = py + 2.0)
{
 m1 = (px - x1)/(py - y1);
 c1 = (px + x1 -(m1)*(py + y1))/2.0; 
 X = (m1*y3) + c1;
 if(X <= x3)            /* only true for cases 1 and 4 */
   {
    m4 = (px - x4)/(py - y4);
    c4 = (px + x4 -(m4)*(py + y4))/2.0; 
    X = (m4*y2) + c4; 
    if(X <= x2)         /* true for case 1 */
      {
       S = sqrt(((px - x1)*(px - x1)) + ((py - y1)*(py - y1)));
       H = sqrt(((x1 - x4)*(x1 - x4)) + ((y1 - y4)*(y1 - y4)));
       L = sqrt(((px - x4)*(px - x4)) + ((py - y4)*(py - y4)));
       COS_BETA = ((S*S) - (H*H) - (L*L))/((-2)*H*L);
       COS_ALPHA = ((L*L) - (H*H) - (S*S))/((-2)*H*S); 
       BETA = acos(COS_BETA);
       ALPHA = acos(COS_ALPHA);
       OMEGA = BETA + ALPHA;
      }
    else                /* must be case 4 */
      {
       S = ((x2 - x1)*(x2 - x1)) + ((y2 - y1)*(y2 - y1));
       H = sqrt(((px - x1)*(px - x1)) + ((py - y1)*(py - y1)));
       L = sqrt(((px - x2)*(px - x2)) + ((py - y2)*(py - y2)));
       COS_OMEGA = (S - (H*H) - (L*L))/((-2)*H*L);
       OMEGA = acos(COS_OMEGA);
      }
   } 
 else                   /* only true for cases 2 and 3 */
   {
    m2 = (px - x2)/(py - y2);
    c2 = (px + x2 -(m2)*(py + y2))/2.0;
    X = (m2*y4) + c2; 
    if(X >= x4)         /* true for case 3 */
      {
       S = sqrt(((px - x2)*(px - x2)) + ((py - y2)*(py - y2)));
       H = sqrt(((x2 - x3)*(x2 - x3)) + ((y2 - y3)*(y2 - y3)));
       L = sqrt(((px - x3)*(px - x3)) + ((py - y3)*(py - y3)));
       COS_BETA = ((S*S) - (H*H) - (L*L))/((-2)*H*L);
       COS_ALPHA = ((L*L) - (H*H) - (S*S))/((-2)*H*S);
       BETA = acos(COS_BETA);
       ALPHA = acos(COS_ALPHA);
       OMEGA = BETA + ALPHA;
      }
    else                /* must be case 2 */
      {
       S = ((x3 - x4)*(x3 - x4)) + ((y3 - y4)*(y3 - y4));
       H = sqrt(((px - x4)*(px - x4)) + ((py - y4)*(py - y4)));
       L = sqrt(((px - x3)*(px - x3)) + ((py - y3)*(py - y3)));
       COS_OMEGA = (S - (H*H) - (L*L))/((-2)*H*L);
       OMEGA = acos(COS_OMEGA);
      }
   } 
 OMEGA = OMEGA * convert;
 printf("%f\n", px);
 }/* end for py */ 
}/* end for px */
} /* end */  
