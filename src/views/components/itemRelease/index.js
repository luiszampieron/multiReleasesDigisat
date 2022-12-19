module.exports = (release, descricao, running, id) => {
  return `
<div class="container-item-release">
    <span class="release-item">${release}</span>
 
    <input value="${descricao ? descricao : ""}" class="descricao-item" id="input-descricao-${id}" />
     
    ${running ? `<i class="fas fa-pause pause-item" onClick="api.stopRelease(${id})"></i>` : ""}
    ${running ? `<i class="fas fa-play run-release" onClick="api.runRelease(${id})"></i>` : ""}
</div>`;
};
