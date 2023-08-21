/** @odoo-module **/

import { Component, useState, onWillStart } from "@odoo/owl";
import { AuctionItem } from "./AutctionItem";


export class AuctionList extends Component {
    static template = "auction.AuctionList";

    setup() {
        super.setup();
        this.state = useState({
            items: [],
        });
        onWillStart(this.willStart);
    }
    async willStart() {
        this.auctionItems = await this.env.rpc("/get_auction_items", {});
        debugger;
    }
}

AuctionList.components = { AuctionItem }