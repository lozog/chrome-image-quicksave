/*
 * The folder must be relative to chrome's default download directory
 */
folder = "film-wallpapers"

/**
 * Returns a handler which will save the image in the pre-specified folder
 */
function getClickHandler() {
  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = info.srcUrl;

    // console.log(info);
    // console.log(folder + "/" + url.substring(url.lastIndexOf('/')+1));

    chrome.downloads.download({
      url: url,
      filename: folder + "/" + url.substring(url.lastIndexOf('/')+1)
    });

  };
};

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title" : "Quicksave",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});
