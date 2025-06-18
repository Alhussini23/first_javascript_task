let body = document.getElementsByTagName("body");
//1=> Create a button. When you click it, change the background color of the page to yellow.
let backgroindColor_body = document.querySelector("#bag-color-body");

backgroindColor_body.onclick = function(){
    if (body[0].style.backgroundColor === "yellow"){

        body[0].style.backgroundColor = "white";
    }else{
        body[0].style.backgroundColor = "yellow";
    }
}
//2=> Create a paragraph and a button. When you click the button, make the text color of the paragraph red.
let color_p = document.querySelector("#button2");

color_p.onclick = function(){
    if (document.querySelector("#p2").style.color === "red"){
        
        document.querySelector("#p2").style.color = "white";
    }else{
        document.querySelector("#p2").style.color = "red";
        documet.querySelector("#p2").style.fontSize = "1px";
    }

}
//3=> Create a button. When you click it, make the button itself bigger by changing its width.
let button_size = document.querySelector("#button3");

button_size.onclick = function(){
    if (button_size.style.width !== "90%"){
        
        button_size.style.width = "90%";
    }else{

        button_size.style.width = "68%";
    }
}

//4=> Create a div with some text and a button. When you click the button, change the div's border to be a solid black border.
let border_color = document.querySelector("#button4");
let border_div = document.getElementById("a-z");

border_color.onclick = function(){
    if (border_div.style.border !== "5px solid black"){
        border_div.style.border = "5px solid black";   
    }else{
        border_div.style.border = "0px solid ";
    }
}
//5=> Create a button. When you click it, change its background color to green.
let backgroindColor_button = document.querySelector("#button5");

backgroindColor_button.onclick = function(){
    if (backgroindColor_button.style.backgroundColor !== "black"){
        
        backgroindColor_button.style.backgroundColor = "black";
        backgroindColor_button.style.color = " rgb(255, 255, 255)"
    }else{
        backgroindColor_button.style.backgroundColor = "white";
        backgroindColor_button.style.color = "black"
    }
}
//6=> Create a heading and a button. When you click the button, make the heading’s font size larger.

let button6_sinze = document.querySelector("#button6");
let h3_sinze = document.getElementById("h3-title");

button6_sinze.onclick = function(){
   if ( h3_sinze.style.fontSize <= "20px"){

        h3_sinze.style.fontSize = "30px";
   }else{
         h3_sinze.style.fontSize = "20px";
   }
}
//7=> Create an image and a button. When you click the button, give the image a solid border
let button_img = document.getElementById("button7");
let img_border = document.querySelector("section img");
// console.log(img_border)
button_img.onclick = function(){
    if (img_border.style.border === "3px solid rgb(203, 213, 203)"){
        
        img_border.style.border = "0px solid rgb(203, 213, 203";   
    }else{
        
        img_border.style.border = "3px solid rgb(203, 213, 203";   
    }
}
//8=>  Create a button. When you click it, make the button text color white and background color black.
let colerText_backgroind = document.getElementById("button8")
colerText_backgroind.onclick = function(){
    if (colerText_backgroind.style.color !== "white" && colerText_backgroind.style.backgroundColor !== "black"){

        colerText_backgroind.style.color = "white";
        colerText_backgroind.style.backgroundColor = "black";
    }else{
        
        colerText_backgroind.style.color = "black";
        colerText_backgroind.style.backgroundColor = "white";
    }
    

}
//9=>  Create a paragraph and a button. When you click the button, make the paragraph text italic.
let buttonItalic = document.getElementById("button9")
let PItalic = document.getElementById("italic")
console.log(buttonItalic)
console.log(PItalic)
buttonItalic.onclick = function(){
    if (PItalic.style.fontstyle !== "italic"){
        PItalic.style.fontStyle = "italic";
    }else{

        PItalic.style.fontstyle = "normal";
    }
}
//10=> Create a div and a button. When you click the button, change the div’s background color to lightblue.
let butt_ = document.querySelector("#change-div");
let div_ = document.querySelector("#div")
butt_.onclick = function(){
    if (document.querySelector("#div").style.backgroundColor === "red"){

        div_.style.backgroundColor = "lightblue";
    }else{
        
        div_.style.backgroundColor = "red";
    }
}
