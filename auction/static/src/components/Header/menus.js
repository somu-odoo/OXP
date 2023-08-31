/** @odoo-module **/

import { Component, onWillUpdateProps, useRef, useState } from "@odoo/owl";

export class MenuItem extends Component {
    static template = "auction.menuItem";

    setup() {
        this.menuItemRef = useRef('menuItem')
        onWillUpdateProps(nextProps => this.onChangeMenu(nextProps));
    }

    onActivateMenu(ev) {
        const menuName = ev.currentTarget.getAttribute('data-name');
        const customEvent = new CustomEvent("menu-changed", { bubbles: true, detail: { menu_name: menuName } });
        this.menuItemRef.el.dispatchEvent(customEvent);
        this.env.bus.trigger('change_active_menu', { menu_name: menuName });
    }
    onChangeMenu(nextProps) {
        // To Implement props change method
        console.log(nextProps)
    }
}


export class Menus extends Component {
    static template = "auction.menus";

    setup() {
        this.menuRef = useRef('menu');
        this.state = useState({ activeMenuItem: this.env.activeMenuItem });
    }

    onMenuChanged(ev) {
        this.state.activeMenuItem = ev.detail.menu_name
    }
}

Menus.components = { MenuItem }
