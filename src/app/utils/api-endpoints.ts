
 export class Endpoints{
    public static readonly login =  '/recycle/webapi/v1/Account/Login';
    public static readonly roles =  '/recycle/webapi/v1/Account/GetRoles';
    public static readonly logout =  '/recycle/webapi/v1/Account/Logout';
    public static readonly refreshToken =  '/recycle/webapi/v1/Account/RefreshToken';
    public static readonly resetPassword =  '/recycle/webapi/v1/Account/ResetPassword';
    public static readonly updatePassword =  '/recycle/webapi/v1/Account/UpdatePassword';
    public static readonly register =  '/recycle/webapi/v1/Account/Register';
    public static readonly addUserFromGovernmentApp =  '/recycle/webapi/v1/Account/CreateUserFromAdministratorApplication';
    public static readonly getUserById =  '/recycle/webapi/v1/Account/GetUserInformation/';
    public static readonly getAllUsers =  '/recycle/webapi/v1/Account/GetUsersInformation';
    public static readonly updateUserInformation =  '/recycle/webapi/v1/Account/UpdateUserInformation';
    public static readonly getRecycleBonusOptions =  '/recycle/webapi/v1/Bonus/GetRecycleBonusOptions';
    public static readonly getAllRecycleBonusOptions =  '/recycle/webapi/v1/Bonus/GetAllRecycleBonusOptions';
    public static readonly getBonusUsageHistoryByUser =  '/recycle/webapi/v1/Bonus/GetBonusUsageHistoryByUser/';

    public static readonly getAllBonusUsage =  '/recycle/webapi/v1/Bonus/GetAllBonusUsageHistory/';
    public static readonly getAllRecycleHistory =  '/recycle/webapi/v1/Recycle/GetAllRecycleHistory';

    public static readonly creditBonusUser =  '/recycle/webapi/v1/Bonus/CreditUserBonus';

    public static readonly createBonusOption =  '/recycle/webapi/v1/Bonus/CreateBonusOption';

    public static readonly updateBonusOption =  '/recycle/webapi/v1/Bonus/UpdateBonusOption';
    public static readonly getChatHistoryByUser =  '/recycle/webapi/v1/Chat/GetChatHistoryByUser/';
    public static readonly getChatHistory =  '/recycle/webapi/v1/Chat/GetChatHistory';
    public static readonly createChat =  '/recycle/webapi/v1/Chat/CreateChat';
    public static readonly updateChat =  '/recycle/webapi/v1/Chat/UpdateChat';
    public static readonly updloadPhotoChat =  '/recycle/webapi/v1/Chat/UploadPhoto/';
    public static readonly getAddressGoogleApi =  '/recycle/webapi/v1/google/GetAddressGoogleapi';
    public static readonly getDirectionsGoogleApi =  '/recycle/webapi/v1/Google/GetDirectionsGoogleApi';
    public static readonly getDistanceGoogleApi =  '/recycle/webapi/v1/Google/GetDistanceGoogleApi';
    public static readonly getRecycleCategories =  '/recycle/webapi/v1/Recycle/GetRecycleCategories';
    public static readonly getAllRecycleCategories =  '/recycle/webapi/v1/Recycle/GetAllRecycleCategories';
    public static readonly getMaterialByCategory =  '/recycle/webapi/v1/Recycle/GetMaterialByCategory/';
    public static readonly getAllRecycleMaterials =  '/recycle/webapi/v1/Recycle/GetAllMaterials';
    public static readonly getCategoryById =  '/recycle/webapi/v1/Recycle/GetRecycleCategoryById/';
    public static readonly getRecycleHistoryByUser =  '/recycle/webapi/v1/Recycle/GetRecycleHistoryByUser/';
    public static readonly createMaterial =  '/recycle/webapi/v1/Recycle/CreateMaterial';
    public static readonly updateMaterial=  '/recycle/webapi/v1/Recycle/UpdateMaterial';
    public static readonly createCategory =  '/recycle/webapi/v1/Recycle/CreateCategory';
    public static readonly updateCategory =  '/recycle/webapi/v1/Recycle/UpdateCategory';
    public static readonly createRecycleHistory =  '/recycle/webapi/v1/Recycle/CreateRecycleHistory';
    public static readonly updateRecycleHistory =  '/recycle/webapi/v1/recycle/UpdateRecycleHistory';
    public static readonly getClosestRecyclePoints =  '/recycle/webapi/v1/Recycle/GetClosestRecycleLocals/';
    public static readonly getAllRecycleLocals =  '/recycle/webapi/v1/Recycle/GetAllRecycleLocals';
    public static readonly createRecycleLocal =  '/recycle/webapi/v1/Recycle/CreateRecycleLocal';
    public static readonly updateRecycleLocal =  '/recycle/webapi/v1/Recycle/UpdateRecycleLocal';
    public static readonly getAvailableMaterial =  '/recycle/webapi/v1/Recycle/GetAvailableMaterial/';
    public static readonly requestMaterial =  '/recycle/webapi/v1/Recycle/RequestAvailableMaterial';
    public static readonly updateBonus =  '/recycle/webapi/v1/Bonus/DebitUserBonus';

}