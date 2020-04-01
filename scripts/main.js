let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/barb-img.jpeg') {
      myImage.setAttribute ('src','images/aha.jpg');
    } else {
      myImage.setAttribute ('src','images/barb-img.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ' on meee (take on me)' ;
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ' on meee (take on me)';
  }

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = myName + ' on meee (take on me)';
    }
  }

myButton.onclick = function() {
    setUserName();
  }
  