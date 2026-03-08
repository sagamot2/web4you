document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const passInput = document.getElementById('passInput');
    const errorMsg = document.getElementById('error-msg');

    function checkLogin() {
        const password = passInput.value;
        const correctPassword = "2206";/*มีแอบมาดูด้วย นิสัยย*/

        if (password === correctPassword) {
            window.location.href = "/birthday/birth.html"; 
        } else {
            errorMsg.style.display = "block";
            passInput.value = ""; 
            passInput.focus();
        }
    }
    loginBtn.addEventListener('click', checkLogin);
    passInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkLogin();
        }
    });
});