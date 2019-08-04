const express = require('express');

const router = express.Router()

// require diskdb
const db = require('diskdb');
db.connect(__dirname, ['todos']);

//store TODO
router.post('/todo', function(req, res){
	var todo = req.body;
	if (!toso.action || !(todo.isDone +'')){
		res.status(400);
		res.json({
			error:'Bad Data'
		})
	}
	else{
		db.todos.save(todo);
		res.json(todo);
	}
});

// get TODOs
router.get('/todos', function(req, res, next){
	const todos = db.todos.find();
	res.json(todos)
})

// update TODO
router.put('/todo/:id', function(req, res, next){
	const todo = req.body;
	db.todos.update({_id:req.params.id}, todo);
	res.json({msg:`${req.params.id} updated`})
})

// delete TODO
router.delete('/todo/:id', function(req, res, next){
	const todo = req.body;
	db.todos.remove({_id:req.params.id});
	res.json({msg:`${req.params.id} deleted`})
})

router.get('/', (req, res) => {
	res.send('api works!');
});

module.exports = router;