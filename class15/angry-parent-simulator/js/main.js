document.querySelector('#yell').addEventListener('click', yellFullName)

function yellFullName() {
  const firstName = document.querySelector('#firstName').value
  const firstMiddle = document.querySelector('#firstMiddle').value
  const lastMiddle = document.querySelector('#lastMiddle').value
  const lastName = document.querySelector('#lastName').value

  const fullName = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`

  document.querySelector('#placeToYell').innerHTML = fullName
}