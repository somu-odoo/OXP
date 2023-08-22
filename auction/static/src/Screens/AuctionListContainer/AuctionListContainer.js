/** @odoo-module **/

import { Component, useState, onWillStart } from "@odoo/owl";
import { AuctionList } from "./AuctionList";
import { AuctionCategorySidebar } from "./AuctionCategorySidebar";



export class AuctionListContainer extends Component {
    static template = "auction.AuctionListContainer";

    setup() {
        super.setup();
        this.state = useState({
            items: [],
        });
        onWillStart(this.willStart);
    }
    async willStart() {
        this.auctionItems = await this.env.rpc("/get_auction_items", {});
    }
}

AuctionListContainer.components = { AuctionList, AuctionCategorySidebar }