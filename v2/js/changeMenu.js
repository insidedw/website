$(window).on('scroll', function () {
	$('.eachSectionSpace').each(function () {
		if ($(window).scrollTop() >= $(this).offset().top) {
			var id = $(this).attr('id');
			var targetMenu = $("#" + id + "Menu");
			targetMenu.addClass("active");
			targetMenu.siblings().removeClass("active");
		}
	});
});


var mainNav = new Vue({
	el: "#mainNav",
	data: {
		name: 'class="active"'
	},
	methods: {
		activeMain: function (event) {
			event.target.parentElement.className = "active";
			$(event.target.parentElement).siblings().removeClass("active");
		}, activeSummary: function (event) {
			event.target.parentElement.className = "active";
			$(event.target.parentElement).siblings().removeClass("active");
		}, activePortfolio: function (event) {
			event.target.parentElement.className = "active";
			$(event.target.parentElement).siblings().removeClass("active");
		}, activeVideos: function (event) {
			event.target.parentElement.className = "active";
			$(event.target.parentElement).siblings().removeClass("active");
		}
	}
})
