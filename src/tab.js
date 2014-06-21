function switchTab(type) {
	// 他のボタンを不活性化
	$('#profile-link, #notification-link, #design-link').removeClass('active');

	// このボタンを活性化
	$('#' + type + '-link').addClass('active');

	// 他のページを不可視化
	$('#profile, #notification, #design').removeClass('active');

	// このページを可視化
	$('#' + type).addClass('active');
}

// Profileタブをクリック
$('#profile-link').on('click', function(event) {
	event.preventDefault();

	switchTab('profile');
});

// Notificationをクリック
$('#notification-link').on('click', function(event) {
	event.preventDefault();

	switchTab('notification');
});

// Designタブをクリック
$('#design-link').on('click', function(event) {
	event.preventDefault();

	switchTab('design');
});
