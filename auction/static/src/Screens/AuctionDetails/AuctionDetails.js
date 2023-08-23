/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class AuctionDetails extends Component {
    static template = "auction.AuctionDetails";

    setup() {
        super.setup();
        this.auctionItem = this.props.detail.auctionItem;
        this.endDate = moment(this.auctionItem.end_date, 'YYYY-MM-DD hh:mm:ss')
        debugger;
    }
}

registry.category("screens").add("AuctionDetails", AuctionDetails);
