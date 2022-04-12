const req = window.XMLHttpRequest
  ? new XMLHttpRequest()
  : // eslint-disable-next-line no-undef
    new ActiveXObject("Microsoft.XMLHTTP");

req.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE) {
    window.config = JSON.parse(this.responseText);
  }
};
req.open("GET", "/Config.json", false);
req.send();
