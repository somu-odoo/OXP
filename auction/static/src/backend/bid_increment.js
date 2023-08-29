/** @odoo-module **/

import { _lt } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";

import { Component } from "@odoo/owl";


export class FieldIncrement extends Component {
    static template = "web.FieldIncrement";
}

export const incrementField = {
    component: FieldIncrement,
    displayName: _lt("Increment"),
    supportedOptions: [
        {
            label: _lt("Increment number"),
            name: "increment_field",
            type: "integer",
            default: 10,
        },
    ],
    supportedTypes: ["float", "monetary"],
    isEmpty: () => false,
    extractProps: ({ attrs, options }) => {
        return {

        };
    },
};

registry.category("fields").add("increment", incrementField);
