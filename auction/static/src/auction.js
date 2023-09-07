/** @odoo-module **/

import { Component, useState, reactive, useSubEnv } from "@odoo/owl";
import { Header } from "./components/Header/header";
import { Container } from "./components/Container/container";
import { Footer } from "./components/Footer/footer";
import { registry } from "@web/core/registry";
import { AuctionModel } from "./models/model.js";

import { AuctionListContainer } from "./Screens/AuctionListContainer/AuctionListContainer";
import { DialogContainer } from "./components/dialog/dialog_container";
import { Demo } from "./demo";

export class Auction extends Component {
    static template = "auction.root";

    setup() {
        super.setup();
        const auctionModel = new AuctionModel();
        useSubEnv({auctionModel});
        this.mainScreen = useState({ name: 'AuctionList', component: AuctionListContainer });
        this.env.bus.addEventListener("change_screen", this.onChangeScreen.bind(this));
        this.env.bus.addEventListener("add_dialog", this.onAddDialog.bind(this));
        this.mainScreenProps = {};

        this.dialogs = reactive({});
        this.dialogId = 0;
    }

    /**
     * Used to give the `state.mobileSearchBarIsShown` value to main screen props
     */
    get mainScreenPropsFielded() {
        return Object.assign({}, this.mainScreenProps);
    }

    onAddDialog(ev) {
        const id = this.dialogId++
        this.lastId = id;
        const close = () => {
            if (this.dialogs[id]) {
                delete this.dialogs[id];
                if (ev.detail.onClose) {
                    ev.detail.onClose();
                }
            }
        }
        const dialog = {
            class: ev.detail.dialog,
            props: Object.assign({}, ev.detail.props, { close, id }),
            dialogData: {
                close,
            }
        };
        this.dialogs[id] = dialog;
    }
    /**
     * Called when main screen is changed
     * @param {Event} ev 
     */
    onChangeScreen(ev) {
        const screenRegistry = registry.category("screens");
        const screen = screenRegistry.get(ev.detail.screen_name)
        this.mainScreen.name = ev.detail.screen_name;
        this.mainScreen.component = screen;
        this.mainScreenProps = { detail: ev.detail };
    }
}

Auction.components = { Header, Container, Footer, DialogContainer, Demo }
