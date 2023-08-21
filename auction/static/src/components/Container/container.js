/** @odoo-module **/

import { Component } from "@odoo/owl";
import { AuctionList } from "../../Screens/AuctionList/AuctionList";
import { AuctionDetails } from "../../Screens/AuctionDetails/AuctionDetails";



export class Container extends Component {
    static template = "auction.container";
}

Container.components = { AuctionList, AuctionDetails };