import initTabNav from './modules/tab-nav.js';
import accordion from './modules/accordion.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';
import ScrollSuave from './modules/scroll-suave.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/toolTip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

// '[data-menu="suave"] a[href^="#"]'
/*
{
  behavior: 'smooth',
  block: 'start'
}
*/
const options = {
  behavior: 'smooth',
  block: 'start'
};
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]', options);

scrollSuave.init();
initTabNav();
accordion();
initAnimacaoScroll();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
