Package.describe({
	name: 'timkinnane:rocketchat-ui-unbrand',
	version: '0.0.1',
	summary: 'Remove branding from Rocket.Chat, provide generic base for themes.',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2');

	api.use([
		'ecmascript',
		'coffeescript',
		'rocketchat:lib',
		'rocketchat:theme',
		'rocketchat:ui',
		'aldeed:template-extension'
	]);

	api.use('templating', 'client');

	api.addAssets([
		'assets/unbrand.less'
	], 'server');

	api.addFiles([
		'themes/avenue/views/loading.html',
		'themes/avenue/client.js'
	], 'client');

	api.addFiles([
		'themes/avenue/server.js'
	], 'server');

});
