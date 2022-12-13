const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
 
 menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        });

// change background of navbar


   
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