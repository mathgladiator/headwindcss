console.log("HeadwindCSS Here!");
browser.runtime.onMessage.addListener(async (request) => {
    if ('fetch-id' in request) {
        var d = document.getElementById(request['fetch-id']);
        console.log(d)
        if (d) {
            console.log("Fetching:" + d.id);
            headwindResult = await headwindcss(d);
            return Promise.resolve({
                failed: false,
                html: headwindResult
            });
        } else {
            return Promise.resolve({
                failed: true
            });
        }
    }
}
);