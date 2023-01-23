function DatabaseError(command,message) {
    this.statement = command
    this.message = message
}
const database = {
    tables:{},
    createTable(command) {
        const regexp = /^(create table) ([a-z]+) \((.+)\)/;
        const parseCommand = command.match(regexp);
        const tableName = parseCommand[2];
        const columns = parseCommand[3].split(", ");
    
        let tables = {[tableName]: {"colmuns": {}, "data": []}};
        for (let column of columns) {
            let splitColumn = column.split(" ");
            let nameColumn = splitColumn[0];
            let typeColumn = splitColumn[1];
        
            tables[tableName].colmuns[nameColumn] = typeColumn
        }

        Object.defineProperty(this.tables, tableName, { enumerable: true, value: tables});
    },
    execute(command) {
        if (command.startsWith("create table ")){
            return this.createTable.call(this, command);
        }
        const message = `Syntax error: '${command}'`
        throw new DatabaseError(command, message)
    }
}
try {
    database.execute("select id, name from author");
} catch (error) {
    console.log(error.message);
}
