/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class AuctionDetails extends Component {
    static template = "auction.AuctionDetails";
}

registry.category("screens").add("AuctionDetails", AuctionDetails);
