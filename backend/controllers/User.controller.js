const { getUsers, getUserById, addUser, updateUser, deleteUser } = require("../databases/userDatabase.js");

module.exports.get_allUsers = async (request, response) => {
    try {
        const users = await getUsers();
        response.status(200).json({status: true, data: users});
    } catch (error) {
        response.status(500).json({status: false, errorMessage: error});
    }
}

module.exports.get_userById = async (request, response) => {
    try {
        const {id} = request.params;
        const user = await getUserById(id);
        response.status(200).json({status: true, data: user});
    } catch (error) {
        response.status(500).json({status: false, errorMessage: error});
    }
}

module.exports.post_addUser = async (request, response) => {
    try {
        const {username, email, password} = request.body;
        addUser(username, email, password);
        response.status(200).json({status: true, message: "User successfully added."});
    } catch (error) {
        response.status(500).json({status: false, errorMessage: error});
    }
}

module.exports.put_userById = async (request, response) => {
    try {
        const {id} = request.params;
        const {username, email, password} = request.body;
        await updateUser(id, {username: username, email: email, password: password});
        response.status(200).json({status: true, message: "User successfully updated."});
    } catch (error) {
        response.status(500).json({status: false, errorMessage: error});
    }
}

module.exports.delete_userById = async (request, response) => {
    try {
        const {id} = request.params;
        await deleteUser(id);
        response.status(200).json({status: true, message: "User successfully deleted."});
    } catch (error) {
        response.status(500).json({status: false, errorMessage: error});
    }
}