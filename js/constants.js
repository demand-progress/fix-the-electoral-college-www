import StaticKit from './static-kit';


// Container
const constants = {};

// General
constants.domain = 'fixtheelectoralcollege.net';

// Social
constants.emailSubject = 'Sign this petition: Fix the Electoral College';
constants.emailBody = `Friends-

Every vote should count equally, regardless of where you live in the United States – EVERY vote in EVERY state should matter in EVERY presidential election. But thanks to the Electoral College, even though Clinton won over 2 million (and counting!) more popular votes, the Electoral College allowed Trump to win.

Visit ${constants.domain} to join me in supporting the National Popular Vote compact, which would ensure that the popular vote winner becomes the president.

This is the fifth time in American history, and second time in five elections, where a presidential candidate who won the most popular votes lost the election. As a result, presidential candidates have no reason to pay attention to voters in states where they are safely ahead or hopelessly behind. Instead, candidates focus on “swing states” while largely ignoring the rest of the country.

The winner-take-all Electoral College system that led to this anti-democratic outcome must be changed, so that voters in all 50 states have a say in choosing our president.

If we can get enough states to sign onto the National Popular Vote Interstate Compact, our presidents will be elected by the national popular vote — it would fix the problems of the Electoral College without needing to amend the Constitution or go through Congress.

The National Popular Vote Interstate Compact would require states to award all their electoral votes to whichever presidential candidate wins the national popular vote.

Visit ${constants.domain} to join me in supporting the National Popular Vote compact, which would ensure that the popular vote winner becomes the president.

And we already have momentum to getting this enacted nationally: Right now, ten states and the District of Columbia have joined the compact, possessing 165 electoral votes altogether.

It wouldn’t take effect until enough states joined in, but we’re closer to that than you might think — ten states and the District of Columbia have already signed on, totaling 165 electoral votes of the needed 270.

Activating the National Popular Vote Compact would reshape our democracy for the better. Not only would it ensure that the person who actually got more votes win the presidency, but it would also force candidates to spend time engaging with voters in all 50 states, instead of just a handful swing states.

Visit ${constants.domain} to join me in supporting the National Popular Vote compact, which would ensure that the popular vote winner becomes the president.

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
    // website: {
    //     linkToNPV: true,
    // },
};

// Twitter Handles
constants.twitterHandles = [];

export default constants;
