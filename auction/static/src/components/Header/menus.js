/** @odoo-module **/

import { Component } from "@odoo/owl";

export class MenuItem extends Component {
    static template = "auction.menuItem";
}


export class Menus extends Component {
    static template = "auction.menus";
}

Menus.components = { MenuItem }

const list = document.querySelectorAll('.list');
        function activeLink(){
            list.forEach((item) =>
            item.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((item) =>
        item.addEventListener('click',activeLink));