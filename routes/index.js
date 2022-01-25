// import express
import express from 'express';
// import controllers
import { getEmployeeData, getEmployeeDataById, saveEmployeeData, updateEmployeeData, deleteDataEmployee } from '../controllers/employeesController.js';

// express router
const router = express.Router();

// Router get all data employee
router.get('/', getEmployeeData);

// Route get single data of employee
router.get('/:id', getEmployeeDataById);

// Route create new data to new employee
router.post('/', saveEmployeeData);

// Route update data employee by id
router.patch('/:id', updateEmployeeData);

// Route delete data employee by id
router.delete('/:id', deleteDataEmployee);

// export router
export default router;
