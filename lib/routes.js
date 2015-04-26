var api = require('./controllers/api');

module.exports = function(app) {

  app.route('/api/create')
    .post(api.createEntity);

  app.route('/api/get')
  	.get(api.getAllEntities);

  app.route('/api/get/:id')
  	.get(api.getEntityById);

  app.route('/api/update/:id')
    .put(api.insertCoordinatesForId);

  app.route('/api/updateFound/:id')
    .put(api.updateIsFound); 

  app.route('/api/delete/:id')
    .delete(api.deleteEntity);

  app.route('/api/editName/:id')
    .put(api.editEntityName);
};