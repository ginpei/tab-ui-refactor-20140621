// Profileタブをクリック
$('#profile-link').on('click', function(event) {
	event.preventDefault();

	// 他のボタンを不活性化
	$('#notification-link, #design-link').removeClass('active');

	// このボタンを不活性化
	$('#profile-link').addClass('active');

	// 他のページを不可視化
	$('#notification, #design').removeClass('active');

	// このページを可視化
	$('#profile').addClass('active');
});

// Notificationをクリック
$('#notification-link').on('click', function(event) {
	event.preventDefault();

	$('#profile-link, #design-link').removeClass('active');;
	$('#notification-link').addClass('active');

	$('#profile, #design').removeClass('active');
	$('#notification').addClass('active');
});

// Designタブをクリック
$('#design-link').on('click', function(event) {
	event.preventDefault();

	$('#profile-link, #notification-link').removeClass('active');
	$('#design-link').addClass('active');

	$('#profile, #notification').removeClass('active');
	$('#design').addClass('active');
});
