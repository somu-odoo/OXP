/** @odoo-module **/

import { Component } from "@odoo/owl";
import { AuctionListContainer } from "../../Screens/AuctionListContainer/AuctionListContainer";
import { AuctionDetails } from "../../Screens/AuctionDetails/AuctionDetails";



export class Container extends Component {
    static template = "auction.container";
}

Container.components = { AuctionListContainer, AuctionDetails };