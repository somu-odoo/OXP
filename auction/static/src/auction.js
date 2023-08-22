/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Header } from "./components/Header/header";
import { Container } from "./components/Container/container";
import { Footer } from "./components/Footer/footer";
import { registry } from "@web/core/registry";

import { AuctionListContainer } from "./Screens/AuctionListContainer/AuctionListContainer";


export class Auction extends Component {
    static template = "auction.root";

    setup() {
        super.setup()
        this.mainScreen = useState({ name: 'AuctionList', component: AuctionListContainer });
        this.env.bus.addEventListener("change_screen", this.onChangeScreen.bind(this));
        this.mainScreenProps = {};
    }

    /**
     * Used to give the `state.mobileSearchBarIsShown` value to main screen props
     */
    get mainScreenPropsFielded() {
        return Object.assign({}, this.mainScreenProps);
    }

    /**
     * Called when main screen is changed
     * @param {Event} ev 
     */
    onChangeScreen(ev) {
        const screenRegistry = registry.category("screens");
        const screen = screenRegistry.get(ev.detail.screen_name)
        this.mainScreen.name = ev.detail.screen_name;
        this.mainScreen.component = screen;
        this.mainScreenProps = { id: ev.detail.id };
    }
}

Auction.components = { Header, Container, Footer }
