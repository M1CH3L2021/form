import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const form = document.getElementById('form')

const nameInput = document.getElementById('name')
const nameSpan = document.getElementById('name-span')

const emailInput = document.getElementById('email')
const emailSpan = document.getElementById('email-span')

const phoneInput = document.getElementById('phone')
const phoneSpan = document.getElementById('phone-span')

const select = document.querySelector('select')

const textarea = document.querySelector('textarea')

nameInput.addEventListener('focus', () => {
  nameSpan.classList.add('focused')
})

nameInput.addEventListener('focusout', () => {
  if (nameInput.value === '') {
    nameSpan.classList.remove('focused');
  }
})

emailInput.addEventListener('focus', () => {
  emailSpan.classList.add('focused')
})

emailInput.addEventListener('focusout', () => {
  if (emailInput.value === '') {
    emailSpan.classList.remove('focused');
  }
})

phoneInput.addEventListener('focus', () => {
  phoneSpan.classList.add('focused')
})

phoneInput.addEventListener('focusout', () => {
  if (phoneInput.value === '') {
    phoneSpan.classList.remove('focused');
  }
})

form.addEventListener('submit', event => {
  event.preventDefault()

  Toastify({
    text: 'O formulário foi enviado com sucesso! ',
    duration: 3000,
    newWindow: true,
    close: true,
    position: 'right',
    stopOnFocus: true,
    style: {
      background: "var(--blue)"
    }
  }).showToast()

  nameInput.value = ''
  emailInput.value = ''
  phoneInput.value = ''
  select.value = ''
  textarea.value = ''
})