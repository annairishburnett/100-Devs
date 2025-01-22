document.getElementById('purple').addEventListener('click', partyPurple)
document.getElementById('green').addEventListener('click', partyGreen)
document.getElementById('blue').addEventListener('click', partyBlue)

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'purple'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'green'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'blue'
  document.querySelector('body').style.color = 'white'
}