// Find the filter form on the page
var form = document.querySelector('#filter');

// Identify any page elements that are ready to be filtered
var filterables = document.querySelectorAll('.js-filterable');

// Define the filtering function
var update = function() {
  // Set all filterable elements to show so that may be filtered
  [].forEach.call(filterables, function(el) {
    el.hidden = false;
  });

  // Find the filters that have been checked
  var inputs = document.querySelectorAll('#filter input[value]:checked');

  // Loop through filters and set relevant elements to be hidden
  [].forEach.call(inputs, function(input) {
    var key = input.name;
    var val = JSON.parse(input.value || '""');
    var selector = '.js-filterable[data-' + key + ']:not([hidden])';
    var members = document.querySelectorAll(selector);
    [].forEach.call(members, function(member) {
      var value = JSON.parse(member.getAttribute('data-' + key) || 'null');
      member.hidden = Array.isArray(value)
        ? value.indexOf(val) === -1
        : (value !== val);
    });
  });

  // Get count of all filtered elements for aria-live region
  var filteredCount = document.querySelectorAll('[data-year]:not([hidden])').length;

  // Update aria-live region with filterablesCount
  var filterMessage = document.querySelector('#filter-message');
  filterMessage.innerHTML = filteredCount + ' matches to your selected filters';
};

// Attach filter function to run whenever page changes
form.addEventListener('change', update);

// Call as soon as this loads, to initialize with any defaults
update();
