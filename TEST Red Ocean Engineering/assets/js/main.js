document.addEventListener('DOMContentLoaded', function () {
    var togglePass = document.querySelectorAll('.toggle-pass');

    togglePass.forEach(function (element) {
        element.addEventListener('click', function () {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
                element.querySelector('i').classList.remove('fa-eye');
                element.querySelector('i').classList.add('fa-eye-slash');
                element.closest('.passwords-field').querySelector('input').setAttribute('type', 'text');
            } else {
                element.classList.remove('active');
                element.querySelector('i').classList.add('fa-eye');
                element.querySelector('i').classList.remove('fa-eye-slash');
                element.closest('.passwords-field').querySelector('input').setAttribute('type', 'password');
            }
        });
    });
});
