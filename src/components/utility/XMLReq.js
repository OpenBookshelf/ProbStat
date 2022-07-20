const XMLReq = (src, setData) => {
  if (src) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setData(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", src, true);
    xhttp.send();
  } else {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setData(this.responseText);
      }
    };
    xhttp.open(
      "GET",
      "https://openbookshelf.github.io/ProbStat/lectures/Foo.html",
      true
    );
    xhttp.send();
  }
};
export default XMLReq;
