(function () {
		
	var myDeviceToken = "ci2KttLUQ9iBa7IvZpnvWz:APA91bGbzP7kU99WUgiDs_JOwKE6xFm62IoIvlK2AeLX9vT5ESNghKO3FzOWRQkMws0JDknG9FtDjsRYIImxOnjWQGpT-bi19aw2KtJ3kQZFRVTaJ8_iNel7nHQ_tODLzcNJJEWdvNFr"
	fetch("https://k-cpr3.azurewebsites.net/api/requestPush?token="+myDeviceToken)
	.then(function(response){
		console.log(myDeviceToken);
		console.log(response);
	})	
}());