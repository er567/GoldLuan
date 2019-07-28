layui.define(function(exports) {
	var pathConfig = {
    // @if NODE_ENV = 'dev'
		host: 'dev',
		// @endif
	};

	exports('pathConfig', pathConfig);
});
