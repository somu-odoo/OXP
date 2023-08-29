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
    image_ids = fields.One2many("auction.auction.images", 'auction_id', string="Images")
    brand_id = fields.Many2one("auction.item.brand")
    categ_id = fields.Many2one("auction.category")
    description = fields.Text()
    bidder_id = fields.Many2one('res.partner')
    bid_increment_amount = fields.Integer()
    bid_price = fields.Monetary()
    current_bid_price = fields.Monetary()
    currency_id = fields.Many2one('res.currency', string='Auction Currency', tracking=True, default=lambda self: self.env.company.currency_id)
    start_date = fields.Datetime("Start Date", required=True)
    end_date = fields.Datetime("End Date", required=True)

class AuctionImages(models.Model):
    _name = "auction.auction.images"
    _inherit = ['avatar.mixin']

    name = fields.Char()
    auction_id = fields.Many2one("auction.auction")
