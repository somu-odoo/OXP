/** @odoo-module **/

import { Component, useState, onWillStart, onWillUpdateProps } from "@odoo/owl";
import { AuctionList } from "./AuctionList";
import { AuctionCategorySidebar } from "./AuctionCategorySidebar";
import { registry } from "@web/core/registry";
import { useFetchAuctions } from "../../models/model"

export class AuctionListContainer extends Component {
    static template = "auction.AuctionListContainer";

    setup() {
        super.setup();
        this.state = useState({
            items: [],
            activeCategory: 'all',
        });
        onWillStart(this.willStart);
        this.auctionFetch = useFetchAuctions();
        onWillUpdateProps((nextProps) => {
            const filteredItems = this.env.auctionModel.filterAuctionItems(this.state.activeCategory, nextProps.activeMenuItem || 'all');
            this.state.items = filteredItems;
        });
    }
    async willStart() {
        this.datas = await this.auctionFetch();
        this.env.auctionModel.save('datas', this.datas);
        const filteredItems = this.env.auctionModel.filterAuctionItems(this.state.activeCategory, this.props.activeMenuItem || 'all');
        this.state.items = filteredItems;
    }

    onFilterItems(ev) {
        const categoryID = ev.detail.id;
        const filteredItems = this.env.auctionModel.filterAuctionItems(categoryID, this.state.activeMenuItem);
        this.state.items = filteredItems;
        this.state.activeCategory = categoryID;
    }
}

AuctionListContainer.components = { AuctionList, AuctionCategorySidebar }

registry.category("screens").add("AuctionList", AuctionListContainer);
