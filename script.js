
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

let emptyForm = () => {
  document.getElementsByClassName("form-control")[0].value = "";
  document.getElementsByClassName("form-control")[1].value = "";
}

// document.getElementById("contactButton").addEventListener('click', () => {emptyForm()});
document.getElementById("contactButton").onclick = emptyForm;




// import imgs from "./img/*.jpg";
// import innovation1 from "./innovation1.jpg";
// import innovation2 from "./innovation2.jpg";
// import innovation3 from "./innovation3.jpg";
/*
  Put the JavaScript code you want below.
*/

// let sortImg = () => {
//   console.log("sortImg Control");
//   let imgArr = [];
//   for (let img in imgs){
//     imgArr.push(img)
//   }
// }
//
// let fillCar = () => {
//   console.log("fillCar Control");
//   for (i = 0 ; i < imgArr.length ; i ++){
//     getElementsByClassName("d-block w-100")[i].src = imgArr[i].value;
//   }
// }
//
// document.getElementsByClassName("nav-link")[0].addEventListener('click', sortImg);

console.log("Hey look in your browser console. It works!");
