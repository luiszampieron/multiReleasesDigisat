const db = require("./DBManager").db;

const getReleases = () => {
  const result = db.prepare("SELECT * FROM releases").all();
  return result;
};

const addRelease = (release) => {
  const stmp = db.prepare("INSERT INTO releases (release, running) VALUES (@release, @running)");
  stmp.run({
    release,
    running: 1,
  });
  return getReleases();
};

const getByRelease = (release) => {
  const result = db
    .prepare(`SELECT * FROM releases WHERE release = '${release}'`)
    .all();
  return result;
};

const updateDescricao = (idRelease, descricao) => {
  console.log(idRelease, descricao)

  const result = db.exec(
    `UPDATE releases SET descricao = '${descricao}' WHERE id = '${idRelease}'`
  );
  return result;
};

module.exports = {
  getReleases,
  addRelease,
  getByRelease,
  updateDescricao,
};
