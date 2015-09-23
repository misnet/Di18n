;!function(window, undefined){
	//-------------
	var langsData = {
		'I have %num% apple':['I have %num% apple','I have %num% apples']
	};
	//-------------

	if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
		define(function() {
	  		return langsData;
		});
	}
}.call(this);