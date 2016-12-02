const StaticKit = {};

StaticKit.copy = {
    zipErrorAlert: 'Please enter a valid ZIP code.',
};

StaticKit.query = (() => {
    const pairs = location.search.slice(1).split('&');

    const result = {};
    pairs.forEach(pair => {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
})();

// Loading source
if (!StaticKit.query.source) {
    try {
        StaticKit.query.source = sessionStorage.savedSource;
    } catch (e) {}
}

// Defaulting source
if (!StaticKit.query.source) {
    StaticKit.query.source = 'website';
}

StaticKit.query.source = StaticKit.query.source.split(/[^\w-]/)[0] || '';
StaticKit.query.cleanedSource = StaticKit.query.source.split(/[^\w]/)[0];

// Saving source
try {
    sessionStorage.savedSource = StaticKit.query.source;
} catch (e) {}

StaticKit.fillForm = params => {
    for (let key in params) {
        const $el = $('[name="' + key + '"]');
        if ($el.length > 0) {
            $el.val(params[key]);
        }
    }
}

StaticKit.start = () => {
    if (StaticKit.query.error_zip) {
        StaticKit.fillForm(StaticKit.query);

        const $el = $('[name="zip"]');
        if ($el.length > 0) {
            $el.val('');
            $el.focus();
        }

        setTimeout(
            () => alert(StaticKit.copy.zipErrorAlert),
            250
        );
    }
}

export default StaticKit;
