const Appointments = require("../model/appointments")

const getAppointments = async (req, res)=>{
    const response = await Appointments.find();
    res.json(response)
}

const newAppointment = async (req, res)=>{
    const newAppointment = req.body.newApp
    await Appointments.create(newAppointment)
    res.json(await Appointments.find());
}

const deleteAppointment = async (req, res)=>{
    const appointmentID = req.body.appointmentId;
    await Appointments.findOneAndDelete({_id: appointmentID});
    res.json(await Appointments.find())
}

const rescheduleAppointment = async (req, res)=>{
    const filter = { _id: req.body.appointmentId};
    const update = { date: req.body.appointmentDate};
    await Appointments.findOneAndUpdate(filter, update).exec();
    res.json(await Appointments.find());
}

module.exports = {
  getAppointments,
  newAppointment,
  deleteAppointment,
  rescheduleAppointment,
};