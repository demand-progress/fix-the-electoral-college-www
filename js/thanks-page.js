import Constants from './constants';
import StaticKit from './static-kit';
// import Utils from './utils';


function start() {
    showVariantBasedOnSource();
    trackOutboundLinks();
}

function trackOutboundLinks() {
    const $links = $('.outbound-link');

    $links.on('click', e => {
        e.preventDefault();

        const url = e.target.href;

        ga('send', 'event', 'outbound', 'click', url, {
            hitCallback: () => document.location = url,
            transport: 'beacon',
        });
    });
}

function showVariantBasedOnSource() {
    const source = StaticKit.query.cleanedSource;
    const organization = Constants.organizations[source];

    let messaging = 'default';

    if (organization && organization.linkToNPV) {
        messaging = 'alt';
    }

    $(`.prompt-${messaging}`).addClass('visible');
    $('body').addClass('ready');
}

export default {
    start,
};
