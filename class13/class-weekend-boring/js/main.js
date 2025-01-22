document.querySelector('#check').addEventListener('click', checkDay)

function checkDay() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerHTML = "It's rowing day!"
  } else if(day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerHTML = "These days are for resting your body and soul."
  } else{
    document.querySelector('#placeToSee').innerHTML = "These days are the simple plain days that make up our lives."
  }
}