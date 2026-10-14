// form: required input 입력 시 버튼 활성화
const form = document.querySelector('form');

if (form) {
    const requiredInput = form.querySelectorAll('input[required]');
    const submitBtn = form.querySelector('.btn-submit');

    requiredInput.forEach(input => {
        input.addEventListener('input', () => {
            const allFilled = [...requiredInput].every(input => input.value.length !== 0);
            submitBtn.disabled = !allFilled;
        });
    });
}