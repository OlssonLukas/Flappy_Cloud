const { user } = require('pg/lib/defaults');

module.exports = (req, res, next) => {
  console.log(req.session);

  if (req.session && req.session.user) {
    if (isAllowed(req, res)) {
      next();
    } else {
      res.status(401).json({
        message: `this action was not allowed`
      })
    }
  } else {
    res.status(401).json({
      message: `User is not logged in`
    })
  }
}

function isAllowed(req, res) {
  const aclRules = require('./acl-rules.json');
  let userRole = req.session.user.role;
  let method = req.method.toLowerCase();
  console.log(userRole, method)
  var tableName = "";
  console.log(req.originalUrl);
  if (req.originalUrl.includes("/api/users")) {
    console.log("users");
    tableName = "users";
  } else if (req.originalUrl.includes("/api/metrics")) {
    console.log("metrics");
    tableName = "metrics";
  }
  let allowed = aclRules?.[userRole]?.[tableName]?.[method];

  return !!allowed;
}