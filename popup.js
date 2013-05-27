var device = 'v46601C66E14627E'




function enviarTW(e)
{	

    var req = new XMLHttpRequest();
	req.open("POST", "http://api.pushingbox.com/pushingbox", true);

	var params = "devid=" + device + 
				 "&tw=" + document.getElementById("tw").value;

	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// req.setRequestHeader("Content-length", params.length);
	// req.setRequestHeader("Connection", "close");
	req.send(params);

    
    req.onreadystatechange = function() 
    { 
        // If the request completed, close the extension popup
        if (req.readyState == 4)
            if (req.status == 200) window.close();
    };
    
    return false;
}


document.addEventListener('DOMContentLoaded', function () {
  var boton = document.getElementById("send")
    boton.addEventListener('click', enviarTW);
});


