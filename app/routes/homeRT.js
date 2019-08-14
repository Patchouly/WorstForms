module.exports = function(application) {
	application.get('/', function(req, res) {
		application.app.controllers.homeDAO.index(application, req, res);
	});

	application.post('/phoneForm', function(req, res) {
		var randon = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		switch(randon) {
			case 1:
				application.app.controllers.homeDAO.form1(application, req, res);
				break;
			case 2:
				application.app.controllers.homeDAO.form2(application, req, res);
				break;
			case 3:
				application.app.controllers.homeDAO.form3(application, req, res);
				break;
			case 4:
				application.app.controllers.homeDAO.form4(application, req, res);
				break;	
			default:
				application.app.controllers.homeDAO.index(application, req, res);
		  }
	});

	application.post('/submit', function(req, res) {
		application.app.controllers.homeDAO.salvar(application, req, res);
	});
};