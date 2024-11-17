let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let img = document.getElementById("img");
let assume = "anil";

btn1.onclick = () => {
    if (assume === "anil") {
        img.src = "https://media.istockphoto.com/id/1311106995/photo/exterior-of-clothing-store-with-shoes-and-other-accessories-displaying-in-showcase.jpg?s=1024x1024&w=is&k=20&c=-WV8Av_mOHyen4koQr5eV1nyu7Fckq-uPWTdNFBe8og=";
        assume = "hari";
    } 
    else if (assume === "hari") {
        img.src = "https://media.istockphoto.com/id/1296705483/photo/make-up-products-prsented-on-white-podiums-on-pink-pastel-background.jpg?s=1024x1024&w=is&k=20&c=HYjdh-kg1C8Us70Oz9oxg92z4QvkO796J14ZTe2UgOk=";
        assume = "balu";
    } 
    else if (assume === "balu") {
        img.src = "https://cdn.pixabay.com/photo/2021/11/18/06/08/mannequins-6805551_1280.jpg";
         ass = "sai";
    }

}


btn2.onclick = () => {
    if (ass === "sai") {
        img.src = "https://cdn.pixabay.com/photo/2015/08/25/11/50/shop-906722_640.jpg";
        ass = "san";
    } 
    else if (ass === "san") {
        img.src = "https://cdn.pixabay.com/photo/2016/11/18/17/14/cloth-1835894_640.jpg";
        ass = "mon";
    } 
    else if (ass === "mon") {
        img.src = "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg";
        ass = "anil";
    }
}
let text = document.getElementById("text");
let search = document.getElementById("search");
search.onclick = () => {
    let currentText = text.value.trim().toLowerCase(); 
    if (currentText === "shirts") {
        window.location.href = 'shirts.html'; 
    }
    else if(currentText==="tshirts"){
        window.location.href='tshirts.html'
    }
    else if(currentText==='shoes'){
        window.location.href='shoes.html';
    }
    else if(currentText==='jeans'){
        window.location.href='jeans.html'
    }
    else{
        alert("Product not updated");
        window.location.href='notfound.html'

    }
}
