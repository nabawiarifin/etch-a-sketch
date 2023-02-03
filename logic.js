const sketchContainer = document.querySelector('#sketch-container')

var toAdd = document.createDocumentFragment();
for(var i=0; i < (16*16); i++){
   var newDiv = document.createElement('div');
   newDiv.id = 'box'+i;
   newDiv.className = 'box';
   toAdd.appendChild(newDiv);
}

sketchContainer.append(toAdd)

const colorBox = document.querySelectorAll('.box')

colorBox.forEach((box)=>{
    box.addEventListener('mouseover', ()=>{
        box.style.backgroundColor = 'red'
    })
})





