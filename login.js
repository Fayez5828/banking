
document.getElementById('Submit-button').addEventListener('click', function () {
    // console.log('submit button clicked')
    // get user form email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;


    // get user password
    const userPasswordField = document.getElementById('password');
    const userPassword = userPasswordField.value;


    // // validation check
    if (userEmail == 'fayez@gmail.com' && userPassword == 123456) {
        window.location.href = "banking.html";
    }

})