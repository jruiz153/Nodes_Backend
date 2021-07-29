const rest = new(require('rest-mssql-nodejs'))({
    user: 'webuser',
    password: 'UsrOnLine1',
    server: 'paradoxsql',
    database: 'central',
});

module.exports = {
    rest
}