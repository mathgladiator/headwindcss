console.log("HeadwindCSS Here!");

browser.runtime.onMessage.addListener((request) => {
    if ('fetch-id' in request) {
        var d = document.getElementById(request['fetch-id']);
        if (d) {
            console.log("Fetching:" + d.id);
            return Promise.resolve({
                failed: false,
                html: headwindcss(d)
            });
        } else {
            return Promise.resolve({
                failed: true
            });
        }
    }
}
);