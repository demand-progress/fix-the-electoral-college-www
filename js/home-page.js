// Modules
import Constants from './constants';
import each from 'lodash/each';
import Email from './email';
import FlipCounter from './flip-counter';
import Modal from './modal';
import StaticKit from './static-kit';


function start() {
    // Populate special form fields
    $('[name=action_user_agent]').val(navigator.userAgent);
    $('[name=source]').val(StaticKit.query.cleanedSource);
    $('[name=url]').val(location.href);

    // // Disclaimer
    // updateDisclaimer();

    // Sticky form
    setupStickyForm();

    // Signature form
    setupSignatureForm();

    // Counter
    updateCounter();
}

function setupStickyForm() {
    if (navigator.userAgent.match(/mobile/i)) {
        $('body').addClass('mobile');
        return;
    }

    $(window).on('scroll resize', onScroll);
    $(window).on('resize', onResize);

    $(window).trigger('scroll');
    $(window).trigger('resize');
}

function onResize(e) {
    const width = $('body').width();
    let right = 16;
    if (width > 1100) {
        right += (width - 1100) / 2;
    }
    $('.action').css('right', right);
}

let oldFormStatus = '';
function onScroll(e) {
    const containerHeight = $('.petition-and-form-wrapper .outer-padding').outerHeight();
    const formHeight = $('.action').outerHeight();
    const petitionOffset = $('.petition').offset();
    const scrollTop = $(window).scrollTop();
    const suggestedPadding = 16;
    const maxTop = containerHeight - formHeight - suggestedPadding * 3;

    let newFormStatus = '';
    if (scrollTop <= petitionOffset.top - suggestedPadding) {
        newFormStatus = 'anchored-to-top';
    } else if (maxTop < scrollTop - petitionOffset.top) {
        newFormStatus = 'anchored-to-bottom';
    } else {
        newFormStatus = 'floating';
    }

    if (newFormStatus !== oldFormStatus) {
        $('.action').attr('status', newFormStatus);
        oldFormStatus = newFormStatus;
    }
}

function setupSignatureForm() {
    let readyToSubmit = false;
    const $signatureForm = $('.action form');
    $signatureForm.on('submit', e => {
        if (readyToSubmit) {
            return;
        }

        e.preventDefault();
        let valid = true;

        each(Constants.requiredFields, field => {
            if (!valid) {
                return;
            }

            console.log(field);

            const $field = $('#' + field);
            const value  = $field.val() && $field.val().trim();
            if (!value) {
                alert('Please enter your ' + $field.attr('placeholder'));
                $field.focus();

                valid = false;
            }
        });

        if (!valid) {
            return false;
        }

        const email = $('#email').val().trim().toLowerCase();

        if (!Email.validate(email)) {
            $('#email').focus();
            alert('Please enter your valid email');
            return false;
        }

        const zip = $('#postcode').val().trim();
        try {
            sessionStorage.zip = zip;
        } catch (e) {}

        // Thanking user, and disabling form
        $('form button').attr('disabled', true);
        $('#thanks').css({
            display : 'block',
            opacity : 1,
        });

        readyToSubmit = true;
        $signatureForm.submit();
    });
}

function updateDisclaimer() {
    const pattern = /_ns$/;
    const source = StaticKit.query.cleanedSource;
    if (!source.match(/_ns$/)) {
        return;
    }

    const key = source.replace(pattern, '');
    const orgName = Constants.orgNames[key];
    if (orgName) {
        $('.disclaimer .org-name').text(orgName);
    }

    $('.disclaimer').css({ display: 'block' });
    $('.squaredFour').remove();
}

function updateCounter() {
    $.ajax({
        url: `https://act.demandprogress.org/progress/${Constants.actionKitPage}?callback=?`,
        dataType: 'jsonp',
    })
    .then(data => {
        var size = data.total.actions;
        var sizeWithCommas = size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $('.number-of-signatures').text(sizeWithCommas);
        $('.counter').addClass('loaded');
    });
}

export default {
    start,
};
