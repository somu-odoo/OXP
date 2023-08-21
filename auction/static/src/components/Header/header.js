/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Search } from "./search";
import { Menus } from "./menus";


export class Header extends Component {
    static template = "auction.header";
}

Header.components = { Search, Menus }
