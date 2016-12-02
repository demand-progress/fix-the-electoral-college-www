import Constants from './constants';
import StaticKit from './static-kit';
// import Utils from './utils';


function start() {
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
