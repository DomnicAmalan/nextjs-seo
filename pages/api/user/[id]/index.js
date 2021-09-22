// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sampleData = [
  {
    name: "John",
    desc: "He is engineer"
  },
  {
    name: "Doe",
    desc: "He is doctor"
  }
]

export default function handler(req, res) {
  res.status(200).json(sampleData[req.query.id])
}
