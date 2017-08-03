// Saves options to chrome.storage
function save_options() {
  console.log("save_options")
  var folder = document.getElementById('folder').value;
  chrome.storage.sync.set({
    folder: folder
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    folder: 'images'
  }, function(items) {
    document.getElementById('folder').value = items.folder;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
