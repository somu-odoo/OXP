/** @odoo-module **/

import { Component, useState, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry";


export class Timer extends Component {
    static template = "auction.Timer";

    setup() {
        super.setup();
        this.state = useState({shouldTimerDisplay: 1, days: 0, hours: 0, minutes: 0, seconds: 0});
        const endDatetime = moment(this.props.endDatetime, 'YYYY-MM-DD hh:mm:ss');
        const startDatetime = moment(this.props.startDatetime, 'YYYY-MM-DD hh:mm:ss');
        const currentTime = moment();
        let duration = moment.duration(endDatetime.diff(currentTime));
        if (startDatetime > currentTime && endDatetime > currentTime) {
            this.state.shouldTimerDisplay = -1;
        }
        else if (startDatetime < currentTime && endDatetime < currentTime) {
          this.state.shouldTimerDisplay = 0;
        }
        onMounted(() => {
            if (this.state.shouldTimerDisplay && this.state.shouldTimerDisplay != -1) {
                const intervalId = setInterval(() => {
                    duration = moment.duration(duration, 'milliseconds');
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
            }
        });
    }

}
