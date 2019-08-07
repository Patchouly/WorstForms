module.exports.index = function(application, req, res) {
    res.render("index",{layout:'false'});
};

module.exports.form1 = function(application, req, res) {
    res.render("pages/form1",{layout:'layout'});
};

module.exports.form2 = function(application, req, res) {
    res.render("pages/form2",{layout:'layout'});
};

module.exports.form3 = function(application, req, res) {
    res.render("pages/form3",{layout:'layout'});
};

module.exports.form4 = function(application, req, res) {
    res.render("pages/form4",{layout:'layout'});
};

module.exports.salvar = function(application, req, res) {
    var dadosForm = req.body;
}
