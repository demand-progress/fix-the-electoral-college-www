import StaticKit from './static-kit';


// Container
var constants = {};

// General
constants.domain = 'endsuperdelegates.com';

// Social
constants.emailSubject = 'Sign this petition: End Superdelegates';
constants.emailBody = `Hi,

I just signed a petition at EndSuperdelegates.com telling the Democratic Party to eliminate the concept of so-called “superdelegates.”

Will you take a moment to contact the Democratic Party?

https://${constants.domain}/?source=${StaticKit.query.cleanedSource}-emailshare

Thanks!`;
constants.tweet = `Fix the Electoral College: Whoever gets the most popular votes should become president! http://fixtheelectoralcollege.com`;

// APIs
constants.actionKitPage = 'endsuperdelegates-www-with-partners';
constants.callToolURL = 'https://dp-call-congress.herokuapp.com/create?callback=?';
constants.feedbackToolURL = 'https://dp-feedback-tool.herokuapp.com/api/v1/feedback?callback=?';
constants.sunlightAPIKey = '3779f52f552743d999b2c5fe1cda70b6';
constants.sunlightLocateURL = 'https://congress.api.sunlightfoundation.com/legislators/locate?callback=?';

// Validation
constants.requiredFields = [
    'email',
    'postcode',
    // 'first_name',
    // 'last_name',
];

// Names
constants.orgNames = {
    credo: 'CREDO Action',
    dk: 'Daily Kos',
    dp: 'Demand Progress',
    fftf: 'Fight for the Future',
    rootsaction: 'RootsAction',
    watchdog: 'Watchdog.net',
};

// Twitter Handles
constants.twitterHandles = [
    '@user1',
    '@user2',
    '@user3',
];

export default constants;
