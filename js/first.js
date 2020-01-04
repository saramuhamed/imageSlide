


var close= document.getElementById("close");
var prev= document.getElementById("prev");
var next= document.getElementById("next");
var currentImg=0;

lightboxContainer= document.querySelector(".lightbox-container");

close.addEventListener("click",hideLIightbox);
prev.addEventListener("click",getPrev);
next.addEventListener("click",getNext);


var myImages = Array.from (document.querySelectorAll(".item img"));

for (let i = 0; i < myImages.length; i++) {
    var element = myImages[i];
    element.addEventListener("click",showLIightbox)
    
}
function showLIightbox(e){
    imgSrc =e.target.src;
    lightboxContainer.style.display="flex";
    lightboxContainer.firstElementChild.style.backgroundImage="url("+imgSrc+")";
    currentImg= myImages.indexOf(e.target);
 
    
}

function hideLIightbox(){
    //alert("fhdah")
 lightboxContainer.style.display="none";
}

function getPrev(e){
    currentImg--;
    if(currentImg<0){
        currentImg=myImages.length-1;
    }
    lightboxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentImg].src+")";
    
}
function getNext(e){
    currentImg++;
    if(currentImg>myImages.length-1){
        currentImg=0;
    }
    lightboxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentImg].src+")";
    
}
document.addEventListener("keydown",function(e){
    if(e.keyCode==39){
        getNext();
    }
    else if(e.keyCode==37){
        getPrev();
    }
    else if(e.keyCode==27){
        hideLIightbox();
        
    }
})