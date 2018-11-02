<% if(db == 'mongodb'){ %>
  import mongoose from 'mongoose'
  import config from './../../config'
  import chalk from 'chalk'

  mongoose.connect(config.database);

  mongoose.Promise = global.Promise;

  const db = mongoose.connection;

  db.once('open' ,() => {
    console.log(
      chalk.green('连接数据库成功')
    );
  })

  db.on('error', function(error) {
      console.error(
        chalk.red('Error in MongoDb connection: ' + error)
      );
      mongoose.disconnect();
  });

  db.on('close', function() {
      console.log(
        chalk.red('数据库断开，重新连接数据库')
      );
      mongoose.connect(config.database, {server:{auto_reconnect:true}});
  });   

<% }else if (db == 'mysql'){ %>
  import mysql from 'mysql'
  import config from './../../config/'
  //创建连接池
  const db = mysql.createPool({host:config.sql_host,user:config.sql_user,password:config.sql_password,database:config.database})

<% } else {%>
  const db 
<% } %>
export default db;
