/** @odoo-module **/

import { Component, useExternalListener, useRef, useChildSubEnv, useState } from "@odoo/owl";
export class Dialog extends Component {
    setup() {
        this.data = this.env.dialogData;
        useExternalListener(document.body, "click", this.closeActiveDialog.bind(this));
        this.modalElement = useRef('modalRef')
    }

    closeActiveDialog(ev) {
        const modalContent = this.modalElement.el.querySelector('.modal-content')
        if (!modalContent.contains(ev.target)) {
            this.data.close();
        }
    }
}
Dialog.template = "web.Dialog";
// Dialog.props = {
//     contentClass: { type: String, optional: true },
//     bodyClass: { type: String, optional: true },
//     fullscreen: { type: Boolean, optional: true },
//     footer: { type: Boolean, optional: true },
//     header: { type: Boolean, optional: true },
//     size: { type: String, optional: true, validate: (s) => ["sm", "md", "lg", "xl"].includes(s) },
//     technical: { type: Boolean, optional: true },
//     title: { type: String, optional: true },
//     modalRef: { type: Function, optional: true },
//     slots: {
//         type: Object,
//         shape: {
//             default: Object, // Content is not optional
//             header: { type: Object, optional: true },
//             footer: { type: Object, optional: true },
//         },
//     },
//     withBodyPadding: { type: Boolean, optional: true },
// };
// Dialog.defaultProps = {
//     contentClass: "",
//     bodyClass: "",
//     fullscreen: false,
//     footer: true,
//     header: true,
//     size: "lg",
//     technical: true,
//     title: "Odoo",
//     withBodyPadding: true,
// };
