import outsideClick from './outside-click.js';

export default class DropDownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';

    // Define otuchstart e click como padrão caso o
    // usuário não defina um valor para events.
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events
    }

    // bind
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Ativa o dropDownMenu e adiciona a função que observa o clique fora dele.
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao DropDownMenu
  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
