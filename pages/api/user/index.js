// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sampleData = {
  1: {
    name: "John",
    desc: "He is engineer"
  },
  2: {
    name: "Doe",
    desc: "He is doctor"
  }
}

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe', desc: 'He is a doctor' })
}
