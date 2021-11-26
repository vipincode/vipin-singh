// import data from '@/data/data'
const {skills, works} = require('@/data/data.json')

export default function skillHandler(req, res) {
  res.status(200).json({ skills, works })
}

