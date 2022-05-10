exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello World!</h1> <br> <a href="/user">User</a> <a href="/about">About</a> <a href="/contac">Contac</a>');
};

exports.pagesUser = (req, res, next) => {
    res.send('<h1>Halaman User</h1> <br> <a href="/">Back</a>');
};

exports.pagesAbout = (req, res, next) => {
    res.send('<h1>Halaman About</h1> <br> <a href="/">Back</a>');
};

exports.pagesContac = (req, res, next) => {
    res.send('<h1>Halaman Contac</h1> <br> <a href="/">Back</a>');
};