const { contextBridge } = require("electron");
const dbTest = require("./models/testeDBManager");
const createTables = require("./models/createTables");
const { createMultiSuite } = require("./utils/helperFolders");
const serviceRelease = require("./services/release");
const releases = require("./models/releasesDao");

const getNames = () => {
  return dbTest.getNames();
};

const teste = () => {
  const releasesResult = releases.getReleases();
  const update = (release, input) => releases.updateDescricao(release, input);

  releasesResult.forEach((release) => {
    const input = document.querySelector(`#input-descricao-${release.id}`);
    console.log(input);
    input.addEventListener("change", () => {
      console.log("OIE TESTE")

      update(release.id, input.value);
    });
  });
}

contextBridge.exposeInMainWorld("api", {
  getNames,
  createRelease: serviceRelease.createRelease,
  updateRelease: releases.updateDescricao,
  teste: teste
});


window.addEventListener("DOMContentLoaded", async () => {
  createTables();
  createMultiSuite();
  serviceRelease.loadReleases();
  teste()
});
