/** @odoo-module **/

import { Component } from "@odoo/owl";

export class MenuItem extends Component {
    static template = "auction.menuItem";
}


export class Menus extends Component {
    static template = "auction.menus";
}

Menus.components = { MenuItem }
