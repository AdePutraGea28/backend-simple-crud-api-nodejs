// import models
import Employee from '../models/Employee.js';

// function get all employees data
export const getEmployeeData = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function get a data of employee by id
export const getEmployeeDataById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// function create new data to new employee
export const saveEmployeeData = async (req, res) => {
  const employee = new Employee(req.body);
  try {
    const saveEmployeeData = await employee.save();
    res.status(201).json(saveEmployeeData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// function update data employee by id
export const updateEmployeeData = async (req, res) => {
  const cekId = await Employee.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: 'Data Not Found' });
  try {
    const updateEmployeeData = await Employee.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updateEmployeeData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// function delete data employee by id
export const deleteDataEmployee = async (req, res) => {
  const cekId = await Employee.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: 'Data Not Found' });
  try {
    const deleteDataEmployee = await Employee.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteDataEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
