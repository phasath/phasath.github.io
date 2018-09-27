const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const app = express();
let dirPath = __dirname + "/dist";


const PORT = process.env.PORT || 5000;

app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(serveStatic(dirPath));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('Listening on: ' + PORT);
console.log('Access here: http://localhost:' + PORT);
var server = app.listen(PORT)