/** @odoo-module **/

import { rpc } from "../core/rpc.js";

// do not run tests automatically as we are going to load templates
QUnit.config.autostart = false;
QUnit.config.testTimeout = 1 * 60 * 1000;
QUnit.config.debug = true;

(async () => {
    QUnit.start();
})();