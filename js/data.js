/* exported data */

var data = {
  searchText: null,
  searchResults: [],
  reviewForm: [],
  nextReviewId: 1
};

var previousDataJSON = JSON.parse(localStorage.getItem('user-data'));

if (previousDataJSON !== null) {
  data = previousDataJSON;
}

function handleBeforeUnload(event) {
  localStorage.setItem('user-data', JSON.stringify(data));
}

window.addEventListener('beforeunload', handleBeforeUnload);
