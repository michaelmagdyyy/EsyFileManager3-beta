function close() {
	$("." + o.prefix + "close").click(function() {
		debug("[EsyFileManager 3.0.0] - CLOSE THE FILEMANAGER - ref: fm.js - LINE:3");
		$("." + o.prefix + "esyFileManager").remove();
	});
}

function fullscreen() {
	
}

function attach() {
	$("."+o.prefix+"attach").click(function(){
		debug("[EsyFileManager 3.0.0] - START ATTACH FUNCTION - ref: fm.js - LINE:14");
		$text=$("."+o.prefix+"selected").children("."+o.prefix+"name").html();
		if(typeof o.files.replace!=="undefined") {
			$this.val(o.files.replace+$text);
		} else {
			debug(o.files.dir);
			$this.val(o.files.dir+$text);
		}
		
		debug("[EsyFileManager 3.0.0] - FILE NAME ATTACHED - ref: fm.js - LINE:17");
		$("."+o.prefix+"esyFileManager").remove();
		debug("[EsyFileManager 3.0.0] - ATTACHED FILEMANAGER CLOSED - ref: fm.js - LINE:19");
	});
}

function info() {
	$("."+o.prefix+"info").click(function(){
		debug("[EsyFileManager 3.0.0] - START INFO FUNCTION - ref: fm.js - LINE:14");
	});
}