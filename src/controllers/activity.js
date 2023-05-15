const activity = require('../models/activity');

const getAllActivities = (req, res) => {
  activity.find()
    .then((activities) => {
      res.status(200).json({
        message: 'here is the activities list',
        data: activities,
        error: false,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'there is an error here',
        error,
      });
    });
};
const getActivityById = (req, res) => {
  const Id = req.params.id;
  activity.findById(Id, 'name description')
    .then((activities) => {
      res.status(200).json({
        message: `activity ${activities.name} was found`,
        data: activities,
        error: false,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'there is an error here',
        error,
      });
    });
};

module.exports = {
  getAllActivities,
  getActivityById,
};
