let character = document.getElementById('character')
let block = document.getElementById('block')

function jump() {
  if(character.classList != 'animate'){
    character.classList.add('animate')
    setTimeout(function(){
      character.classList.remove('animate')
    },500)
  }
    
}

let score = 0;
let checkHit =  setInterval(function(){
  
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
  if(blockLeft < 50 && blockLeft > 0 && characterTop >= 130){
    block.style.animation = 'none'
    block.style.display = 'none'
    alert('you lose')
  }
  if(blockLeft < -13 ) {
    
    score += 1
    console.log(score)
    document.getElementById('score').innerHTML = score
  }
  
})

//refresh page
function refreshPage() {
  location.reload(true)

}

