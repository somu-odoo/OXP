/** @odoo-module **/

import { browser } from "@web/core/browser/browser";
import { rpc } from "./core/rpc.js";
import { DB } from "./core/db.js";
import { mount, EventBus } from "@odoo/owl";
import { templates } from "@web/core/assets";
import { Auction } from "./auction";

// The following code ensures that owl mount the component when ready.
// `templates` contains templates contained in the bundles.
//
// In the mount options, it's also possible to add other interresting
// configuration: https://github.com/odoo/owl/blob/master/doc/reference/app.md#configuration

owl.whenReady( () => {
    const bus = new EventBus();
    const db = new DB();
    const env = { bus, db, rpc };
    mount(Auction, document.body, { templates, dev: true, env });
});

/**
 * This code is iterating over the cause property of an error object to console.error a string
 * containing the stack trace of the error and any errors that caused it.
 * @param {Event} ev
 */
function logError(ev) {
    ev.preventDefault();
    let error = ev ?.error || ev.reason;

    if (error.seen) {
        // If an error causes the mount to crash, Owl will reject the mount promise and throw the
        // error. Therefore, this if statement prevents the same error from appearing twice.
        return;
    }
    error.seen = true;

    let errorMessage = error.stack;
    while (error.cause) {
        errorMessage += "\nCaused by: "
        errorMessage += error.cause.stack;
        error = error.cause;
    }
    console.error(errorMessage);
}

browser.addEventListener("error", (ev) => {logError(ev)});
browser.addEventListener("unhandledrejection", (ev) => {logError(ev)});
