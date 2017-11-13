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
  submitButton.addEventListener('click', function(e) {
    userField.className = 'error'
    passField.className = 'error'
  })
  userField.addEventListener('focus', function (e) {
    userField.removeAttribute('class')
    passField.removeAttribute('class')
  })
  passField.addEventListener('focus', function (e) {
    passField.removeAttribute('class')
    userField.removeAttribute('class')
  })

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none'
  })

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none'
  })


  modal.addEventListener('click', function () {
    modal.style.display = 'none'
  })

  var elements = [userField, submitButton, passField]
  elements.forEach(function (element) {
    element.addEventListener('click', function(e) {
      e.stopPropagation()
    })
  })
})
