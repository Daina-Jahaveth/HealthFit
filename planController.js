// Ubicación: /server/controllers/planController.js
const Plan = require('../models/Plan');

exports.getPlan = async (req, res) => {
  try {
    const plan = await Plan.findOne({ userId: req.user.id });
    if (!plan) return res.status(404).json({ error: 'Plan no encontrado' });
    res.json(plan);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el plan' });
  }
};
