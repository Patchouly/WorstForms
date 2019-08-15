module.exports.index = function(application, req, res) {
    res.render("index",{layout:'false', dadosForm : {}});
};

module.exports.form1 = function(application, req, res) {
    res.render("pages/form1",{layout:'layout', dadosForm : {}});
};

module.exports.form2 = function(application, req, res) {
    res.render("pages/form2",{layout:'layout', dadosForm : {}});
};

module.exports.form3 = function(application, req, res) {
    res.render("pages/form3",{layout:'layout', dadosForm : {}});
};

module.exports.form4 = function(application, req, res) {
    res.render("pages/form4",{layout:'layout', dadosForm : {}});
};

module.exports.form5 = function(application, req, res) {
    res.render("pages/form5",{layout:'layout', dadosForm : {}});
};

module.exports.form6 = function(application, req, res) {
    res.render("pages/form6",{layout:'layout', dadosForm : {}});
};

module.exports.salvar = function(application, req, res) {
    var dadosForm = req.body;
    res.render("index",{layout:'false', dadosForm : dadosForm});
}
