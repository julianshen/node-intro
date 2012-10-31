connect = require('connect')

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(function(req, res){
        res.end('hello node\n');
  })
.listen(3000);
