// email & password input 공백 무시
const formInput = document.querySelectorAll('.form-input');

formInput.forEach(input => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\s/g, '');
    });
});


// 비밀번호 토글 버튼
const togglePwBtn = document.querySelectorAll('.toggle-pw');

togglePwBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const targetInput = targetBtn.closest('.field').querySelector('input');
        const isVisible = targetBtn.getAttribute('aria-pressed') === 'true';

        targetInput.setAttribute('type', isVisible ? 'password' : 'text');
        targetBtn.setAttribute('aria-pressed', String(!isVisible));
    });
});