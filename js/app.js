/*
$(document).ready(function() {
	var page = $('.entry-content').data("default");
	loadContent(page);

	$('nav a').click(function() {
		var page = $(this).data("template");
		loadContent(page);
	})
})
*/
function loadContent(page) {
	console.log(page);
	jQuery.ajax({
	  url: 'vues/'+page,
	  type: 'GET',
	  success: function(data, textStatus, xhr) {
	    $('.entry-content').html(data);
	  },
	  error: function(xhr, textStatus, errorThrown) {
	    alert("Error loading template");
	  }
	});
}
