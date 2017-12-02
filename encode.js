function encode () {
  var query = {}
  window.location.search
    .substr(1)
    .split('&')
    .map(e => e.split('=' ))
    .map(e => query[e[0]] = e[1])
  return query
}
