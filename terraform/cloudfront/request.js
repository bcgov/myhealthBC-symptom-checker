// Next.js request handler
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.match(/sitemap.xml/)) {
    request.uri = uri.replace(/sitemap.xml/, 'index.html');
    return request;
  }

  return request;
}
