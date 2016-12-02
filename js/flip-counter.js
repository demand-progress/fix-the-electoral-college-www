import FlipCounterView from './vendor/flipcounter.js';


const FlipCounter = {
    update: page => {
        $.ajax({
            url: `https://act.demandprogress.org/progress/${page}?callback=?`,
            dataType: 'jsonp',
        })
        .then(data => {
            const $wrapperEl = $('.action-wrapper');
            if (!$wrapperEl.hasClass('counter-is-visible')) {
                return;
            }

            const size = data.total.actions;
            const counterDestinationLength = size.toString().length;
            const counterStartingNumber = Math.pow(10, counterDestinationLength - 1);
            const counter = new FlipCounterView('flip-counter', {
                value: counterStartingNumber,

                // Sizing
                bFH: 40,
                bOffset: 200,
                fW: 30,
                tFH: 20,
            });
            counter.incrementTo(size, 1.6, 120);
            const $counter = $('#flip-counter');
            $counter.css({
                width: counterDestinationLength * 30 + Math.floor((counterDestinationLength - 1) / 3) * 7,
            });
        });
    },
};

export default FlipCounter;
