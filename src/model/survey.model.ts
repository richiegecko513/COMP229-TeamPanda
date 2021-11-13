import { Date } from "mongoose";
export class Survey
{
    constructor(
        public _id?: string,
        public title?:string,
        public questions?:{
             _id?: string,
             label?: string,
             answer?: string
        },      //how do we list multiple questions for one survey?
        public author?: string, 
        public activeDate?: Date,
        public expiryDate?: Date,
    ){}
}







