import express from 'express';
import { createFinancialRecord, deleteFinancialRecord, getAllByUserId, updateFinancialRecord } from '../controllers/financial-record';
import { validateData } from '../middleware/validationMiddleware';
import { financialCreateSchema, financialUpdateSchema } from '../schema';

const router = express.Router();

router.get('/:userId', getAllByUserId);
router.post("/",validateData(financialCreateSchema),createFinancialRecord);
router.put("/:id",validateData(financialUpdateSchema),updateFinancialRecord);
router.delete("/:id",deleteFinancialRecord);

export default router;