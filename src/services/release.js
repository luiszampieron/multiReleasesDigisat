const releases = require("../models/releasesDao");
const { getDetalhes } = require("../utils/helperFolders");
const componentItemRelease = require("../views/components/itemRelease");

const verificarReleaseExistenteInDB = (release) => {
  if (!!releases.getByRelease(release))
    throw new Error("Versão já existe no banco de dados");
};

const loadReleases = () => {
  const list = document.getElementById("db-releases");
  const releasesResult = releases.getReleases();

  list.innerHTML = `${releasesResult
    .map((release) => {
      return componentItemRelease(
        release.release,
        release.descricao,
        release.running,
        release.id
      );
    })
    .join("\n")}`;
};

const createRelease = () => {
  const release = getDetalhes(
    "C:/DigiSat/SuiteG6/Sistema/Infraestrutura.dll"
  ).FileVersion;

  //verificarReleaseExistenteInDB(release); //TODO mudar aqui em produção... "DESCOMENTAR"

  console.log(releases.addRelease(release));
};

module.exports = {
  createRelease,
  loadReleases,
};
