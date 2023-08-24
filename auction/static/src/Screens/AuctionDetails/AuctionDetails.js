/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Timer } from "../../components/Timer/Timer";


export class AuctionDetails extends Component {
    static template = "auction.AuctionDetails";

    setup() {
        super.setup();
        this.auctionItem = this.props.detail.auctionItem;
        this.endDate = moment(this.auctionItem.end_date, 'YYYY-MM-DD hh:mm:ss')
    }
}
AuctionDetails.components = { Timer }

registry.category("screens").add("AuctionDetails", AuctionDetails);
