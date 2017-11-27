// create the assessment_db database and connect to it
var db = connect('127.0.0.1:27017/assessment_db');
var users = null;

// create the users collection and add one document to it
db.users.insert({ 'username': 'admin', 'password': 'admin', role: 'admin' });
db.users.insert({ 'username': 'raja', 'password': 'raja', role: 'user' });
db.users.insert({ 'username': 'sasi', 'password': 'sasi', role: 'user' });

// set a reference to all documents in the database
users = db.users.find();

// iterate the names collection and output each document
while (users.hasNext()) {
    printjson(users.next());
};

print('***** collections created !!! *******');
