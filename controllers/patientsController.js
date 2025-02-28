const Patients = require("../model/patients")

const getPatients = async (req, res)=>{
    const response = await Patients.find();
    res.json(response)
};

const newPatient = async (req, res)=>{
    const newPatient = req.body.newpatient;
    await Patients.create(newPatient);
    res.json(await Patients.find())
};

const deletePatient = async (req, res)=>{
    const patientID =  req.body.patientid;
    await Patients.findOneAndDelete({_id: patientID});
    res.json(await Patients.find());
};

const editHistory = async (req, res)=>{
    const update = {_id: req.body.editHistory}
    const filter = {history: req.body.patientid}
    await Patients.findByIdAndUpdate(filter, update)
    res.json(await Patients.findById(req.body.patientid));
}

module.exports = {
    getPatients,
    newPatient,
    deletePatient,
    editHistory,
}