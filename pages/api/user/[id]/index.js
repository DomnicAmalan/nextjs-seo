// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sampleData = {
  "0": {
    name: "Hoo",
    desc: "He is doctor"
  },
  "1": {
    name: "John",
    desc: "He is engineer"
  },
  "2": {
    name: "Doe",
    desc: "He is doctor"
  },
}

export default function handler(req, res) {
  res.status(200).json(sampleData[req.query.id])
}
