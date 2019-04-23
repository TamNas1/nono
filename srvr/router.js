const handlers = require('./handlers');


const router = (req, res) => {
  const url = req.url;

  if (url === '/') {
    handlers.handlerHome(res,url);
  } else if(url.includes('.')){
    handlers.handlePublic(res,url);
  } else {
    handlers.handlerHome(res,url);
  }
};

module.exports = router;
