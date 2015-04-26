var mongoose = require('mongoose'),
    Entity = mongoose.model('Entity');

exports.createEntity = function(req, res) {
	var description = req.body.description,
		parkHistory = [],
		isFound = true,
		time = req.body.timestamp || new Date();

	var entity = new Entity();

	entity.description = description;
	entity.timestamp = time;
	entity.parkHistory = parkHistory;
	entity.isFound = isFound;

	entity.save(function(err) {
		if (err) {
			return res.send(err);
		}
		return res.json(entity);
	});
};

exports.getEntityById = function(req, res) {
	Entity.findById(req.params.id, function(err, ent) {
		if (err) {
			return res.send(err);
		}
		return res.json(ent);
	})
};

exports.getAllEntities = function(req, res) {
	Entity.find({}, function(err, ent) {
		if (err) {
			return res.send(err);
		}
		return res.json(ent);
	});
};


exports.insertCoordinatesForId = function(req, res) {
	var historyObject = {
		longitude: req.body.longitude,
		latitude: req.body.latitude,
		time: req.body.timestamp || new Date()
	};
	var id = req.params.id;
	Entity.findById(id, function(err, ent) {
		console.log(ent);
		ent.isFound = false;
		ent.parkHistory.unshift(historyObject);
		ent.save(function(err) {
			if (err) {
				return res.send(err);
			}
			return res.json(ent);
		})
	});
};

exports.updateIsFound = function(req, res) {
	var id = req.params.id;
	Entity.findById(id, function(err, ent) {
		ent.isFound = req.body.isFound;
		ent.save(function(err) {
			if (err) {
				return res.send(err);
			}
			return res.json(ent);
		})
	});
};

exports.editEntityName = function(req, res) {
	var id = req.params.id;
	var description = req.body.description,
	Entity.findById(id, function(err, ent) {
		ent.description = description;
		ent.save(function(err) {
			if (err) {
				return res.send(err);
			}
			return res.json(ent);
		})
	});
};

exports.deleteEntity = function(req, res) {
	var id = req.params.id;
	Entity.remove({_id : id}, function(err) {
		if (err) {
			return res.send(err);
		}
		return res.sendStatus(200);
	});
};