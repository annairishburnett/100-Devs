document.querySelector('#yell').addEventListener('click', yellFullName)

function yellFullName() {
  const firstName = document.querySelector('#firstName').value
  const firstMiddle = document.querySelector('#firstMiddle').value
  const lastMiddle = document.querySelector('#lastMiddle').value
  const lastName = document.querySelector('#lastName').value

  const fullName = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`

  document.querySelector('#placeToYell').innerHTML = fullName

  document.querySelector('body').style.backgroundImage = "url(img/dynamic-wang-cD-_fbY6yww-unsplash.webp"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'black'
  document.querySelector('h1').style.color = 'red'
}

