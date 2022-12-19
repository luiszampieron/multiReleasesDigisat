const rimraf = require("rimraf");
const fs = require("fs");
const ncp = require("ncp").ncp;
const vi = require("win-version-info");

exports.deleteFolder = (folder) => {
  rimraf(folder, function (err) {
    if (err) {
      return console.error(err);
    }
  });
};

exports.copyFolder = (origem, destino) => {
  ncp(origem, destino, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("Pasta copiada com sucesso!");
  });
};

exports.pathExists = (path) => {
  const exists = fs.existsSync(path);
  if (!exists) {
    throw new Error("Caminho não existe");
  }

  return true;
};

exports.createMultiSuite = () => {
  if (!exports.pathExists("C:/Digisat/multiSuiteG6"))
    fs.mkdirSync("C:/Digisat/multiSuiteG6");
};

exports.getDetalhes = (filePath) => {
  return vi(filePath);
};
