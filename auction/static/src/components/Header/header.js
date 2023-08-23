/** @odoo-module **/

import { Component, onMounted, useRef } from "@odoo/owl";
import { Search } from "./search";
import { Menus } from "./menus";


export class Header extends Component {
    static template = "auction.header";

    setup() {
        super.setup()
    }
}

Header.components = { Search, Menus }
