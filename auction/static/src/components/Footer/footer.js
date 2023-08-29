/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Menus } from "../Header/menus";

export class Footer extends Component {}

Footer.template = "auction.footer";
Footer.components = { Menus };
