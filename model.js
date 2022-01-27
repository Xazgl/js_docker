// @ts-check
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db");

class UserModel extends Model { }

UserModel.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateTicket: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: "users"
})

module.exports = UserModel