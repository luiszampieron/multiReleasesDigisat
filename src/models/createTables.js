const releasesSchema = require("../schemas/releasesSchema");
const db = require("./DBManager").db;

const createTable = (schema) => {
  const sqlColunas = schema.colunas
    .map((coluna) => {
      return `${coluna.name} ${coluna.type} ${
        coluna.notNull ? "NOT NULL" : ""
      } ${coluna.primaryKey ? "PRIMARY KEY" : ""} ${
        coluna.autoIncrement ? "AUTOINCREMENT" : ""
      } `;
    })
    .join(", ");

  const sql = `CREATE TABLE IF NOT EXISTS ${schema.table} (${sqlColunas})`;
  db.exec(sql);
  return true;
};

module.exports = () => {
  createTable(releasesSchema);
};
