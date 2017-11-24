# QueryDecoder
Simple JavaScript Function to interpret the query string of a URL as a JSON Object, relies on `window.location.search`. For example
```javascript
?token=e2Kd&origin=web&uid=132
```
will be converted into
```javascript
{token: 'e2Kd', origin: 'web', uid: '132'}
```
Detection of non-string arguments still w.i.p.
