module.exports = function(application) {
	application.get('/', function(req, res) {
		application.app.controllers.home.index(application, req, res);
	});

	application.post('/phoneForm', function(req, res) {
		var randon = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		switch(randon) {
			case 1:
				application.app.controllers.home.form1(application, req, res);
				break;
			case 2:
				application.app.controllers.home.form2(application, req, res);
				break;
			case 3:
				application.app.controllers.home.form3(application, req, res);
				break;
			case 4:
				application.app.controllers.home.form4(application, req, res);
				break;	
			default:
				application.app.controllers.home.index(application, req, res);
		  }
	});
};