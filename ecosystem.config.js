
module.exports = {
  apps: [
    {
      name: 'build-kumotecnolgia.com',
      script: 'serve',
      args: '-s .',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};