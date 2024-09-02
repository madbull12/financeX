import { type Request, type Response } from 'express';
import FinancialRecordModel from '../models/financial-record';
import { } from '../schema';


export const getAllByUserId = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const records = await FinancialRecordModel.find({
            userId
        });

        if (records.length === 0) {
            res.status(404).send("No records found for this user")
        }

        res.status(200).json({
            data: records
        })

    } catch (err) {
        res.status(500).send(err)
    }


}

export const createFinancialRecord = async (req: Request, res: Response) => {
    try {
        const createdRecord = await FinancialRecordModel.create(req.body);
        res.status(201).json({
            message: "Financial record created successfully",
            data: createdRecord,
        })


    } catch (err) {
        res.status(500).send(err)
    }
}
export const updateFinancialRecord = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {



        const updateRecord = await FinancialRecordModel.findByIdAndUpdate(id, req.body, {
            new: true
        });

        if (!updateRecord) return res.status(404).send({
            message: "Record not found!",
        })

        res.status(200).json({
            message: "Financial record updated successfully",
            data: updateRecord,
        })


    } catch (err) {
        res.status(500).send(err)
    }
}
export const deleteFinancialRecord = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {



        const deleteRecord = await FinancialRecordModel.findByIdAndDelete(id);

        if (!deleteRecord) return res.status(404).send({
            message: "Record not found!",
        })

        res.status(200).json({
            message: "Financial record updated successfully",
        })


    } catch (err) {
        res.status(500).send(err)
    }
}
