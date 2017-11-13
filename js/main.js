document.addEventListener('DOMContentLoaded', function() {

  var modal = document.querySelector('.modal')
  var signIn = document.querySelector('.signin')
  signIn.addEventListener('click', function() {
    modal.style.display = 'block'
  })

  var closeButton = document.querySelector('.close')
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none'
  })

  var submitButton = document.querySelector('.submit')
  var userField = document.querySelector('#user')
  var passField = document.querySelector('#pass')
  submitButton.addEventListener('click', function() {
    userField.className = 'error'
    passField.className = 'error'
  })

})
