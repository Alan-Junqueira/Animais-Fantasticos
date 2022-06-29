export default function InitToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;

    document.body.appendChild(tooltipBox); // Adiciona a tooltip ao final da página.

    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`; // Se não adicionar o px ele não funciona
      this.tooltipBox.style.left = `${event.pageX + 20}px`; // Pois recebe um número inteiro.
    } // Foi adicionado 20px pra aumentar o tamanho da caixa e tirar um bug.
  };

  const onMouseLeave = {
    handleEvent() {
      // tem que ser exatamente o handleEvent
      this.tootipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  };

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tootipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
