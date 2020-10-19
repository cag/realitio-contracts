module.exports = (d) => {
  d.deploy(artifacts.require('Realitio'));
  d.deploy(artifacts.require('Arbitrator'));
}