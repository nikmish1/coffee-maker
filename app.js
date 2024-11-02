
import Store from './services/Store.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';

Router.init();

window.app = {};
app.store = Store;

window.addEventListener("DOMContentLoaded", async () => {
    let nav = document.querySelector("nav");
    await loadData();
})