from odoo import http
from odoo.http import request, route

class OwlPlayground(http.Controller):
    @http.route(['/auction'], type='http', auth='public')
    def show_auction(self):
        """
        Renders the owl auction page
        """
        return request.render('auction.root')



