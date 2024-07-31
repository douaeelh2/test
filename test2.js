var data = [];
var count = 0;
var userData = {};

function addUser(username, password) {
    if (!username || !password) {
        console.log("Invalid input");
        return;
    }
    var user = {
        username: username,
        password: password,
    };
    userData[username] = user;
    data.push(user);
    count++;
}

function findUser(username) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].username == username) {
            return data[i];
        }
    }
    return null;
}

function removeUser(username) {
    if (userData[username]) {
        delete userData[username];
        for (var i = 0; i < data.length; i++) {
            if (data[i].username == username) {
                data.splice(i, 1);
                count--;
                break;
            }
        }
    } else {
        console.log("User not found");
    }
}

function listUsers() {
    for (var i = 0; i < data.length; i++) {
        console.log("User: " + data[i].username);
    }
}

function authenticate(username, password) {
    var user = findUser(username);
    if (user && user.password == password) {
        console.log("Authentication successful for user: " + username);
    } else {
        console.log("Authentication failed");
    }
}

addUser("admin", "admin123");
addUser("user1", "password1");
authenticate("admin", "admin123");
listUsers();
removeUser("user1");
listUsers();
