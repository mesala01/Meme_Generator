
    const subBtn= document.querySelector("#submit-meme");
    const memeContainer = document.querySelector(".meme-container");

     //listener for form 
     subBtn.addEventListener("click", function(e){
         e.preventDefault();
         createMeme();

     });

     //listener for the remove button
     memeContainer.addEventListener("click", function(e){
         if(e.target.tagName ==="BUTTON"){
             e.target.parentElement.remove();
         }

     });


     function createMeme(){
        const upperText= document.querySelector("#upper-text");
        const img= document.querySelector("#user-image");
        const lowerText= document.querySelector("#lower-text");
        const formDiv = document.querySelector(".form-div");
        const emptySpan = document.createElement("span");
        if (img.value != "" ){
        const newImgCont = document.createElement("div");
        const btn = document.createElement("button");
        btn.classList.add("deleteBtn");
        btn.innerText="Remove";
        newImgCont.classList.add("newImgCont");
        //creating the image node
        const newImg = document.createElement("img");
        newImg.src= img.value;
        //creating the upperText node
        const topTextDiv = document.createElement("div");
        topTextDiv.innerText = upperText.value;
        topTextDiv.classList.add("topTextDiv");
        //creating the lowerText node
        const lowTextDiv = document.createElement("div");
        lowTextDiv.innerText =lowerText.value;
        lowTextDiv.classList.add("lowTextDiv");
        newImgCont.append(newImg);
        newImgCont.append(topTextDiv);
        newImgCont.append(lowTextDiv);
        newImgCont.append(btn);
        memeContainer.append(newImgCont);
     upperText.value="";
        img.value="";
        lowerText.value="";

        }
       

     }









