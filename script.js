var setVanta = () => {
    if (window.VANTA) {
        window.VANTA.NET({
            el: ".s-page-1 .s-section-1 .s-section",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3fd3ff,
            backgroundColor: 0x0
        });
    }
};

_strk.push(function() {
    setVanta();
    window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta);
});
