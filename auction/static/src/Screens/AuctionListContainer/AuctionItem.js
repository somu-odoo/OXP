/** @odoo-module **/

import { Component } from "@odoo/owl";


export class AuctionItem extends Component {
    static template = "auction.AuctionItem";

    setup() {
        super.setup();
        this.auctionItem = this.props.auctionItem;
    }

    onClickItem(ev) {
        const id = ev.currentTarget.getAttribute('data-id');
        const auction = this.env.db.getAuctionItem(parseInt(id))
        this.env.bus.trigger('change_screen', { 'screen_name': 'AuctionDetails', auctionItem: this.auctionItem });
    }
}
