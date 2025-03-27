const Appointment = require("../model/appointments")

const getAppointments = async (req, res)=>{
    const response = await Appointment.find();
    res.json(response)
}

const newAppointment = async (req, res)=>{
    // const {title, id, number, date ,type, description, backgroundColor, borderColor} = req.body
    const request = req.body
    // console.log(title, id, number, date ,type, description, backgroundColor, borderColor)
    const newapp = await Appointment.create({
        title: request.title,
        id: request.id,
        number:request.number,
        date: request.date,
        type: request.type,
        description: request.description,
        backgroundColor:request.backgroundColor,
        borderColor: request.borderColor
    })
    console.log(request)
    const newAp = await Appointment.find()
    res.status(200).json(newAp);
}

const deleteAppointment = async (req, res)=>{
    const request = req.body
    console.log(req.params.id)
    const deleted = await Appointment.findOneAndDelete({_id: req.params.id}).exec()
    res.json(await Appointment.find())
}

const rescheduleAppointment = async (req, res)=>{
    console.log(req.params.id)
    console.log(req.body.appointmentDate)
    const filter = { _id: req.params.id};
    const update = { date: req.body.appointmentDate};
    await Appointment.findOneAndUpdate(filter, update).exec();
    res.json(await Appointment.find());
}

module.exports = {
  getAppointments,
  newAppointment,
  deleteAppointment,
  rescheduleAppointment,
};