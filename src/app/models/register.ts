export class Register {
     email :  string ;
     name :  string ;
     userName :  string ;
     password :  string ;
     confirmPassword :  string ;
     isCompany : boolean;
     isGovernment : boolean;
     address : {
       userAddressId : number;
       userId :  string ;
       userRole :  string ;
       completeAdress :  string ;
       street :  string ;
       city :  string ;
       state :  string ;
       postalCode :  string ;
       country :  string ;
       latitude : number;
       longitude : number;
       createdBy :  string ;
       updatedBy :  string ;
       createdOn :  string ;
       updatedOn :  string;
    }
     /**
      *
      */
     constructor() {
        
     }
}