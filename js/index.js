const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var i = 0;
var txt = 'I\'m available for freelance!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("available").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function cleanTypeWriter () {
    document.getElementById("available").innerHTML = "";
    i = 0
}

setInterval(cleanTypeWriter, 4000)
setInterval(typeWriter, 2000)


let currentBlock = 2;
let buttonBlock = document.querySelector('.examples_more');
console.log(buttonBlock);


function loadMore() {
  let foundNew = document.querySelector(`.hidden`)

  if(foundNew !== null && foundNew !== undefined) {
    let newBlock = document.querySelector(`.examples_wrapper .examples_block:nth-child(${currentBlock})`)
    newBlock.classList.remove('hidden');
    newBlock.classList.remove('fast_transition');
    newBlock.classList.add('slow_transition');
    newBlock.classList.add('visible');
    currentBlock++
    foundNew = document.querySelector(`.hidden`)
  }
  
  if (foundNew === null || foundNew === undefined) {
    buttonBlock.setAttribute( "onClick", "loadLess()" )
    buttonBlock.innerHTML = 'Show Less'
  }
  
  
}

function loadLess () {
  let lastBlock = document.querySelectorAll(`.visible`)
  lastBlock.forEach(function(elem) {
    elem.classList.add('fast_transition');
    elem.classList.remove('slow_transition');
    elem.classList.remove('visible')
    elem.classList.add('hidden')
  })
  currentBlock = 2

  buttonBlock.setAttribute( "onClick", "loadMore()" )
  buttonBlock.innerHTML = 'Show More'
}


