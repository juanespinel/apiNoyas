module.exports = function(sequelize, dataTypes) {
    const alias = 'User';
    const col = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: dataTypes.STRING(60),
            allowNull: false
          },
          email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
          },
          password: {
            type: dataTypes.STRING(100),
            allowNull: false,
          }
    };
    const config = {
        timestamps: true,
        underscored: true
    };
    
    let User = sequelize.define(alias, col, config);
    return User

}