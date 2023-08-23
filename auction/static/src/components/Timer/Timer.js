/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class Timer extends Component {
    static template = "auction.Timer";

    setup() {
        super.setup();
        this.endDatetime = props.endDatetime;
        // moment(this.auctionItem.end_date, 'YYYY-MM-DD hh:mm:ss')
        debugger;
    }
}

