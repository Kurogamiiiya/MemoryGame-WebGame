let imgStock = [
    "img/cat.png","img/cat.png",
    "img/chameleon.png","img/chameleon.png",
    "img/crab.png","img/crab.png",
    "img/elephant.png","img/elephant.png",
    "img/fox.png","img/fox.png",
    "img/hen.png","img/hen.png",
    "img/koala.png","img/koala.png",
    "img/penguin.png","img/penguin.png",
    "img/turtle.png","img/turtle.png",
    "img/whale.png","img/whale.png"
]

let imgs = [];

setLevel();

let card1 = null,card2 = null;
let btn1 = null,btn2 = null;
let moves = 0;
let scoreText = document.getElementById("scoreText");
let win = false;
let winText = document.getElementById("winText");

function play(obj){
    if(card1 == null){
        card1 = obj;
    }else{
        card2 = obj;
    }

    if(card2 != null){
        if(card1.src != card2.src ){
           
        let img1 = document.getElementById(card1.id);
        let img2 = document.getElementById(card2.id);
        
        setTimeout(function(){
            img1.style.display="none";
            img2.style.display="none";
        },150)

        setTimeout(function(){
            btn1.style.display="block";
            btn2.style.display="block";
        },200)

        
        setTimeout(function(){
            card1 = null;card2 = null;
            btn1 = null;btn2 = null; 
        },200)
        

      
        } 
        else if(card1.src == card2.src){

            let img1 = document.getElementById(card1.id);
            let img2 = document.getElementById(card2.id);
            card1Src = card1.getAttribute("src");

            for (let index = 0; index < imgs.length; index++) {
                if(imgs[index] == card1Src){
                    imgs[index] = "";
                }
                
            }
    
            setTimeout(function(){
                img1.style.display="none";
                img2.style.display="none";
            },150)
    
            setTimeout(function(){
            card1 = null;card2 = null;
            btn1 = null;btn2 = null;
            
            },200)

            win = winCheck();

            if(win){
                

                setTimeout(function(){
                    winText.textContent="WIN";
                },200)

                setTimeout(function(){
                    winText.textContent="SCORE";
                },3000)
            }

            

            console.log(imgs);
          
        }
    }

    
}

function changeBg(obj){
    obj.style.backgroundColor="rgba(17, 235, 243, 0.61)";

    obj.addEventListener('mouseleave',function(){
        obj.style.backgroundColor="rgb(179, 179, 196)";
        }
    )
   
}

function btnClick(obj){
    obj.style.display="none";
    let nextSibling = obj.nextElementSibling;
    nextSibling.style.display="block"

    if(btn1 == null){
        btn1 = obj;
    }else{
        btn2 = obj;
    }

    play(nextSibling);

    moves++;
    scoreText.textContent=moves;
}

function setLevel(){

    for(let i = 0; i < imgStock.length;i++){
        imgs[i] = "";
    }
    
    imgStock.forEach(element => {
        let randomNumber = Math.floor(Math.random() * 20);
        while(imgs[randomNumber] != ""){
            randomNumber = Math.floor(Math.random() * 20);
        }
        imgs[randomNumber] = element; 
    });
    
    
    for (let index = 0; index < imgs.length; index++) {
        let imgId = document.getElementById("img"+(index+1));
        imgId.src = imgs[index];
        
    }

    for (let index = 0; index < 20; index++) {
        let img = document.getElementById("img"+(index+1));
        let btn = img.previousElementSibling;

        btn.style.display="block"

        img.style.display="none";
        
    }
    
}

function winCheck(){
    
    for (let index = 0; index < imgs.length; index++) {
        if(imgs[index] != ""){
            console.log("test");
            return false
        }
    }

    return true
    
}




