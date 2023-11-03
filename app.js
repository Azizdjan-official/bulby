let image = [
    "/off.jpg",
    "/on.jpg",
];

let imageElem = document.querySelector(".image");
let btn =document.querySelector("button")
let i=0;


btn.addEventListener('click', () =>{
    if(++i === image.length){
        i=0;
    }
imageElem.setAttribute("src", image[i]);    
})
// **************************************1chi vazifani javobi
// **************************************1chi vazifani javobi
// **************************************1chi vazifani javobi



