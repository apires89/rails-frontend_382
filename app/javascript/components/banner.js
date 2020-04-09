import Typed from 'typed.js';
// import relevant variables or methods from packages

// create a new function

const BannerText = () => {
  new Typed('#text-from-typed',{
  strings: ["Change your life", "Learn how to code", "#stayathome"],
  typeSpeed: 30,
  loop: true
    });
}

//export the function

export { BannerText };

//import it in application.js


