// form: 공백 제거 및 required input 입력 시 버튼 활성화
const form = document.querySelector('form');

if (form) {
    const requiredInput = form.querySelectorAll('input[required]');
    const submitBtn = form.querySelector('.btn-submit');

    requiredInput.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\s/g, '');

            const isAllFilled = [...requiredInput].every(input => input.value.length > 0);
            submitBtn.disabled = !isAllFilled;
        });
    });
}


// 비밀번호 토글 버튼
const togglePwBtn = document.querySelectorAll('.toggle-pw-btn');

togglePwBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const targetInput = targetBtn.closest('.field').querySelector('input');
        const isVisible = targetBtn.getAttribute('aria-pressed') === 'true';

        targetInput.setAttribute('type', isVisible ? 'password' : 'text');
        targetBtn.setAttribute('aria-pressed', String(!isVisible));
    });
});
