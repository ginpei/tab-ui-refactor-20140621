// Profileタブをクリック
$('#profile-link').on('click', function(event) {
	event.preventDefault();

	// 他のボタンを不活性化
	$('#notification-link, #design-link').css({
		backgroundColor: '',
		paddingBottom: ''
	});

	// このボタンを不活性化
	$('#profile-link').css({
		backgroundColor: '#69f',
		paddingBottom: '6px'
	});

	// 他のページを不可視化
	$('#notification, #design').hide();

	// このページを可視化
	$('#profile').show();
});

// Notificationをクリック
$('#notification-link').on('click', function(event) {
	event.preventDefault();

	$('#profile-link, #design-link').css({
		backgroundColor: '',
		paddingBottom: ''
	});
	$('#notification-link').css({
		backgroundColor: '#69f',
		paddingBottom: '6px'
	});

	$('#profile, #design').hide();
	$('#notification').show();
});

// Designタブをクリック
$('#design-link').on('click', function(event) {
	event.preventDefault();

	$('#profile-link, #notification-link').css({
		backgroundColor: '',
		paddingBottom: ''
	});
	$('#design-link').css({
		backgroundColor: '#69f',
		paddingBottom: '6px'
	});

	$('#profile, #notification').hide();
	$('#design').show();
});
