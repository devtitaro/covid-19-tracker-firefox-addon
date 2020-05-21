/**
 * 
 * @Author: titaro
 * @FB: facebook.com/tyroklonejr
 * @Twitter: twitter.com/tyroklonejnr
 * 
 * @License: GNU General Public License version 3.0 
 */


// Wait till document is ready
$(document).ready(function()
{
 // Popup codes
 $('.coffee').click(function()
 {
  // t
  let url = {
    'url' : 'https://ko-fi.com/titaro'
  };
  browser.tabs.create(url);
 });
});
