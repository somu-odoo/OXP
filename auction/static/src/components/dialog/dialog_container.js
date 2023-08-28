/** @odoo-module **/

import { WithEnv } from "../../utils/withenv";
import { Component, xml } from "@odoo/owl";

export class DialogContainer extends Component {
    handleError(error, dialog) {
        dialog.props.close();
        Promise.resolve().then(() => {
            throw error;
        });
    }
}
DialogContainer.components = { WithEnv };
DialogContainer.template = xml`
    <div class="o_dialog_container" t-att-class="{'modal-open': Object.keys(props.dialogs).length > 0}">
        <div>
            <t t-foreach="Object.values(props.dialogs)" t-as="dialog" t-key="dialog.id">
                <WithEnv env="{ dialogData: dialog.dialogData }">
                    <t t-component="dialog.class" t-props="dialog.props"/>
                </WithEnv>
            </t>
        </div>
    </div>
`;
