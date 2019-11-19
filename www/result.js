function getresultsite() {
      var url = "http://192.168.43.120:45457/getall/result?operation=1";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
	
		  document.getElementById("prsite").innerHTML=array[0];
		  document.getElementById("rsite").setAttribute("href",array[1]);
		 }
      });
    }
	
	function getresultsbmf() {  
      var url = "http://192.168.43.120:45457/getall/result?operation=2";
      $.get(url, function(data, status) {

		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
	
		  document.getElementById("prsbmf").innerHTML=array[0];
		  document.getElementById("rsbmf").setAttribute("href",array[1]);
		 }
      });
    }
	
	function getresultshs() {
      var url = "http://192.168.43.120:45457/getall/result?operation=3";
      $.get(url, function(data, status) {

		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
		
		  document.getElementById("prshs").innerHTML=array[0];
		  document.getElementById("rshs").setAttribute("href",array[1]);
		 }
      });
    }
	
	function getresultssdt() {
      var url = "http://192.168.43.120:45457/getall/result?operation=4";
      $.get(url, function(data, status) {

		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
		  document.getElementById("prssdt").innerHTML=array[0];
		  document.getElementById("rssdt").setAttribute("href",array[1]);
		 }
      });
    }
	
		function addLoadEvent(func) { 
			  var oldonload = window.onload; 
			  if (typeof window.onload != 'function') { 
				window.onload = func; 
			  } else { 
				window.onload = function() { 
				  if (oldonload) { 
					oldonload(); 
      } 
      func(); 
    } 
  } 
}

addLoadEvent(getresultsite); 
addLoadEvent(getresultsbmf); 
addLoadEvent(getresultshs); 
addLoadEvent(getresultssdt); 
 
addLoadEvent(function() { 
	    document.body.style.backgroundColor = '#EFDF95'; 
})