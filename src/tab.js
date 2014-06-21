function switchTab() {
	// 他のボタンを不活性化
	$('#notification-link, #design-link').removeClass('active');

	// このボタンを活性化
	$('#profile-link').addClass('active');

	// 他のページを不可視化
	$('#notification, #design').removeClass('active');

	// このページを可視化
	$('#profile').addClass('active');
}

// Profileタブをクリック
$('#profile-link').on('click', function(event) {
	event.preventDefault();

	switchTab();
});

// Notificationをクリック
$('#notification-link').on('click', function(event) {
	event.preventDefault();

	switchTab();
});

// Designタブをクリック
$('#design-link').on('click', function(event) {
	event.preventDefault();

	switchTab();
});
