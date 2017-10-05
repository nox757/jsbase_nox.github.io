var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

//change images on click
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === './images/img_cat.jpg') {
        // alert("OHH");
      myImage.setAttribute ('src','./images/img_cat2.jpg');
    } else {
      myImage.setAttribute ('src','./images/img_cat.jpg');
    }
}

//add personal greeting
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML  = 'Cat is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML  = 'Cat is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

