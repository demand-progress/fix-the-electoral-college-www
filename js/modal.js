const Modal = {
    show: modal => {
        const $modal = $(modal);

        $modal.css({
            display: 'table',
        });

        setTimeout(() => {
            $modal.removeClass('invisible');
        }, 50);
    },

    hide: modal => {
        const $modal = $(modal);

        $modal.addClass('invisible');

        setTimeout(() => {
            $modal.css({
                display: 'none',
            });
        }, 400);
    },

    wire: modal => {
        const $modal = $(modal);

        if ($modal.length === 0) {
            return;
        }

        $modal.find('.close').on('click', function(e) {
            e.preventDefault();

            Modal.hide(modal);
        });

        $modal.find('.gutter').on('click', function(e) {
            if (e.target !== e.currentTarget) {
                return;
            }

            e.preventDefault();

            Modal.hide(modal);
        });
    },

    resizeTimeout: null,

    onResize: () => {
        clearTimeout(Modal.resizeTimeout);
        Modal.resizeTimeout = setTimeout(Modal.updateMaxHeight, 300);
    },

    updateMaxHeight: () => {
        $('.modal').css({
            'max-height': innerHeight + 'px',
        });
    },

    setup: () => {
        // Wire all modals
        $('.overlay').each((i, el) => {
            Modal.wire(el);
        });

        // Update max-height on resize
        $(window)
            .off('resize', Modal.onResize)
            .on('resize', Modal.onResize);

        Modal.updateMaxHeight();
    },
};

export default Modal;
