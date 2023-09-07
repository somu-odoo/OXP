/** @odoo-module **/

import { Component, onWillUpdateProps, useRef, useState } from "@odoo/owl";

// TODO: MSH: Menus are part of footer so it should be inside footer component

export class MenuItem extends Component {
    static template = "auction.menuItem";

    setup() {
        this.menuItemRef = useRef('menuItem')
        onWillUpdateProps(nextProps => this.onChangeMenu(nextProps));
    }

    onActivateMenu(ev) {
        const menuName = ev.currentTarget.getAttribute('data-name');
        const customEvent = new CustomEvent("menu-changed", { bubbles: true, detail: { activeMenuItem: menuName } });
        this.menuItemRef.el.dispatchEvent(customEvent);
        this.env.bus.trigger('change_active_menu', { 'screen_name': 'AuctionList', activeMenuItem: menuName });
    }
    onChangeMenu(nextProps) {
        // To Implement props change method
        console.log('Calling custom method on props change');
    }
}


export class Menus extends Component {
    static template = "auction.menus";

    setup() {
        this.menuRef = useRef('menu');
        this.state = useState({ activeMenuItem: this.props.activeMenuItem });
    }

    onMenuChanged(ev) {
        this.state.activeMenuItem = ev.detail.activeMenuItem
    }
}

Menus.components = { MenuItem }
