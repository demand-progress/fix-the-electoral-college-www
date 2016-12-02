import StaticKit from './static-kit';


// Container
const constants = {};

// General
constants.domain = 'fixtheelectoralcollege.net';

// Social
constants.emailSubject = 'Sign this petition: Fix the Electoral College';
constants.emailBody = `Hi,

I just signed a petition at EndSuperdelegates.com telling the Democratic Party to eliminate the concept of so-called “superdelegates.”

Will you take a moment to contact the Democratic Party?

https://${constants.domain}/?source=${StaticKit.query.cleanedSource}-emailshare

Thanks!`;
constants.tweet = `Fix the Electoral College: Whoever gets the most popular votes should become president! https://fixtheelectoralcollege.com`;

// APIs
constants.actionKitPage = 'fix-the-electoral-college-www';
constants.actionKitPageAlt = 'fix-the-electoral-college-www-npv';
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

// Organizations
constants.organizations = {
    common_cause: {
        linkToNPV: true,
    },
    demand_progress: {
        linkToNPV: true,
        useAltPage: true,
    },
    website: {
        linkToNPV: true,
    }
};

// Twitter Handles
constants.twitterHandles = [];

export default constants;
