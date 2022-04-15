/* eslint-disable eqeqeq */
const req = window.XMLHttpRequest
  ? new XMLHttpRequest()
  : // eslint-disable-next-line no-undef
    new ActiveXObject("Microsoft.XMLHTTP");

req.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE) {
    console.log(window.config);
    window.config = JSON.parse(this.responseText);
  }
};
req.open("GET", "config.json", false);
req.send();
