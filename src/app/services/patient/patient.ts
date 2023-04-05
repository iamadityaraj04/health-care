export class Patient{
    id!:number;
    name!:string;
    email!:string;
    gender!:string;
    dob!:string;
    mobile!:string;
    docId!:number;
    docName!:string;

    constructor(id:number,name:string,email:string,gender:string,dob:string,mobile:string, docId:number, docName:string){
        this.id=id;
        this.name=name;
        this. email=email;
        this.gender=gender;
        this.dob=dob;
        this.mobile=mobile;
        this.docId=docId;
        this.docName=docName;
    }
}