const mysql = require("mysql2");
const express = require("express");
const fs = require("fs");
const cors = require('cors');

const app = express();
const jsonParser = express.json();

app.use(cors());
app.use(express.static(__dirname + "/public"));

const filePath = "database.json";

//Подключение к базе данных MySql
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "diplomDB",
	password: "root"
});
// тестирование подключения
connection.connect(function(err){
	if (err) {
		return console.error("Ошибка: " + err.message);
	} else {
		console.log("Подключение к серверу MySQL успешно установлено");
	}
});

connection.execute("SELECT * FROM shops",
	function(err, results, fields) {
        console.log(results)

});


connection.query("SELECT * FROM shops", function(err, results, fields) {
    if (err) throw err;
    let apiData = results;
    // Запись полученных данных в файл database.json
    // fs.writeFile('database.json', JSON.stringify(results), function(err) {
    //   if (err) throw err;
    //   console.log('Данные успешно записаны в файл database.json');
    // });
  
    apiData.forEach((shopData, shopId) => {
        connection.query(`SELECT * FROM categories WHERE categories.shop_id = ${shopId}`, function(err, results, fields) {
            if (err) throw err;
            results != 0 ? {apiData[shopId + 1].categoriesList.push(results)} : undefined
        });
    }, [])

    console.log(apiData)
  });

// закрытие подключения
// connection.end(function(err) {
// 	if (err) {
// 		return console.log("Ошибка: " + err.message);
// 	}
// 	console.log("Подключение закрыто");
// });

app.get("/api/database", function(req, res){
    const content = fs.readFileSync(filePath,"utf8");
    const database = JSON.parse(content);
    console.log(database)
    res.send(database);
    // return res.status(200).res.json({message: database})
});

app.get("/api/database/:id", function(req, res){
    const id = req.params.id;
    const content = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(content);
    let user = null;
    // находим в массиве пользователя по id
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            user = users[i];
            break;
        }
    }

    if(user){
        return res.status(200).res.json({message: user})
    }
    else{
        res.status(200).send();
    }
})

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from backend"
    })
})

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on port 3001`)
});