module.exports = function (express) {
	var router = express.Router();

	router.get('/', function(req, res){
		res.json({hello: "world"});
	});

	return router;
}