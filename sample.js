var LCBOKEY = "MDphMmIxNDY0Mi0zYjYwLTExZTUtYTRlOS1hZjBkOWE1YzRmYzI6WWRZR1h6Q0ZwQk9JNG00YTJMcHBsOFNxcUxjeklpTmVEWGlz";

var data = [];
var resultTemplate = $('#resultTemplate').html();
var stockTemplate = $('#inventoryTemplate').html();

function fetchLCBOProducts(productName) {
  $.ajax({
    url: 'https://lcboapi.com/products',
    headers: { 'Authorization': 'Token ' + LCBOKEY },
    data: { q: productName }
  }).done(function(res) {
    data = res.result;
    displayResult();
  });
}

function displayResult() {
  var $searchResults = $('#search-results');

  $searchResults.html('');

  data.forEach(function(product) {
    var template = Handlebars.compile(resultTemplate);
    product.price = product.price_in_cents / 100;
    var html = template(product);
    $searchResults.append(html);
  });
}

function fetchInventory($el) {
  var productID = $el.closest('li').data('product-id');

  $.ajax({
    url: 'https://lcboapi.com/inventories',
    headers: { 'Authorization': 'Token ' + LCBOKEY },
    data: {product_id: productID}
  }).done(function(res) {
    res.result.forEach(function(inv) {
      var table = $el.parent().find('.inventory-table tbody');
      var html = Handlebars.compile(stockTemplate)(inv);
      table.append(html);
    });
  });
}

$(document).ready(function() {
  $('#search-box').on('keyup', _.debounce(function(e) {
    var productName = $(this).val();
    if(productName.length < 3) return;

    fetchLCBOProducts(productName);
  }, 100));

  $('#search-results').on('click', function(e) {
    var $el = $(e.target);
    if( $el.hasClass('inventory-btn') ) {
      fetchInventory($el);
    }
  });
});
