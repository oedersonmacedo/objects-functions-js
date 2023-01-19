const command = "create table author (id number, name string, age number, city string, state string, country string)"
const database = {tables:{}};

const regexp = /^(create table) ([a-z]+) \((.+)\)/;
const parseCommand = command.match(regexp);
const tableName = parseCommand[2];
const columns = parseCommand[3].split(", ");

console.log(database);
database.tables = {[tableName]: {"colmuns": {}, "data": []}};
for (let column of columns) {
    let splitColumn = column.split(" ");
    let nameColumn = splitColumn[0];
    let typeColumn = splitColumn[1];

    database.tables[tableName].colmuns[nameColumn] = typeColumn
}

console.log( JSON.stringify(database, undefined,"   "));
/*** expect output: 
 * {
 *  "tables": {
 *      "author":{
 *          "colmuns":{
 *              "id":"number",
 *              "name":"string",
 *              "age":"number",
 *              "city":"string",
 *              "state":"string",
 *              "country":"string"
 *          }, 
 *          "data":[]
 *      }
 *  }
 * }*/