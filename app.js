
import Store from './services/Store.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';
import CartItem from './components/CartItem.js';




window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    //let nav = document.querySelector("nav");
    loadData();
    app.router.init();
})

window.addEventListener("appcartchange", event => {
    const badge = document.getElementById("badge");
    console.log("app.store.cart", app.store.cart);
    const qty = app.store.cart.reduce((acc, item) => {
        console.log("acc", acc);
        return acc + item.quantity
    }, 0);
    console.log("qty--->", qty);
    badge.textContent = qty;
    badge.hidden = qty == 0;
})