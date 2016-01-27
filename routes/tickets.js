var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Tickets() {
  return knex('tickets');
}

router.get('/', function(req, res, next) {
  if (req.cookies.user){
    res.redirect('/tickets/index')
  } else {
    Tickets().select().then(function (tickets) {
      res.render('tickets/index', {tickets: tickets});
    })
    }
});

router.post('/', function(req, res, next) {
  Tickets().insert(req.body).then(function (tickets) {
    res.redirect('tickets/');
  })
});

router.post('/:id/update', function(req, res, next) {
  Tickets().where({id: req.params.id}).update(req.body).then(function(tickets) {
    res.redirect('/');
  })
});

router.get('/new', function(req, res, next) {
  res.render('tickets/new',{button_text: "Create ticket"});
});

router.get('/show', function(req, res, next) {
  res.render('tickets/show', {ticket: ticket});
});

router.get('/:id/edit', function(req, res, next) {
  Tickets().where({id: req.params.id}).then(function (ticket) {
    res.render('tickets/edit', {ticket: ticket[0], button_text: "Update ticket"});
  })
});

router.get('/:id/delete', function(req, res, next) {
  Tickets().where({id: req.params.id}).delete().then(function () {
    res.redirect('/');
  })
});

module.exports = router;
