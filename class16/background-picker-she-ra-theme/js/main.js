document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('teal').onclick = partyTeal

function partyPurple() {
  document.querySelector('body').style.backgroundImage = "url(img/brightmoon.webp)"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundImage = "url(img/etheria.webp)"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundImage = "url(img/crystalcastle.webp)"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'black'
}

function partyTeal() {
  document.querySelector('body').style.backgroundImage = "url(img/whisperingwoods.webp)"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'white'
}
