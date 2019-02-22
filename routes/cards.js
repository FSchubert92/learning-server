const express = require('express')
const uid = require('uid')
const router = express.Router()
const Card = require('../models/Card')
const data = {
  cards: [
    {
      title: 'Express',
      content: 'Express is easy',
      tags: ['js', 'node', 'backend'],
      id: uid(),
    },
    {
      title: 'Display: grid',
      content: 'Declare a grid without Bootstrap',
      tags: ['css', 'grid', 'layout'],
      id: uid(),
    },
  ],
}

router.get('/', (req, res) => {
  Card.find().then(cards => res.json(cards))
})

router.post('/', (req, res) => {
  Card.create(req.body)
    .then(card => {
      res.json(card)
    })
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Card.findByIdAndDelete(id)
    .then(card => {
      res.json('Succsses')
    })
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const updatedContent = req.body
  Card.findByIdAndUpdate(id, updatedContent, { new: true })
    .then(card => {
      res.json(card)
    })
    .catch(err => res.json(err))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const index = data.cards.findIndex(card => card.id === id)
  const card = { ...req.body, id }
  data.cards[index] = card
  res.json(card)
})

module.exports = router
