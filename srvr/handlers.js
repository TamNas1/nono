const path = require('path');
const fs = require('fs');

const exType = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  png: 'image/png',
};

const handleServer500 = (res, err) => {
  res.writeHead(500, {
    "content-Type": exType.html
  })
  res.end("<h1>Sorry, there was an error in the server. Please contact Tamer</h1>" + err)
}
const handlerHome = (res) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, file) => {
    if (err) {
      handleServer500(res, err);
    } else {
      res.writeHead(200, {
        'content-type': exType.html
      })

      res.end(file)


    }
  })
}
const handlePublic = (response, url) => {
  let filePath = path.join(__dirname, "..", "public", url)
  const extension = url.split('.')[1]
  fs.readFile(filePath, (err, file) => {
    if (err) {
      handleServer500(response, err)
    } else {
      response.writeHead(200, {
        'content-type': exType[extension]
      })
      response.end(file)
    }
  })
}


module.exports = {
  handlePublic,
  handlerHome,
}
