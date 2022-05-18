const { user } = require('pg/lib/defaults');

module.exports = (req, res, next) => {

  if (req.session && req.session.user) {
    if (isAllowed(req, res)) {
      next();
    } else {
      res.status(401).json({
        message: `this action was not allowed`
      })
    }
  } else {
    if (isAllowed(req, res)) {
      next();
    }
  }
}

function isAllowed(req, res) {
  const aclRules = require('./acl-rules.json');
  let userRole = req?.session?.user?.role ? req?.session?.user?.role : 'visitor';
  let method = req.method.toLowerCase();

  var tableName = "";
  if (req.originalUrl.includes("/api/users")) {
    tableName = "users";
  } else if (req.originalUrl.includes("/api/metrics")) {
    tableName = "metrics";
  }

  let allowed = aclRules?.[userRole]?.[tableName]?.[method];

  return !!allowed;
}