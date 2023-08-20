/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Header } from "./components/Header/header";
import { Body } from "./components/Container/body";
import { Footer } from "./components/Footer/footer";


export class Auction extends Component {
    static template = "auction.root";
}

Auction.components = { Header, Body, Footer }
