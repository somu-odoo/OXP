/** @odoo-module **/

import { App, EventBus } from "@odoo/owl";
import { templates } from "@web/core/assets";
import { rpc } from "../../core/rpc.js";
import { DB } from "../../core/db.js";
import { parseSearchQuery } from "../../utils/utils.js";
import { AuctionCategorySidebar } from "../../Screens/AuctionListContainer/AuctionCategorySidebar";

// TODO: Intercept rpc method and check if route is handled in given mockRPC then call it and return it
// we will pass mockRPC function and will handle route and return response in all test case
// move rpc method in env, we will pass mockRPC in test env, our test environemtn's rpc method will first check
// whether route is handled in mockRPC then call it else we will raise error that route is not handled

let target;
let app;
let bus;
let db;
let env;

function prepareTarget(debug = false) {
    return debug ? document.body : document.getElementById('qunit-fixture');
}

export async function nextTick() {
    await new Promise((resolve) => setTimeout(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
}

QUnit.module('CategorySidebar', (hooks) => {
    hooks.before(async () => {
        const location = window.location;
        const { pathname, search, hash } = location;
        const hashQuery = parseSearchQuery(search);
        target = prepareTarget(hashQuery.debug);
        bus = new EventBus();
        db = new DB();
        env = { bus, db, rpc };
    });
    hooks.afterEach(async () => {
        app.destroy();
    });

    QUnit.test('Simple UI test for CategorySidebar component', async function (assert) {
        assert.expect(1);

        const props = {categories: [{id: 1, name: 'Footwear'}, {id: 2, name: 'Topwear'}]};
        app = new App(AuctionCategorySidebar, {
            name: "CategorySidebar",
            env,
            templates,
            props
        });
        const categorySidebar = await app.mount(target);
        await nextTick();
        debugger;
        const elements = document.querySelectorAll('.auction_category');
        assert.ok(elements.length, 3, "should have o_content class");

    });

});
