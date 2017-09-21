const express = require('express');
// const axios = require('axios');
// const qs = require('querystring');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
// const requireText = require('require-text');
const mysql = require('mysql');
const ejs = require('ejs');
// const fs = require('fs');
const path = require("path");
// const Promise = require('promise');

const router = express.Router();

// var read = Promise.denodeify(fs.readFile);
// var write = Promise.denodeify(fs.writeFile);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

// app.set('view engine', 'html');
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'jade');

function connectionsDB() {
    return mysql.createConnection({
        host: "127.0.0.1",
        port: '3306',
        user: "root",
        password: "",
        database: "corporationDB"
    });
}


app.use('/', router);
app.listen(port);
console.log("node listening on port ", port);
/**
 * ROUTES
 */
app.route('/test').get(function (req, res) {
    let menu = '',
        content = '';
    res.render('index.ejs', {menu: menu, content: content})
});

app.route('/corporation').get(function (req, res) {
    const con = connectionsDB();
    getAllCorp(renderTree);

    function getAllCorp(callback) {
        con.query("SELECT * FROM corporation", function (err, result) {
            (err)
                ? console.log('can\'t find corporation', err)
                : '';
            if (result == '') {
                notFindCorporations(res);
            } else {
                callback(result);
            }
            con.end()
        });
    }

    function renderTree(result) {

        let arrayIdParentCorp = result.map(data => data.parent_id);

        let arrayUniqueIdParentCorp = arrayIdParentCorp.unique();

        let childArray = [];

        arrayUniqueIdParentCorp.forEach(IdParenCorp => {
            let obj = {};
            obj.parent_id = IdParenCorp;
            let children = result.map(data => (data.parent_id == IdParenCorp) ? data : '');
            obj.clildren = children.clean("");
            childArray.push(obj);

        });

        let content = buildTree(childArray, 0);
        let menu = buildMenu(childArray[0]);
        res.render('index.ejs', {menu: menu, content: content})
    }

});
/**
 Delete
 Insert
 Update
 */
app.route('/delete').post(function (req, res) {
    const con = connectionsDB();

    let id = req.body.id;


    getCorpById(corporationForDelete);

    function getCorpById(callback) {
        con.query("SELECT * FROM corporation WHERE id = " + id + "", function (err, result) {
            (err)
                ? console.log('can\'t find corporation', err)
                : '';

            callback(result);
        });
    }

    function corporationForDelete(dataTable) {
        (dataTable != '') ? getChildForId(dataTable, updateChild) : console.log('can\'t find corporation');
    }

    function getChildForId(dataTable, callback) {
        con.query("SELECT id FROM corporation WHERE parent_id = '" + id + "'",
            function (err, result) {
                if (err) {
                    console.log('getChildForId ', err);
                } else {
                    callback(dataTable, result.map(data => data.id));
                }
            });
    }

    function updateChild(dataTable, idChild) {

        idChild.forEach(child => {
            con.query("UPDATE corporation SET parent_id = " + dataTable[0].parent_id + " WHERE id = " + child + "", function (err) {
                (err) ? console.log(err) : ''
            });
        });

        con.query("DELETE FROM corporation WHERE id = " + id + "", function (err) {
            (err) ? console.log(err) : ''
        });
        res.end('success');
    }
});

app.route('/insert').post(function (req, res) {
    const con = connectionsDB();
    let parent_id = req.body.id;
    let name = req.body.name;
    let price = req.body.price;
    con.query('INSERT INTO corporation (name, income, parent_id) VALUES ("' + name + '", "' + price + '", "' + parent_id + '")');
    con.query("SELECT id FROM corporation ORDER by id desc LIMIT 1", function (err, result) {
        let id = String(result[0].id);
        res.end(id);
        con.end();
    });


});

app.route('/update').post(function (req, res) {
    const con = connectionsDB();
    let id = req.body.id;
    let name = req.body.name;
    let price = req.body.price;
    con.query('UPDATE corporation SET name = "' + name + '" , income = ' + price + ' WHERE id = ' + id + '', function (err) {
        (err) ? console.log(err) : ''
    });
    con.end();
    res.end('success')
});

Array.prototype.unique = function () {
    let obj = {};
    for (let i = 0; i < this.length; i++) {
        let num = this[i];
        obj[num] = true;
    }
    return Object.keys(obj); // или собрать ключи перебором для IE8-
};

Array.prototype.clean = function (deleteValue) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

//mainId="' + id + '"
function renderBranch(id, price, name) {
    return '<div class="branch"  id="' + id + '" oncontextmenu="popupMenu($(this));return false">' +
        '    <a href="#" onclick="return false">' +
        '        <div class="price">' +
        '            <div class="price_left">one <span onePrice>' + price + '</span>$</div>' +
        '            <div class="price_right">all <span style="display: none" allPrice></span>$</div>' +
        '        </div>' +
        '        <span name>' + name + '</span>' +
        '    </a>' +
        '    <div class="popapTree">' +
        '        <nav>' +
        '            <p onclick="insertModal($(this).parents(\'.branch\'))"><img src="img/add.png">Добавить' +
        '            </p>' +
        '            <p onClick="editModal($(this).parents(\'.branch\'))"><img src="img/edit.png">Редактировать' +
        '            </p>' +
        '            <p onclick="deleteCorporation($(this).parents(\'.branch\'))"><img src="img/delete.png">Удалить' +
        '            </p>' +
        '        </nav>' +
        '    </div>' +
        '</div>'
}

function buildTree(childArray, parent_id) {
    let content = '';
    if (childArray[parent_id] != '' && Array.isArray(childArray)) {
        (parent_id == 0) ? content += '<div class="tree">' : '';

        childArray.forEach(childObj => {

            if (childObj.parent_id == parent_id) {
                (parent_id == 0) ? content += '<ul class="first">' : content += '<ul>';

                childObj.clildren.forEach(child => {
                    content += '<li>';
                    content += renderBranch(child['id'], child['income'], child['name']);
                    content += buildTree(childArray, child['id']);
                    content += '</li>';
                });
                content += '</ul>';
            }
        });

        (parent_id == 0) ? content += '</div>' : '';
    } else return null;
    return content;
}

function buildMenu(childMainArray) {
    let content = '';
    content += '<ul>';
    childMainArray.clildren.forEach(childMain => {
        content += '<li><a href="#' + childMain['id'] + '">' + childMain['name'] + '</a></li>';
    });
    content += '</ul>';
    return content;
}

function notFindCorporations(res) {
    let menu = '<ul></ul>',
        content = '<div class="tree"></div>';
    res.render('index.ejs', {menu: menu, content: content})
}

/**let promise = new Promise(function (resolve, reject) {
        let data1 = "resolved";
        let data2 = "rejected";
        let num = false;

        if (!num) resolve(data1);
        else reject(data2);
    });
 // .then(() => {})
 promise.then(
 (data) => {
            console.log(data)
        },
 (data) => {
            console.log(data)
        }
 );*/