/** @odoo-module **/

import { EventBus, useEnv } from "@odoo/owl";


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

    filterAuctionItems(categoryID) {
        const datas = this.load('datas');
        const auctions = datas.auctionItems;
        debugger;
        if (categoryID === 'all') {
            return auctions;
        } else {
            return auctions.filter((auction) => {
                return auction.categ_id[0] === parseInt(categoryID);
            });
        }
    }

    getAuctionItem(id) {
        const datas = this.load('datas');
        const auctions = datas.auctionItems;
        const auction = auctions.find((auction) => auction.id === id);
        return auction
    }
}

export function useFetchAuctions() {
    const env = useEnv();
    return () => {
        return env.rpc("/get_auction_data", {});
    }
}
