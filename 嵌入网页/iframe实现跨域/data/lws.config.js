module.exports = {
  "port": 8082,
  "forbid": "*.json",
  rewrite: [{
    from: '/wf-web/*',
    to: 'http://10.158.244.31/wf-web/$1'
  }],
  directory: '',
  logFormat: 'stats'
}
