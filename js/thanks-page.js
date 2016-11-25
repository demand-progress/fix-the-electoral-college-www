import Constants from './constants';
import StaticKit from './static-kit';
// import Utils from './utils';


const patterns = {
    url: /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/g,
};
let handles = [];
let tweet = '';

function start() {
    handles = _.clone(Constants.twitterHandles);
    handles = _.uniq(handles);
    handles = _.shuffle(handles);

    generateTweet();

    $('.twitter-tool-cta').on('click', e => {
        e.preventDefault();

        const url =
            'https://twitter.com/intent/tweet?text=' +
            encodeURIComponent(tweet);
        window.open(url);

        generateTweet();
    });
}

function generateTweet() {
    // Congratulate
    if (handles.length === 0) {
        $('body').addClass('twitter-tool-completed');
        return;
    }

    // Update Tweet
    tweet = Constants.tweet;
    tweet = addHandlesToTweet(tweet);

    // Update Preview
    const preview = addColorSpansToTweet(tweet);
    $('.twitter-tool .tweet').html(preview);

    // Animate
    const initialDelay = 100;
    const incrementalDelay = 50;
    $('.twitter-tool .tweet .handle').each((i, el) => {
        $(el).css({
            'transition-delay': (initialDelay + (incrementalDelay * i)) + 'ms',
        });
    });
    $('.twitter-tool').removeClass('visible');
    setTimeout(f => {
        $('.twitter-tool').addClass('visible');
    }, 0);
}

function getTweetLength(tweet) {
    let length = tweet.length;

    // URLs cost 23 characters
    const urls = tweet.match(patterns.url);
    _.each(urls, url => {
        length -= url.length;
        length += 23;
    });

    return length;
}

function addHandlesToTweet(tweet) {
    let charactersLeft = 140 - getTweetLength(tweet);

    const addedHandles = [];
    _.each(handles, handle => {
        const addition = ' ' + handle;
        const length = addition.length;
        if (length < charactersLeft) {
            tweet += addition;
            charactersLeft -= length;
            addedHandles.push(handle);

            // Reducing frequency of smaller handles being added
            if (charactersLeft < 8) {
                return false;
            }
        }
    });

    _.pullAll(handles, addedHandles);

    return tweet;
}

function addColorSpansToTweet(tweet) {
    tweet = tweet.replace(/#\w+/g, match => `<span class="blue">${match}</span>`);
    tweet = tweet.replace(/@\w+/g, match => `<span class="blue handle">${match}</span>`);
    tweet = tweet.replace(/https?:\/\/[\w.]+/g, match => `<span class="blue">${match}</span>`);
    return tweet;
}

function onTweetFormSubmit(e) {
    e.preventDefault();

    var tweet = `.@${state.twitterIDs.join(' @')} ${state.twitterText}`;

    var url =
        'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent(tweet);

    window.open(url);

    // Show thanks
    var $submit = $('.tweet-wrapper button');
    $submit.addClass('thanks');
    $submit.text('Thanks!');

    // Send event
    ga('send', {
        hitType       : 'event',
        eventCategory : 'ThanksPageTweet',
        eventAction   : 'sent',
        eventLabel    : Constants.actionKitPage,
    });
}

export default {
    start,
};
