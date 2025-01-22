document.querySelector('#check').addEventListener('click', checkDay)

function checkDay() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerHTML = "It's rowing day!"
    document.querySelector('body').style.backgroundImage = "url(img/rowing-day.webp)"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('body').style.color = 'black'

  } else if(day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerHTML = "Today is for rest and adventure to renew your body and soul."
    document.querySelector('body').style.backgroundImage = "url(img/adventure-day.webp)"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('body').style.color = 'black'
  } else{
    document.querySelector('#placeToSee').innerHTML = "Today is a day for simple pleasures."
    document.querySelector('body').style.backgroundImage = "url(img/simple-pleasures.webp)"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('body').style.color = 'white'
  }
}