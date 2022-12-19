module.exports = {
  table: "releases",
  colunas: [
    {
      name: "id",
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
      type: "INTEGER",
    },
    {
      name: "release",
      primaryKey: false,
      autoIncrement: false,
      notNull: true,
      type: "TEXT",
    },
    {
      name: "descricao",
      primaryKey: false,
      autoIncrement: false,
      notNull: false,
      type: "TEXT",
    },
    {
      name: "regedit",
      primaryKey: false,
      autoIncrement: false,
      notNull: false,
      type: "TEXT",
    },
    {
      name: "running",
      primaryKey: false,
      autoIncrement: false,
      notNull: true,
      type: "INTEGER",
    }
  ],
};
