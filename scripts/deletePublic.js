const { exec } = require('child_process');

const deletePublic = () =>
  exec('rm dist/*{js,css,html,gz}', () =>
    process.exit());

deletePublic();
