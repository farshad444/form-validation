
document.querySelector('#my-form').addEventListener('submit', function (e) {

    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value
    let age = document.querySelector('#age').value
    let userName = document.querySelector('#userName').value
    let password = document.querySelector('#password').value
    e.preventDefault()

    function checkLength () {
        if (firstName.toLowerCase().length > 10 || lastName.toLowerCase().length > 10 || userName.length > 10 || password.length > 10) {
            alert('Too Long!')
        }
    }

    function checkEmpty () {
        if (firstName == "" || lastName == "" || age == "" || userName == "" || password == "") {
            alert('Its Empty!')
        }
    }

    function containNumber () {
        if (firstName.match(/[0-9]/g) || lastName.match(/[0-9]/g)) {
            alert('Error!')
        }
    }

    function containString () {
        if (age.match(/[a-zA-Z]/g) || age.length > 2) {
            alert('Error!')
        }
    }

    function passwordCheck () {
        if (!password.match(/[A-Z]/g) || !password.match(/[0-9]/g)) {
            alert('Password Should Contain UpperCase - LowerCase and Numbers!')
        }
    }

    function trueMessage () {
        let trueMess = document.createElement('div')
        trueMess.textContent = 'Your Information Saved Successfully!'
        trueMess.setAttribute('class', 'true')
        document.querySelector('.true-message').appendChild(trueMess)
    }

    checkLength()
    containNumber()
    containString()
    checkEmpty()
    passwordCheck()
    trueMessage()
})

