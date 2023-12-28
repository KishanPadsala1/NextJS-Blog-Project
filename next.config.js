const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env: {
        mongodb_username: "kishanpadsala",
        mongodb_password: "kishan",
        mongodb_clustername: "cluster0",
        mongodb_database: "blogs-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "kishanpadsala",
      mongodb_password: "kishan",
      mongodb_clustername: "cluster0",
      mongodb_database: "blogs",
    },
  }
};