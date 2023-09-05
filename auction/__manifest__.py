# -*- coding: utf-8 -*-
{
    'name': "Auction",

    'summary': """
        Play with Owl in this Auction module""",

    'description': """
        Play with Owl in this auction module
    """,

    'author': "Soumya Mukherjee,Mohammed Shekha",
    'website': "https://www.odoo.com",

    'category': 'Productivity',
    'version': '0.1',

    'depends': ['base', 'web'],
    'application': True,
    'installable': True,
    'data': [
        'security/ir.model.access.csv',
        'views/templates.xml',
        'views/auction_views.xml',
    ],
    'demo': [
        'data/auction_demo.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'auction/static/src/backend/**/*',
        ],
        'auction.assets_auction_main': [
            'auction/static/src/main.js',
        ],
        'auction.assets_auction_without_main': [
            # bootstrap
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap'),
            'web/static/lib/bootstrap/js/dist/dom/data.js',
            'web/static/lib/bootstrap/js/dist/dom/event-handler.js',
            'web/static/lib/bootstrap/js/dist/dom/manipulator.js',
            'web/static/lib/bootstrap/js/dist/dom/selector-engine.js',
            'web/static/lib/bootstrap/js/dist/base-component.js',
            'web/static/lib/bootstrap/js/dist/alert.js',
            'web/static/lib/bootstrap/js/dist/button.js',
            'web/static/lib/bootstrap/js/dist/carousel.js',
            'web/static/lib/bootstrap/js/dist/collapse.js',
            'web/static/lib/bootstrap/js/dist/dropdown.js',
            'web/static/lib/bootstrap/js/dist/modal.js',
            'web/static/lib/bootstrap/js/dist/offcanvas.js',
            'web/static/lib/bootstrap/js/dist/tooltip.js',
            'web/static/lib/bootstrap/js/dist/popover.js',
            'web/static/lib/bootstrap/js/dist/scrollspy.js',
            'web/static/lib/bootstrap/js/dist/tab.js',
            'web/static/lib/bootstrap/js/dist/toast.js',

            'web/static/lib/moment/moment.js', # required for date/datetime operations
            'web/static/src/libs/fontawesome/css/font-awesome.css', # required for fa icons
            'web/static/src/libs/fontawesome/fonts/fontawesome-webfont.ttf',
            'web/static/src/libs/fontawesome/fonts/fontawesome-webfont.woff',
            'web/static/src/libs/fontawesome/fonts/fontawesome-webfont.woff2',
            'web/static/src/legacy/js/promise_extension.js', # required by boot.js
            'web/static/src/boot.js', # odoo module system
            'web/static/src/env.js', # required for services
            'web/static/src/session.js', # expose __session_info__ containing server information
            'web/static/lib/owl/owl.js', # owl library
            'web/static/lib/owl/odoo_module.js', # to be able to import "@odoo/owl"
            'web/static/src/core/utils/functions.js',
            'web/static/src/core/utils/components.js',
            'web/static/src/core/browser/browser.js',
            'web/static/src/core/registry.js',
            'web/static/src/core/assets.js',

            'auction/static/src/components/**/*',
            'auction/static/src/core/**/*',
            'auction/static/src/Screens/**/*',
            'auction/static/src/models/**/*',
            'auction/static/src/utils/**/*',
            'auction/static/src/auction.js',
            'auction/static/src/demo.js',
            'auction/static/src/auction.xml',
            'auction/static/src/auction.css',
        ],
        'auction.assets_auction': [
            ('include', 'auction.assets_auction_without_main'),
            ('include', 'auction.assets_auction_main'),
        ],
        'auction.assets_auction_tests': [
            ('include', 'auction.assets_auction_without_main'),

            'web/static/lib/qunit/qunit-2.9.1.css',
            'web/static/lib/qunit/qunit-2.9.1.js',
            'auction/static/src/tests/**/*',
        ],
    }
}
