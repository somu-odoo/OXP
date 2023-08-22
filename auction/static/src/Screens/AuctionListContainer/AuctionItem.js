/** @odoo-module **/

import { Component } from "@odoo/owl";


export class AuctionItem extends Component {
    static template = "auction.AuctionItem";

    setup() {
        super.setup();
    }

    onClickItem(ev) {
        const id = ev.target.getAttribute('data-id');
        this.env.bus.trigger('change_screen', { 'screen_name': 'AuctionDetails', id })
    }
}
