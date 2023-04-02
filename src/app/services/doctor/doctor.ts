export class Doctor{
    id!:number;
    name!:string;
    email!:string;
    gender!:string;
    dob!:string;
    specialization!:string;
    appointments!:number;


    constructor(id:number,name:string,email:string,gender:string,dob:string,specialization:string,appointments:number){
        this.id=id;
        this.name=name;
        this. email=email;
        this.gender=gender;
        this.dob=dob;
        this.specialization=specialization;
        this.appointments=appointments;
    }
}