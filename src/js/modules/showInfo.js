export default class ShowInfo {
  constructor(trigger) {
    this.btns = document.querySelectorAll(trigger);
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const blockInfo = btn.closest('.module__info-show').nextElementSibling;

        blockInfo.classList.add('animated', 'fadeIn');
        blockInfo.classList.toggle('msg');
        blockInfo.style.marginTop = '20px';
      });
    });
  }
}
