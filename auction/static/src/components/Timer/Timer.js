/** @odoo-module **/

import { Component, useState, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class Timer extends Component {
    static template = "auction.Timer";

    setup() {
        super.setup();
        this.state = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
        const endDatetime = moment(this.props.endDatetime, 'YYYY-MM-DD hh:mm:ss');
        const currentTime = moment();
        let duration = moment.duration(endDatetime.diff(currentTime));
        onMounted(() => {
            const intervalId = setInterval(() => {
                duration = moment.duration(duration - 1000, 'milliseconds');
                // Time Out check
                if (duration.asSeconds() <= 0) {
                  clearInterval(intervalId);
                  return
                }
          
                //Otherwise
                duration = moment.duration(duration.asSeconds() - 1, 'seconds');
                this.state.days = duration.days();
                this.state.hours = duration.hours();
                this.state.minutes = duration.minutes();
                this.state.seconds = duration.seconds();
              }, 1000);
        });
    }

}
