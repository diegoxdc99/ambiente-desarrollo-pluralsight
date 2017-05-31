export default function getBaseUrl() {
  /* v1
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : '/';
  */

  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}



function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=((^")
}
