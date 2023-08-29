/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Search } from "./search";

export class Header extends Component {
    static template = "auction.header";

    onClickLogo() {
        window.location.href = "/auction";
    }
}

Header.components = { Search }
