import express from 'express';
import { addCustomer, addCustomerAddress, listAllCustomers } from '../controllers/customers-controller';

const router = express.Router();

router.route('/')
    .get(listAllCustomers)
    .post(addCustomer);

router.route('/address')
    .post(addCustomerAddress);

export default router;