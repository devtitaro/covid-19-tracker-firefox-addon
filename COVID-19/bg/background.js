/**
 * 
 * @Author: titaro
 * @FB: facebook.com/tyroklonejr
 * @Twitter: twitter.com/tyroklonejnr
 * 
 * @License: GNU General Public License version 3.0 
 */


// // Update the api every 10 seconds
// reloader(10000);

// let getIP = null;
// let code = null;

// // Get the IP
// $.getJSON("https://api.ipify.org?format=json", function(data)
// { 
//  // Put the IP in a variable
//  getIP = data.ip;
//  console.log(getIP);
// });

// // Then use it here so we can get the country code
// $.getJSON("http://www.geoplugin.net/json.gp?ip=" + getIP, function(response)
// {
//  // Put the country code in a variable
//  code = response.geoplugin_countryCode;

//  $.getJSON("https://corona.lmao.ninja/v2/countries/" + code, function(response)
//  {
//    console.log(response);
//    console.log(getIP);
//    console.log(response.cases);

//    // Prepare properties object
//    let values = {
//     "text" : numConverter(response.cases).toString()
//    }

//    // Make it known to firefox
//    browser.browserAction.setBadgeBackgroundColor({color: "rgb(46, 88, 255)"});
//    browser.browserAction.setBadgeText(values);
//   });
// });


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://corona.lmao.ninja/v2/countries/", requestOptions)
.then(response => response.text())
.then(result => {
   console.log(result);
})
.catch(error => console.log('error', error));