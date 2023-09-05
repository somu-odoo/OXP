/** @odoo-module **/

import { EventBus, useEnv } from "@odoo/owl";


export class AuctionModel extends EventBus {
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

    filterAuctionItems(categoryID, activeMenuItem) {
        const datas = this.load('datas');
        const auctions = datas.auctionItems;
        let filteredAuctionItems;
        if (categoryID === 'all') {
            filteredAuctionItems = auctions;
        } else {
            filteredAuctionItems = auctions.filter((auction) => {
                return auction.categ_id[0] === parseInt(categoryID);
            });
        }

        if (activeMenuItem === 'live') {
            filteredAuctionItems = filteredAuctionItems.filter((auction) => {
                const endDate = moment(auction.end_date, 'YYYY-MM-DD hh:mm:ss');
                const startDate = moment(auction.start_date, 'YYYY-MM-DD hh:mm:ss');
                return endDate >= moment() && startDate <= moment();
            });
        } else if (activeMenuItem === 'past') {
            filteredAuctionItems = filteredAuctionItems.filter((auction) => {
                const endDate = moment(auction.end_date, 'YYYY-MM-DD hh:mm:ss');
                return endDate <= moment();
            });
        } else if (activeMenuItem === 'future') {
            filteredAuctionItems = filteredAuctionItems.filter((auction) => {
                const startDate = moment(auction.start_date, 'YYYY-MM-DD hh:mm:ss');
                return startDate > moment();
            });
        }
        return filteredAuctionItems;
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
