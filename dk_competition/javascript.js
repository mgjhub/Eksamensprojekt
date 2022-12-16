const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
 
 menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        });

// change background of navbar

function scrollValue() {
       var navbar = document.getElementById('navbar');
       var scroll = window.scrollY;
       if (scroll < 300) {
           navbar.classList.remove('scrolled');
       } else {
           navbar.classList.add('scrolled');
       }
   };
   
   window.addEventListener('scroll', scrollValue);
   
   // get to top button
   let mybutton = document.getElementById("myBtn");
   
   window.onscroll = function() {scrollFunction()};
   
   function scrollFunction() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
   }
   
   // get to top function
   function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0; 
   }
   