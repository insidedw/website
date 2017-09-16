$(window).scroll(function () {
	// Change this to target a different percentage
	var targetPercentage = 70;

	//Change this to the ID of the content you are trying to show.
	var targetID = "#navigation";

	//Window Math
	var scrollTo = $(window).scrollTop();
	console.log(screenTop);
	var docHeight = $(document).height();
	console.log(docHeight);
	var windowHeight = $(window).height();
	console.log(windowHeight);
	var scrollPercent = (scrollTo / (docHeight - windowHeight)) * 100;
	console.log(scrollPercent);
	//스크롤 표시
	$('#percentageCounter').innerText = scrollPercent + "%";

	console.log($('#main').offsetHeight);
	//네비바 보이기
	if (scrollPercent > targetPercentage) {
		$(targetID).css({top: '0'});
	} else {
		$(targetID).css({top: '-' + $(targetID).height + 'px'});
	}
}).trigger('scroll');
