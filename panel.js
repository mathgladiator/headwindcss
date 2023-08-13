console.log("HeadwindCSS!!");

var error = function (str) {
    return (e) => {
        console.log(e);
    };
};

document.getElementById('fetch').onclick = async function () {
    var domId = document.getElementById('domid').value;

    browser.windows.getCurrent({populate: true})
      .then((windowInfo) => {
        console.log(windowInfo);
        browser.tabs.query({windowId: windowInfo.id, active: true }).then((tabs) => {
        if (tabs.length == 0) {
          error("failed to fetch active tab for windowId:" + windowInfo.id)
        } else {
            browser.tabs.sendMessage(tabs[0].id, {'fetch-id': domId}).then((response) => {
                console.log(response);
              });
        }
      }, error("failed to fetch tab for windowId:" + windowInfo.id));
    }, error("failed to fetch window"));

    /*
    browser.tabs.getCurrent().sendMessage({ 'fetch-id': domId }).then((response) => {
        console.log(response);
    });
*/

    /*
    console.log(document.getElementById('domid').value);
    console.log(browser);
    console.log(await browser.tabs.getCurrent());
  
    var d = content.document.getElementsById('domid');
    console.log(d);
    if (d) {
      alert(JSON.stringify(window.getComputedStyle(d)));
      console.log(window.getComputedStyle(d));
    }
    */
};
