# -*- coding: utf-8 -*-

from odoo import models, fields

class Auction(models.Model):
    _name = 'auction.auction'
    _inherit = ['avatar.mixin']

    name = fields.Char()
    brand_name = fields.Char()
    description = fields.Html()
    bid_price = fields.Monetary()
    current_bid_price = fields.Monetary()
    currency_id = fields.Many2one('res.currency', string='Auction Currency', tracking=True)
