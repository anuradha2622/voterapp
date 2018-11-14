var Nerd = require('/home/anuradhayakapoor/library/scotch/starter-node-angular-master/app/models/Nerd.js');
const express = require('express');
const router = express.Router()


	
	router.get('/:id/nerds', function(req, res) {	
	Nerd.find(function(err, nerds) {

			if (err)
				res.send(err);

			res.json(nerds);
		});
	});
	

router.get('*', function(req, res) {
		res.sendfile('./public/index.html');
});


cr = function (req, res) {
    let product = new Nerd(
        {
            name: req.body.name,
        });
product.save(function (err) {
        if (err) {
            res.send("enter the proper data type of variables");
        }
        res.send('data entered successfully')
       
    })
};

router.post('/create',cr );
