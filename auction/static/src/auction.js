/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Header } from "./components/Header/header";
import { Container } from "./components/Container/container";
import { Footer } from "./components/Footer/footer";

import { AuctionList } from "./Screens/AuctionList/AuctionList";


export class Auction extends Component {
    static template = "auction.root";

    setup() {
        super.setup()
        this.mainScreen = useState({ name: 'AuctionList', component: AuctionList });
        this.env.bus.addEventListener("change_screen", this.onChangeScreen);
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
        
    }
}

Auction.components = { Header, Container, Footer }
