/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Dialog } from "../dialog/dialog"


export class BidDialog extends Component {
    onConfirmBid(ev) {
        const div = document.createElement('div');
        div.classList.add('o_bid_success');
        const image = document.createElement('image');
        image.setAttribute('src', 'auction/static/images/right.gif');
        div.appendChild(image);
        document.body.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 2000);
        this.props.close();
    }
}

BidDialog.template = "web.BidDialog";
BidDialog.components = { Dialog };
