/** @odoo-module **/

import { Component } from "@odoo/owl";
import { AuctionItem } from "./AuctionItem";

export class AuctionList extends Component {
    static template = "auction.AuctionList";
}

AuctionList.components = { AuctionItem }
