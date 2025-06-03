const fnEl = document.getElementById('fullname')
const emailEl = document.getElementById('email')
const phoneEl = document.getElementById('phone')
const msgEl = document.getElementById('msg')

const btnEl = document.getElementById('btn')


btnEl.addEventListener('click', function(e){
    e.preventDefault()
    let fname = fnEl.value
    let email = emailEl.value 
    let phone = phoneEl.value
    let msg = msgEl.value

    console.log(fname, email, phone, msg)

    alert(`${fname}, thank your for contacting me. Will revert back on this ${email} and this phone number: ${phone}. Your request is: ${msg}`)
})








