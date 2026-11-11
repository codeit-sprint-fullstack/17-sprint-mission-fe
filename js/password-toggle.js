// 눈 아이콘 버튼을 누르면 같은 칸의 input type을 password <-> text로 바꾼다
const toggleButtons = document.querySelectorAll(".password-toggle");

toggleButtons.forEach((button) => {
  const wrap = button.closest(".password-wrap");
  const input = wrap.querySelector("input");

  button.addEventListener("click", () => {
    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";
    wrap.classList.toggle("is-visible", isHidden);
    button.setAttribute("aria-label", isHidden ? "비밀번호 숨기기" : "비밀번호 보기");
  });
});
