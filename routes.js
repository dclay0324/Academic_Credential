const routes = require('next-routes')();

routes
     .add('/certificates/success', '/certificates/success')
     .add('/certificates/transcript', '/certificates/transcript')
     .add('/school', 'school/index')
     .add('/school/:address/success', 'school/success');

module.exports = routes;