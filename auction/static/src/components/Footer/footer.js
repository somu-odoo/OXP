/** @odoo-module **/

import { Component, useRef } from "@odoo/owl";
import { AlertDialog } from "../AlertDialog/AlertDialog";
import { Menus } from "../Header/menus";

export class Footer extends Component {
    // static template = "auction.footer";
    setup() {
        this.subscribeInput = useRef('subscribe_email');
        this.dialogContainer = useRef('dialogContainer');
    }

    onClickSubscribe(ev) {
        if (!this.subscribeInput.el.value) {
            this.env.bus.trigger('add_dialog', { dialog: AlertDialog, props: {
                'message': 'Please add email address!',
            }});
        }
    }
}

Footer.template = "auction.footer";
Footer.components = { Menus };
