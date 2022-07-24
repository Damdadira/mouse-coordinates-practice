const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2; //target의 절반 사이즈를 받아오려고
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x} ${y}`);

    //css에서 .vertical{} 선언할 때 left로 지정했기 때문
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
    // tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`; //숫자 위치 조정

    // vertical.style.left = `${x}px`; //style을 사용할 때는 px를 붙여야 함
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
  });
});
