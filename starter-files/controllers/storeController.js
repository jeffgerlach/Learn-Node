exports.myMiddleware = (req, res, next) => {
  req.name = 'Jeff';
  if (req.name === 'Jeff'){
    throw Error('That is a silly name');
  }
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};
