import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/toolTip.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import FetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';

// '[data-menu="suave"] a[href^="#"]'
/*
{
  behavior: 'smooth',
  block: 'start'
}
*/

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]', {
  behavior: 'smooth',
  block: 'start'
});
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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDownmenu = new DropDownMenu('[data-dropdown]');
dropDownmenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchAnimais('./json/animaisapi.json', '.numeros-grid');
FetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
