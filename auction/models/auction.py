# -*- coding: utf-8 -*-

from odoo import models, fields

class Category(models.Model):
    _name = "auction.category"

    name = fields.Char()

class Brand(models.Model):
    _name = "auction.item.brand"

    name = fields.Char()

class Auction(models.Model):
    _name = 'auction.auction'
    _inherit = ['avatar.mixin']

    name = fields.Char()
    brand_id = fields.Many2one("auction.item.brand")
    categ_id = fields.Many2one("auction.category")
    description = fields.Html()
    bid_price = fields.Monetary()
    current_bid_price = fields.Monetary()
    currency_id = fields.Many2one('res.currency', string='Auction Currency', tracking=True, default=lambda self: self.env.company.currency_id)
