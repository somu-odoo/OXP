/** @odoo-module **/

import { Component, onMounted, useRef } from "@odoo/owl";
import { AlertDialog } from "../AlertDialog/AlertDialog";

export class Search extends Component {
    static template = "auction.search";

    setup() {
        super.setup();
        const searchInput = useRef('search_input');
        function autofocus() {
            searchInput.el.focus();
        }
        onMounted(autofocus);
    }

    onClickSearch(ev) {
        this.env.bus.trigger('add_dialog', { dialog: AlertDialog, props: {
            'message': 'Search is not implemented yet!',
        }});
    }
}
