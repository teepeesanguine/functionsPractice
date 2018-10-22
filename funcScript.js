console.log("JS is connected")

let classChange = document.querySelector(`#useAClass`)

let innerChange=document.querySelector(`#useInnerHTML`)

let innerTruth=false

classChange.addEventListener("click", e=> {
  console.log("class change clicked")

  if(classChange.classList.contains(`theMost`)){
    classChange.classList.remove(`theMost`)
  }
  else{
    classChange.classList.add(`theMost`)
  }

})

innerChange.addEventListener("click", e=> {
  if(innerTruth==false){
    innerChange.style.fontFamily=`"Luckiest Guy", cursive`
    innerChange.style.color=`#FF0DED`
    innerChange.style.backgroundImage=`url("https://media1.giphy.com/media/3ov9k1173PdfJWRsoE/giphy.gif?cid=3640f6095bce0d2d4d39394151a3fa1c")`
    innerChange.style.backroundSize=`cover`

    innerTruth=true
  }
  else {
    innerChange.style.fontFamily=`"Unica One", cursive`
    innerChange.style.color=`black`
    innerChange.style.backgroundImage=`none`

    innerTruth=false
  }


})
