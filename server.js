const express = require('express')
const uid = require('uid')

const app = express()

app.use(express.json())

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

app.get('/cards', (req, res) => {
  res.json(data.cards)
})

app.post('/cards', (req, res) => {
  const newCard = req.body
  newCard.id = uid()
  data.cards.push(newCard)
  res.json(newCard)
})

app.delete('/cards/:id', (req, res) => {
  const id = req.params.id
  const deletedCard = data.cards.find(card => card.id === id)
  data.cards = data.cards.filter(card => card.id !== id)
  res.json(deletedCard)
})

app.patch('/cards/:id', (req, res) => {
  const id = req.params.id
  const index = data.cards.findIndex(card => card.id === id)
  const card = { ...data.cards[index], ...req.body }
  data.cards[index] = card
  res.json(card)
})

app.put('/cards/:id', (req, res) => {
  const id = req.params.id
  const index = data.cards.findIndex(card => card.id === id)
  const card = { ...req.body, id }
  data.cards[index] = card
  res.json(card)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server ready on port 3000')
})
