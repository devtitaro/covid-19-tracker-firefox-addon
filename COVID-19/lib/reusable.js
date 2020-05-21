/**
 * 
 * @Author: titaro
 * @FB: facebook.com/tyroklonejr
 * @Twitter: twitter.com/tyroklonejnr
 * 
 * @License: GNU General Public License version 3.0
 */

/**
 *
 * A function that changes number format
 * 
 */
function numConverter(x)
{
 // Lets begin
 if(isNaN(x)) 
 return x;

 if(x < 9999)
 {
  return x;
 }

 if(x < 1000000)
 {
  return Math.round(x/1000) + "K";
 }

 if( x < 10000000)
 {
  return (x/1000000).toFixed(1) + "M";
 }

 if(x < 1000000000)
 {
  return Math.round((x/1000000)) + "M";
 }

 if(x < 1000000000000)
 {
  return Math.round((x/1000000000)) + "B";
 }
}

/**
 * Function for page reload with time interval
 */
function reloader(timeI = 0)
{
 // Reloader stuff
 setTimeout(function()
 {
  // Reload
  location.reload();
 }, timeI);
}