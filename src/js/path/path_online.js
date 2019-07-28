layui.define(function(exports) {
	var pathConfig = {
		// @if NODE_ENV = 'online'
		host: 'online',
		// @endif
	};

	exports('pathConfig', pathConfig);
});
