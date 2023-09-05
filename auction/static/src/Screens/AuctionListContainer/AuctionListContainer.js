/** @odoo-module **/

import { Component, useState, onWillStart } from "@odoo/owl";
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
            activeMenuItem: 'live',
        });
        onWillStart(this.willStart);
        this.auctionFetch = useFetchAuctions();
        this.env.bus.addEventListener("change_active_menu", this.onChangeActiveMenu.bind(this));
    }
    async willStart() {
        this.datas = await this.auctionFetch();
        this.state.items = this.datas.auctionItems;
        this.env.auctionModel.save('datas', this.datas);
    }

    onChangeActiveMenu(ev) {
        const menuName = ev.detail.menu_name;
        const filteredItems = this.env.auctionModel.filterAuctionItems(this.state.activeCategory, menuName);
        this.state.items = filteredItems;
        this.state.activeMenuItem = menuName;
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
