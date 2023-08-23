/** @odoo-module **/

import { Component, onMounted, useRef } from "@odoo/owl";

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
}
