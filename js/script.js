import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/toolTip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import FetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';

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
const scrollSuave = new ScrollSuave(
  '[data-menu="suave"] a[href^="#"]',
  options
);
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

initDropDownMenu();
initMenuMobile();
initFuncionamento();
initAnimacaoScroll();

fetchAnimais('./json/animaisapi.json', '.numeros-grid');
FetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
