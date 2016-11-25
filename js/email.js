var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

function validate(email) {
    email = email.trim();

    if (/[\ \,]/.test(email)) {
        return false;
    }

    if (email.split(/@/).length > 2) {
        return false;
    }

    var segments = email.split('.');
    var TLD = segments[segments.length - 1];
    var validTLD = /^[A-z]+$/.test(TLD);
    if (!validTLD) {
        return false;
    }

    if (!emailRegex.test(email)) {
        return false;
    }

    return true;
}

export default {
    validate,
};
