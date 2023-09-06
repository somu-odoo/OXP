/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Dialog } from "../dialog/dialog"


export class BidDialog extends Component {
    onConfirmBid(ev) {
        const div = document.createElement('div');
        div.classList.add('o_bid_success');
        const image = document.createElement('image');
        div.appendChild(image);
        document.body.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 5000);
        this.props.close();
    }
}

BidDialog.template = "web.BidDialog";
BidDialog.components = { Dialog };
