import FlipCounterView from './vendor/flipcounter.js';


var FlipCounter = {
    update: page => {
        $.ajax({
            url: `https://act.demandprogress.org/progress/${page}?callback=?`,
            dataType: 'jsonp',
        })
        .then(data => {
            var $wrapperEl = $('.action-wrapper');
            if (!$wrapperEl.hasClass('counter-is-visible')) {
                return;
            }

            var size = data.total.actions;
            var counterDestinationLength = size.toString().length;
            var counterStartingNumber = Math.pow(10, counterDestinationLength - 1);
            var counter = new FlipCounterView('flip-counter', {
                value: counterStartingNumber,

                // Sizing
                bFH: 40,
                bOffset: 200,
                fW: 30,
                tFH: 20,
            });
            counter.incrementTo(size, 1.6, 120);
            var $counter = $('#flip-counter');
            $counter.css({
                width: counterDestinationLength * 30 + Math.floor((counterDestinationLength - 1) / 3) * 7,
            });
        });
    },
};

export default FlipCounter;
