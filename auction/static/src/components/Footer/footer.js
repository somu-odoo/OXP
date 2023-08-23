/** @odoo-module **/

import { Component } from "@odoo/owl";
import { AlertDialog } from "../AlertDialog/AlertDialog";

export class Footer extends Component {
    static template = "auction.footer";

    onClickSubscribe(ev) {
        debugger;
        if (!this.el.querySelector('.o_input_subscribe_email').value) {
            debugger;
        }
    }
}
