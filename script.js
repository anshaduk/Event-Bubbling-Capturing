document.querySelector('#grandparent')
.addEventListener('click',(e)=>{
    console.log("GrandparentClicked")
    e.stopPropagation();
},true)

document.querySelector('#parent')
.addEventListener('click',(e)=>{
    console.log('parentClicked')
    // e.stopPropagation()
},true)

document.querySelector('#child')
.addEventListener('click',(e)=>{
    console.log('childClicked')
    
},true)