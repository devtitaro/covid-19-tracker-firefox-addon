/**
 * 
 * @Author: titaro
 * @FB: facebook.com/tyroklonejr
 * @Twitter: twitter.com/tyroklonejnr
 * 
 * @License: GNU General Public License version 3.0 
 */

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
//   console.log(response);

//   const spinner = document.querySelector('.spin-con');
//   spinner.style.display = 'none';

//   // Assign variables
//   const main = document.querySelector('main');
//   let cases = `<div class="cases" id="cases"></div>`;

//   let table = `
//   <table>
//   <tr>
//       <td><div class="square">active</div><div class="cup" id="active"></div></td>
//       <td><div class="square">critical</div><div class="cup" id="critical"></div></td>
//   </tr>
//   <tr>
//       <td><div class="square">deaths</div><div class="cup" id="deaths"></div></td>
//       <td><div class="square">recovered</div><div class="cup" id="recovered"></div></td>
//   </tr>
//   </table>`;

//   let concat = ``;
//   $('.cases-con').html(cases);
//   $('main').html(table);

//   // Fill in blank spots
//   $('#critical').html(response.critical.toLocaleString());
//   $('#deaths').html(response.deaths.toLocaleString());
//   $('#recovered').html(response.recovered.toLocaleString());
//   $('#active').html(response.active.toLocaleString());

//   // Show the flag
//   let img = document.querySelector('#flag');
//   let ele = document.querySelector('.covid-img');
//   img.src = response.countryInfo.flag;
//   ele.setAttribute('id', 'flag-con');

//   // Flag text
//   let flagText = document.createElement('div');
//   flagText.setAttribute('class', 'covid-img-text');
//   flagText.setAttribute('id', 'flag-text');

//   ele.appendChild(flagText);
  
//   // Total cases text
//   let casesText = document.createElement('p');
//   let casesEle = document.querySelector('#cases');
//   casesText.setAttribute('class', 'cases-text');
//   casesText.textContent = 'total cases';
  
//   // Cases count
//   let casesCount = document.createElement('p');
//   casesCount.setAttribute('class', 'cases-count');
//   casesCount.textContent = response.cases.toLocaleString();
  
//   // Append
//   casesEle.appendChild(casesCount);
//   casesEle.appendChild(casesText);

//   // Put the text in the element
//   $('#flag-text').html(code);

//   // Show a badge
//   let values = {
//       "text" : numConverter(response.cases).toString()
//   }

//   browser.browserAction.setBadgeBackgroundColor({color: "rgb(46, 88, 255)"});
//   browser.browserAction.setBadgeText(values);

//  }).fail(function(jqXHR)
//  {
//   // Check status code
//   if(jqXHR.status == 404)
//   {
//    console.log("404 Found");
//    // Lets check if user country has any data to display
//    const spin = document.querySelector('.spin');
//    const spinText = document.querySelector('.spinner-text');
//    let img = `<img src='assets/img/cheers.png'>`;
//    spin.innerHTML = img;
//    spinText.textContent = 'Congrats!!! Your country is safe from covid-19.';
//   }
//    else 
//   {
//    console.log("Other non-handled error type.");
//   }
//  });
// });


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
  
fetch("https://corona.lmao.ninja/v2/jhucsse/counties/Abbeville", requestOptions)
 .then(response => response.text())
 .then(result => {
     console.log(result);
 })
 .catch(error => console.log('error', error));