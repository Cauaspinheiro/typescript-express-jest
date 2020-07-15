import Controller from '../../src/controllers/Controller'

export default new Controller({
  index: (req, res) => res.status(200).json(),
  show: (req, res) => res.status(200).json(),
  create: (req, res) => res.status(200).json(),
  update: (req, res) => res.status(200).json(),
  delete: (req, res) => res.status(200).json(),
})
