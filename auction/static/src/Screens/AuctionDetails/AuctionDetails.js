/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Timer } from "../../components/Timer/Timer";
import { BidDialog } from "../../components/BidDialog/BidDialog";


export class AuctionDetails extends Component {
    static template = "auction.AuctionDetails";

    setup() {
        super.setup();
        this.auctionItem = this.props.detail.auctionItem;
        this.endDate = moment(this.auctionItem.end_date, 'YYYY-MM-DD hh:mm:ss');
    }

    onPlaceBid(ev) {
        this.env.bus.trigger('add_dialog', { dialog: BidDialog, props: {
            'owner': 'Manushi',
            'price': this.auctionItem.bid_price,
            'latest_price': this.auctionItem.current_bid_price,
            'step': this.auctionItem.bid_increment_amount,
            'is_bid_confirmed': this.auctionItem.is_bid_confirmed,
        }});
    }
}
AuctionDetails.components = { Timer }

registry.category("screens").add("AuctionDetails", AuctionDetails);
