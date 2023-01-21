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
        if (command.startsWith(command, "create table ")){
            this.createTable.call(this, command);
            /* OR
            createTable.apply(this, [command]);
            OR
            const create = createTable.bind(this);
            create(command);
            */
        }
    }
}

database.execute("create table author (id number, name string, age number, city string, state string, country string)");

console.log( JSON.stringify(database, undefined,"   "));