const authForm = document.querySelector('.auth_form');

if (authForm) {
  const inputs = authForm.querySelectorAll('.form_input');
  const submitButton = authForm.querySelector('.auth_submit');

  // 모든 입력란이 채워지면 버튼 활성화
  function checkInputs() {
    const allFilled = Array.from(inputs).every((input) => {
      const isPassword =
        input.name === 'password' ||
        input.name === 'confirm_password';

      return isPassword
        ? input.value !== ''
        : input.value.trim() !== '';
    });

    if (submitButton) {
      submitButton.disabled = !allFilled;
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('input', checkInputs);
  });

  checkInputs();

  // 각 눈 버튼에 연결된 비밀번호 표시·숨김
  const toggleButtons = authForm.querySelectorAll('.password_toggle');

  toggleButtons.forEach((button) => {
    const inputId = button.getAttribute('aria-controls');
    const passwordInput = document.getElementById(inputId);
    const image = button.querySelector('img');

    if (!passwordInput || !image) return;

    button.addEventListener('click', () => {
      const isHidden = passwordInput.type === 'password';

      passwordInput.type = isHidden ? 'text' : 'password';

      image.src = isHidden
        ? './img/btn_visibility_on.png'
        : './img/btn_visibility.png';

      button.setAttribute(
        'aria-label',
        isHidden ? '비밀번호 숨기기' : '비밀번호 표시'
      );
    });
  });
}