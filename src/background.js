/**
 * Downloads a file at url, suggesting to save it in folder
 */
function downloadImg(url, folder) {
  chrome.downloads.download({
    url: url,
    filename: folder + "/" + url.substring(url.lastIndexOf('/')+1)
  });
} // function

/**
 * Returns a handler which will save the image in the pre-specified folder
 */
function getClickHandler() {
  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = info.srcUrl;
    var folder;

    // console.log(info);
    // console.log(folder + "/" + url.substring(url.lastIndexOf('/')+1));

    // read the user's specified directory
    chrome.storage.sync.get({
      folder: 'images'
    }, function(items) {

      folder = items.folder;
      console.log(folder);
      downloadImg(url, folder);

    });

  }; // return
} // function

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title" : "Quicksave",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});
