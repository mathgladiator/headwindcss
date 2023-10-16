console.log("HeadwindCSS!!");

var error = function (str) {
  return (e) => {
    console.log(e);
  };
};

document.getElementById('fetch').onclick = async function () {
  var domId = document.getElementById('domid').value;

  browser.windows.getCurrent({ populate: true })
    .then((windowInfo) => {
      browser.tabs.query({ windowId: windowInfo.id, active: true }).then((tabs) => {
        if (tabs.length == 0) {
          error("failed to fetch active tab for windowId:" + windowInfo.id)
        } else {
          console.log("fetching:" + domId);
          
          browser.tabs.sendMessage(tabs[0].id, { 'fetch-id': domId }).then((response) => {
            if (!response.failed) {
              document.getElementById('result').value = response.html;
            }
          });
        }
      }, error("failed to fetch tab for windowId:" + windowInfo.id));
    }, error("failed to fetch window"));
};
