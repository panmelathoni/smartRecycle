export class Recycle {
    recycleHistoryId: number;
  materialEstimatedQuantity: number;
  materialRealQuantity: number;
  bonusEarned: number;
  createdBy: string;
  updatedBy: string;
  createdOn: string;
  updatedOn: string;
  userId: string;
  approvalUserId: string;
  requestCompanyId: string;
  recycleMaterial: {
    recyclE_MATERIAL_ID: number;
    materiaL_ENABLED: number;
    materiaL_BONUS_QUANTITY: number;
    materiaL_PHOTO: string;
    materiaL_DESCRIPTION: string;
    materiaL_NAME: string;
    createD_BY: string;
    updateD_BY: string;
    createD_ON: string;
    updateD_ON: string;
    recyclE_CATEGORY_ID: number;
  }
     /**
      *
      */
     constructor() {
        
     }
    }