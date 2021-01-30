var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//链接数据库！！！
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'test1'//上文说的名字
});
connection.connect(); //启动连接！！！！
//这中间的是操作！！↓（增删查改，随你开心！！！）
// 需要学数据库的代码

var addSql = 'INSERT INTO demo(Id,name,url,age,country,alexa) VALUES(3,?,?,?,?,?)';
var readSql = 'SELECT * FROM demo WHERE id = 3 and name = 123'
let modSql = "update demo set name = ?, url = ? where id like ?";
var addSqlParams = ['中文', 'https://c.xxrunoob.com', '45643222', 'CN', '15']; //这是想增加的数据
var addsSql = 'INSERT INTO demo(id,name) VALUE ?'


//增
connection.query(readSql, function (err, res) { //询问访问数据库，也就是去嫩那个数据库
  if (err) { //失败就报个错
    console.log('[INSERT ERROR] - ', err.message);
    return;
  }
  console.log("数据库增的结果：");
  console.log(res);
});

//这中间的是操作！！↑
connection.end(); //结束连接！！！不能一直连着！！
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
