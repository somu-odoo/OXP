/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Timer } from "../../components/Timer/Timer";

export class AuctionItem extends Component {
    static template = "auction.AuctionItem";

    setup() {
        super.setup();
        this.auctionItem = this.props.auctionItem;
        this.startDate = moment(this.auctionItem.start_date, 'YYYY-MM-DD hh:mm:ss')
        this.endDate = moment(this.auctionItem.end_date, 'YYYY-MM-DD hh:mm:ss')
    }

    onClickItem(ev) {
        this.env.bus.trigger('change_screen', { 'screen_name': 'AuctionDetails', auctionItem: this.auctionItem });
    }
}

AuctionItem.components = {Timer};