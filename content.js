console.log("HeadwindCSS Here!");

browser.runtime.onMessage.addListener((request) => {
    if ('fetch-id' in request) {
        var d = document.getElementById(request['fetch-id']);
        if (d) {
            return Promise.resolve({
                failed: false,
                style: JSON.stringify(window.getComputedStyle(d))
            });
        } else {
            return Promise.resolve({
                failed: true
            });
        }
    }
  }
);