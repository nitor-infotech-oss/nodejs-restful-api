var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Customer = require('./Customer');

// CREATES A NEW CUSTOMER
router.post('/', function (req, res) {
    Customer.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, customer) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(customer);
        });
});

// RETURNS ALL THE CUSTOMERS IN THE DATABASE
router.get('/', function (req, res) {
    Customer.find({}, function (err, customers) {
        if (err) return res.status(500).send("There was a problem finding the Customers.");
        res.status(200).send(customers);
    });
});

// GETS A SINGLE CUSTOMER FROM THE DATABASE
router.get('/:id', function (req, res) {
    Customer.findById(req.params.id, function (err, customer) {
        if (err) return res.status(500).send("There was a problem finding the Customer.");
        if (!customer) return res.status(404).send("No Customer found.");
        res.status(200).send(customer);
    });
});

// DELETES A CUSTOMER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Customer.findByIdAndRemove(req.params.id, function (err, customer) {
        if (err) return res.status(500).send("There was a problem deleting the Customer.");
        res.status(200).send("customer: "+ customer.name +" was deleted.");
    });
});

// UPDATES A SINGLE CUSTOMER IN THE DATABASE
router.put('/:id', function (req, res) {
    Customer.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, customer) {
        if (err) return res.status(500).send("There was a problem updating the Customer.");
        res.status(200).send(customer);
    });
});


module.exports = router;