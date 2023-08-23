/** @odoo-module **/

import { EventBus } from "@odoo/owl";


export class DB extends EventBus {
    constructor(params) {
        super();
        this.cache = {};
    }
    /* loads a record store from the database. returns default if nothing is found */
    load(name, deft) {
        if (this.cache[name] !== undefined) {
            return this.cache[name];
        }
        return deft;
    }
    /* saves a record store to the database */
    save(name, data) {
        this.cache[name] = data;
    }

    getAuctionItem(id) {
        const auctions = this.load('auctions');
        const auction = auctions.find((auction) => auction.id === id);
        return auction
    }
}
