const express = require('express')
const app = express()
const uid = require('uid')

let cards = [
  { title: 'basics', content: 'bar', tags: 'css, html, js', id: uid() },
  { title: 'misc', content: 'foo', tags: 'css, js', id: uid() },
]

app.use(express.json())

app.post('/cards', (req, res) => {
  let newCardData = req.body
  const uniqueId = uid()
  newCardData = { ...newCardData, id: uniqueId }
  const newCards = [...cards, newCardData]
  res.json(newCards)
})

app.get('/cards', (req, res) => {
  res.json(cards)
})

app.delete('/cards/:id', (req, res) => {
  const itemId = req.params.id
  const indexOfDeleteItem = cards.findIndex(item => item.id === itemId)
  cards = [
    ...cards.slice(0, indexOfDeleteItem),
    ...cards.slice(indexOfDeleteItem + 1),
  ]
  res.json(cards)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server ready on port 3000')
})
