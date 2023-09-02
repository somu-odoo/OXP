/** @odoo-module **/

import { _lt } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { formatInteger } from "@web/views/fields/formatters";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { parseInteger } from "@web/views/fields/parsers";
import { useInputField } from "@web/views/fields/input_field_hook";

import { Component } from "@odoo/owl";


export class FieldIncrement extends Component {
    static template = "web.FieldIncrement";
    static props = {
        ...standardFieldProps,
        formatNumber: { type: Boolean, optional: true },
        inputType: { type: String, optional: true },
        step: { type: Number, optional: true },
        placeholder: { type: String, optional: true },
    };
    setup() {
        this.inputRef = useInputField({
            getValue: () => this.formattedValue,
            refName: "incrementInteger",
            parse: (v) => parseInteger(v),
        });
    }

    get formattedValue() {
        if (
            !this.props.formatNumber ||
            (!this.props.readonly && this.props.inputType === "number")
        ) {
            return this.props.record.data[this.props.name];
        }
        return formatInteger(this.props.record.data[this.props.name]);
    }

    get value() {
        return this.props.record.data[this.props.name];
    }

    async onClickIcon(ev) {
        const amount = this.props.record.data[this.props.incrementField] || 10;
        const operator = ev.currentTarget.getAttribute('data-icon');
        const newValue = operator === '+' ? this.value + amount : this.value - amount;
        await this.props.record.update({ [this.props.name]: newValue });

    }
}

export const incrementField = {
    component: FieldIncrement,
    displayName: _lt("Increment"),
    supportedOptions: [
        {
            label: _lt("Increment number"),
            name: "increment_field",
            type: "string",
        },
    ],
    supportedTypes: ["integer"],
    isEmpty: () => false,
    extractProps: ({ attrs, options }) => ({
        incrementField:
        options?.increment_field !== undefined ? options.increment_field : false,
        formatNumber:
            options?.enable_formatting !== undefined ? Boolean(options.enable_formatting) : true,
        inputType: options.type,
        step: options.step,
        placeholder: attrs.placeholder,
    }),
};

registry.category("fields").add("increment", incrementField);
