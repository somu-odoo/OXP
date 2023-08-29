/** @odoo-module **/

import { Component, useState, onWillStart } from "@odoo/owl";
import { AuctionList } from "./AuctionList";
import { AuctionCategorySidebar } from "./AuctionCategorySidebar";
import { registry } from "@web/core/registry";
import { useFetchAuctions } from "../../core/db"

export class AuctionListContainer extends Component {
    static template = "auction.AuctionListContainer";

    setup() {
        super.setup();
        this.state = useState({
            items: [],
        });
        onWillStart(this.willStart);
        this.auctionFetch = useFetchAuctions();
    }
    async willStart() {
        this.datas = await this.auctionFetch();
        this.state.items = this.datas.auctionItems;
        this.env.db.save('datas', this.datas);
    }

    onFilterItems(ev) {
        const categoryID = ev.detail.id;
        const filteredItems = this.env.db.filterAuctionItems(categoryID);
        this.state.items = filteredItems;
    }
}

AuctionListContainer.components = { AuctionList, AuctionCategorySidebar }

registry.category("screens").add("AuctionList", AuctionListContainer);
