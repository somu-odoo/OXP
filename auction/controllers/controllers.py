from odoo import http
from odoo.http import request, route

class OwlPlayground(http.Controller):

    @http.route(['/auction'], type='http', auth='public')
    def show_auction(self):
        """
        Renders the owl auction page
        """
        return request.render('auction.root')

    @http.route(['/get_auction_data'], type='json', auth='public')
    def get_auction_data(self, **kw):
        data = {}
        AuctionImages = request.env['auction.auction.images']
        auctionItems = request.env['auction.auction'].search_read([])
        categories = request.env['auction.category'].search_read([])
        for auctionItem in auctionItems:
            # TODO: MSH: Can optimized, instead of adding search in loop, we can collect all IDS and search one time and do some logical operations
            image_ids = auctionItem.get('image_ids')
            images = AuctionImages.search_read([('id', 'in', image_ids)])
            auctionItem['images'] = images
        data['auctionItems'] = auctionItems
        data['categories'] = categories
        return data
