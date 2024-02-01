"use strict";
exports.__esModule = true;
exports.WINTER = exports.SUMMER = exports.RABI = exports.KHARIF = exports.LEASED = exports.SELFOWNERSHIP = exports.INCH = exports.CENTIMETRE = exports.METRE = exports.POUND = exports.KILOGRAM = exports.GRAM = exports.JAREB = exports.ATHAAS = exports.QILA = exports.LAT = exports.HECTARE = exports.BEGA = exports.MARLA = exports.BISWA = exports.MURABBA = exports.KANAL = exports.ACRE = exports.UserProfileGracePeriod = exports.UserProfilePremiumStatus = exports.PotentialLeadCategory = exports.QuerySource = exports.QueriesSpecifications = exports.UserConcern = exports.MessageType = exports.CallQueryStatus = exports.CallQueryPurpose = exports.ProductsType = exports.RecordState = exports.UserType = exports.CallType = exports.DatasetStatus = exports.Banks = exports.Wallets = exports.SalaryDuration = exports.MobileNetworks = exports.FileType = exports.SystemUserType = exports.Role = exports.knowledgeBaseType = exports.CalendarStatusType = exports.CalendarUIOptionType = exports.CalendarNotificationType = exports.NotificationType = exports.HttpVerbs = void 0;
exports.FEMALE = exports.MALE = exports.SoilType = exports.IRRIGATIONMETHOD = exports.RAINFED = exports.IRRIGATED = void 0;
var HttpVerbs;
(function (HttpVerbs) {
    HttpVerbs["GET"] = "GET";
    HttpVerbs["POST"] = "POST";
    HttpVerbs["PUT"] = "PUT";
    HttpVerbs["DELETE"] = "DELETE";
})(HttpVerbs = exports.HttpVerbs || (exports.HttpVerbs = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["CALENDAR"] = "Crop Calendar";
    NotificationType["ANNOUNCEMENT"] = "Announcement";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
var CalendarNotificationType;
(function (CalendarNotificationType) {
    CalendarNotificationType["NOTIFICATION"] = "Notification";
    CalendarNotificationType["ACTION_ITEM"] = "Action Item";
})(CalendarNotificationType = exports.CalendarNotificationType || (exports.CalendarNotificationType = {}));
var CalendarUIOptionType;
(function (CalendarUIOptionType) {
    CalendarUIOptionType["BUTTON"] = "Button";
    CalendarUIOptionType["RADIO_BUTTON"] = "Radio Button";
    CalendarUIOptionType["TEXT_INPUT"] = "Text Input";
    CalendarUIOptionType["CHECKBOX"] = "Checkbox";
})(CalendarUIOptionType = exports.CalendarUIOptionType || (exports.CalendarUIOptionType = {}));
var CalendarStatusType;
(function (CalendarStatusType) {
    CalendarStatusType["DRAFT"] = "Draft";
    CalendarStatusType["PUBLISHED"] = "Published";
})(CalendarStatusType = exports.CalendarStatusType || (exports.CalendarStatusType = {}));
var knowledgeBaseType;
(function (knowledgeBaseType) {
    knowledgeBaseType["VIDEO"] = "Video";
    knowledgeBaseType["BOOKLET"] = "Booklet";
})(knowledgeBaseType = exports.knowledgeBaseType || (exports.knowledgeBaseType = {}));
var Role;
(function (Role) {
    Role["FC"] = "Field Coordinator";
    Role["DES"] = "Data Entry Supervisor";
    Role["DEO"] = "Data Entry Operator";
    Role["CCM"] = "Call Center Manager";
    Role["CSR"] = "Customer Support Representative";
    Role["AA"] = "Agri Advisor";
    Role["OM"] = "Operations Manager";
    Role["CM"] = "Cluster Manager";
    Role["AD"] = "Administrator";
    Role["SA"] = "System Administrator";
    Role["KDA"] = "Kissan Dukan Agent";
})(Role = exports.Role || (exports.Role = {}));
var SystemUserType;
(function (SystemUserType) {
    SystemUserType["EDITOR_APP"] = "Editor App User";
    SystemUserType["FC_APP"] = "FC App User";
})(SystemUserType = exports.SystemUserType || (exports.SystemUserType = {}));
var FileType;
(function (FileType) {
    FileType["EXCEL"] = "Excel Document";
    FileType["WORD"] = "Word Document";
    FileType["IMAGE"] = "Image";
    FileType["PDF"] = "PDF Document";
})(FileType = exports.FileType || (exports.FileType = {}));
var MobileNetworks;
(function (MobileNetworks) {
    MobileNetworks["JAZZ"] = "Jazz";
    MobileNetworks["TELENOR"] = "Telenor";
    MobileNetworks["ZONG"] = "Zong";
    MobileNetworks["UFONE"] = "Ufone";
    MobileNetworks["WARID"] = "Warid";
    MobileNetworks["SCO"] = "Sco";
})(MobileNetworks = exports.MobileNetworks || (exports.MobileNetworks = {}));
var SalaryDuration;
(function (SalaryDuration) {
    SalaryDuration["CROPWISE"] = "Crop Wise";
    SalaryDuration["ANNUAL"] = "Annual";
})(SalaryDuration = exports.SalaryDuration || (exports.SalaryDuration = {}));
var Wallets;
(function (Wallets) {
    Wallets["JAZZCASH"] = "JazzCash";
    Wallets["EASYPAISA"] = "EasyPaisa";
    Wallets["UBLOMNI"] = "UBLOmni";
    Wallets["SADAPAY"] = "SadaPay";
    Wallets["NAYAPAY"] = "NayaPay";
    Wallets["HBLKONNECT"] = "HBL Konnect";
})(Wallets = exports.Wallets || (exports.Wallets = {}));
var Banks;
(function (Banks) {
    Banks["HABIB_BANK_LIMITED"] = "Habib Bank Limited";
    Banks["MEEZAN_BANK_LIMITED"] = "Meezan Bank Limited";
    Banks["BANK_AL_FALAH_LIMITED"] = "Bank Al-Falah Limited";
    Banks["BANK_AL_HABIB_LIMITED"] = "Bank Al-Habib Limited";
    Banks["JS_BANK_LIMITED"] = "JS Bank Limited";
    Banks["SUMMIT_BANK_LIMITED"] = "Summit Bank Limited";
    Banks["BANKOFPUNJAB"] = "The Bank of Punjab";
    Banks["NATIONALBANKOFPAKISTAN"] = "National Bank of Pakistan";
    Banks["BANKOFKHYBER"] = "The Bank of Khyber";
    Banks["SINDHBANKLIMITED"] = "Sindh Bank Limited";
    Banks["ZARAI_TARQIATI_BANK_LIMITED"] = "Zarai Tarqiati Bank Limited";
    Banks["UNITED_BANK_LIMITED"] = "United Bank Limited";
    Banks["MCB_BANK_LIMITED"] = "MCB Bank Limited";
    Banks["ALLIED_BANK_LIMITED"] = "Allied Bank limited";
    Banks["HABIB_METROPOLITAN_BANK_LIMITED"] = "Habib Metropolitan Bank Limited";
    Banks["ASKARI_BANK_LIMITED"] = "Askari Bank Limited";
    Banks["SONERI_BANK_LIMITED"] = "Soneri Bank Limited";
    Banks["SILKBANK_LIMITED"] = "Silk Bank Limited";
    Banks["AL_BARAKA_BANK_LIMITED"] = "Al-Baraka Bank (Pakistan) Limited";
    Banks["BANK_ISLAMI_PAKISTAN_LIMITED"] = "Bank Islami Pakistan Limited";
    Banks["MCB_ISLAMIC_BANK_LIMITED"] = "MCB Islamic Bank Limited";
    Banks["DUBAI_ISLAMIC_BANK_PAKISTAN"] = "Dubai Islamic Bank Pakistan";
    Banks["FAYSAL_BANK_LIMITED"] = "Faysal Bank Limited";
    Banks["SAMBA_BANK_LIMITED"] = "Samba Bank Limited";
    Banks["SME_BANK_LIMITED"] = "SME Bank Limited";
    Banks["BANK_OF_CHINA_LIMITED"] = "Bank of China Limited";
    Banks["STANDARD_CHARTERED_BANK_LIMITED"] = "Standard Chartered Bank (Pakistan) Limited";
    Banks["INDUSTRIAL_COMMERCIAL_BANK_OF_CHINA"] = "Industrial & Commercial Bank of China";
    Banks["PUNJAB_PROVINCIAL_COOOPERATIVE_BANK_LIMITED"] = "Punjab Provincial Cooperative Bank Limited";
    Banks["INDUSTRIAL_DEVELOPMENT_BANK_OF_PAKISTAN_LIMITED"] = "Industrial Development Bank of Pakistan Limited";
})(Banks = exports.Banks || (exports.Banks = {}));
var DatasetStatus;
(function (DatasetStatus) {
    DatasetStatus["DRAFT"] = "Draft";
    DatasetStatus["AVAILABLE_FOR_ASSIGNING"] = "Available For Assigning";
    DatasetStatus["AVAILABLE_FOR_DATA_ENTRY"] = "Available For Data Entry";
    DatasetStatus["RESUBMISSION_REQUESTED"] = "Resubmission Requested";
    DatasetStatus["DATA_ENTRY_IN_PROGRESS"] = "Data Entry In Progress";
    DatasetStatus["DATA_ENTRY_COMPLETED"] = "Data Entry Completed";
    DatasetStatus["AVAILABLE_FOR_VERIFICATION"] = "Available For Verification";
    DatasetStatus["VERIFICATION_IN_PROGRESS"] = "Verification In Progress";
    DatasetStatus["VERIFIED"] = "Verified";
    DatasetStatus["NOT_VERIFIED"] = "Not Verified";
})(DatasetStatus = exports.DatasetStatus || (exports.DatasetStatus = {}));
var CallType;
(function (CallType) {
    CallType["INBOUND_CALL"] = "Inbound Call";
    CallType["OUTBOUND_CALL"] = "Outbound Call";
})(CallType = exports.CallType || (exports.CallType = {}));
var UserType;
(function (UserType) {
    UserType["FARMER"] = "Farmer";
    UserType["BUSINESS_ENTITY"] = "Business Entity";
    UserType["COMPANY_AGENT"] = "Agent";
})(UserType = exports.UserType || (exports.UserType = {}));
var RecordState;
(function (RecordState) {
    RecordState["DRAFT"] = "Draft";
    RecordState["PUBLISHED"] = "Published";
    RecordState["RESUBMITTED"] = "Resubmitted";
})(RecordState = exports.RecordState || (exports.RecordState = {}));
var ProductsType;
(function (ProductsType) {
    ProductsType["LIVESTOCK_MEDICINES"] = "Livestock Medicines";
    ProductsType["FERTILIZERS"] = "Fertilizers";
    ProductsType["PESTICIDES"] = "Pesticides";
    ProductsType["MACHINERY"] = "Machinery";
})(ProductsType = exports.ProductsType || (exports.ProductsType = {}));
var CallQueryPurpose;
(function (CallQueryPurpose) {
    CallQueryPurpose["INFORMATION"] = "Information";
    CallQueryPurpose["GUIDANCE"] = "Guidance";
    CallQueryPurpose["ADVICE"] = "Advice";
})(CallQueryPurpose = exports.CallQueryPurpose || (exports.CallQueryPurpose = {}));
var CallQueryStatus;
(function (CallQueryStatus) {
    CallQueryStatus["ADDRESSED"] = "Addressed";
    CallQueryStatus["NOT_ADDRESSED"] = "Not Addressed";
    CallQueryStatus["PENDING"] = "Pending";
    CallQueryStatus["IN_PROGRESS"] = "In Progress";
    CallQueryStatus["FOLLOW_UP_REQUIRED"] = "Follow Up Required";
    CallQueryStatus["CONVERTED_TO_SALES_LEADS"] = "Converted to Sales/Leads";
})(CallQueryStatus = exports.CallQueryStatus || (exports.CallQueryStatus = {}));
var MessageType;
(function (MessageType) {
    MessageType["SENDER"] = "Sender";
    MessageType["RECEIVER"] = "Receiver";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var UserConcern;
(function (UserConcern) {
    UserConcern["SEED_DEMAND_RECOMMENDATIONS"] = "Seed Demand and Recommendations";
    UserConcern["SOIL_WATER_PROBLEM"] = "Soil and Water Problems";
    UserConcern["FERTILIZER_UNAVAILABLE"] = "Fertilizer Availability Issue";
    UserConcern["FINANCE_GOVT_SERVICES"] = "Finance and Government Services";
    UserConcern["DISEASE_PESTICIDE_RECOMMENDATIONS"] = "Insect Disease attack and Pesticides Recommendation";
    UserConcern["FERTILIZER_PLAN"] = "Fertilizer plan for crop";
    UserConcern["NEED_WEATHER_UPDATE"] = "Want update for Weather Forecast";
    UserConcern["PRODUCT_DEMAND"] = "Ask/Demand for our product";
    UserConcern["NEED_LIVESTOCK_INFO"] = "Want information about Livestock";
    UserConcern["GENERAL_CROP_DICUSSION"] = "General Crop Discussion";
    UserConcern["WHATSAPP_GROUP_FARMER_ADD"] = "Add Farmer in Whatsapp Group";
    UserConcern["KM_HELPLINE_INTRODUCTION"] = "KM Helpline Introduction";
    UserConcern["OTHER"] = "Other";
})(UserConcern = exports.UserConcern || (exports.UserConcern = {}));
var QueriesSpecifications;
(function (QueriesSpecifications) {
    QueriesSpecifications["CROP_SPECIFIC"] = "Crop Specific";
    QueriesSpecifications["FARMING_SPECIFIC"] = "Farming Specific";
    QueriesSpecifications["OTHER"] = "Other";
})(QueriesSpecifications = exports.QueriesSpecifications || (exports.QueriesSpecifications = {}));
var QuerySource;
(function (QuerySource) {
    QuerySource["INBOUND_CALL"] = "Inbound Call";
    QuerySource["OUTBOUND_CALL"] = "Outbound Call";
    QuerySource["WHATSAPP"] = "Whatsapp";
    QuerySource["FACEBOOK"] = "Facebook";
})(QuerySource = exports.QuerySource || (exports.QuerySource = {}));
var PotentialLeadCategory;
(function (PotentialLeadCategory) {
    PotentialLeadCategory["FERTILIZER"] = "Fertilizer - Crop Specific";
    PotentialLeadCategory["SEEDS"] = "Seeds - Crop Specific";
    PotentialLeadCategory["INSECTICES"] = "Insecticides & Weedicides - Crop Specific";
    PotentialLeadCategory["FARM_MACHINERY"] = "Farm Machinery - Farming Specific";
    PotentialLeadCategory["ALTERNATE_ENERGY"] = "Alternate Energy/Solar - Farming Specific";
    PotentialLeadCategory["AGRI_INSURANCE"] = "Loan and Agri Insurance - Farming Specific";
    PotentialLeadCategory["LIVESTOCK_SERVICE"] = "Livestock Product/Service - Farming Specific";
    PotentialLeadCategory["OTHER"] = "Other";
})(PotentialLeadCategory = exports.PotentialLeadCategory || (exports.PotentialLeadCategory = {}));
var UserProfilePremiumStatus;
(function (UserProfilePremiumStatus) {
    UserProfilePremiumStatus["PREMIUM"] = "Premium User";
    UserProfilePremiumStatus["GRACE_PERIOD"] = "Grace Period User";
    UserProfilePremiumStatus["DOWNGRADED"] = "Downgraded User";
    UserProfilePremiumStatus["NOT_PREMIUM"] = "Not Premium";
})(UserProfilePremiumStatus = exports.UserProfilePremiumStatus || (exports.UserProfilePremiumStatus = {}));
exports.UserProfileGracePeriod = 15; // in days
/***** Multilingual Enums *****/
// Units
var ACRE;
(function (ACRE) {
    ACRE["en"] = "Acre";
    ACRE["ur"] = "\u0627\u06CC\u06A9\u0691";
})(ACRE = exports.ACRE || (exports.ACRE = {}));
var KANAL;
(function (KANAL) {
    KANAL["en"] = "Kanal";
    KANAL["ur"] = "\u06A9\u0646\u0627\u0644";
})(KANAL = exports.KANAL || (exports.KANAL = {}));
var MURABBA;
(function (MURABBA) {
    MURABBA["en"] = "Murabba";
    MURABBA["ur"] = "\u0645\u0631\u0628\u06C1";
})(MURABBA = exports.MURABBA || (exports.MURABBA = {}));
var BISWA;
(function (BISWA) {
    BISWA["en"] = "Biswa";
    BISWA["ur"] = "\u0628\u0633\u0648\u0627";
})(BISWA = exports.BISWA || (exports.BISWA = {}));
var MARLA;
(function (MARLA) {
    MARLA["en"] = "Marla";
    MARLA["ur"] = "\u0645\u0631\u0644\u06C1";
})(MARLA = exports.MARLA || (exports.MARLA = {}));
var BEGA;
(function (BEGA) {
    BEGA["en"] = "Bega";
    BEGA["ur"] = "\u0628\u06CC\u06AF\u0627";
})(BEGA = exports.BEGA || (exports.BEGA = {}));
var HECTARE;
(function (HECTARE) {
    HECTARE["en"] = "Hectare";
    HECTARE["ur"] = "\u06C1\u06CC\u06A9\u0679\u0631";
})(HECTARE = exports.HECTARE || (exports.HECTARE = {}));
var LAT;
(function (LAT) {
    LAT["en"] = "Lat";
    LAT["ur"] = "\u0644\u0627\u0679";
})(LAT = exports.LAT || (exports.LAT = {}));
var QILA;
(function (QILA) {
    QILA["en"] = "Qila/Killa";
    QILA["ur"] = "\u0642\u0644\u0639\u06C1";
})(QILA = exports.QILA || (exports.QILA = {}));
var ATHAAS;
(function (ATHAAS) {
    ATHAAS["en"] = "Athaas";
    ATHAAS["ur"] = "\u0627\u062A\u06BE\u0627\u0633";
})(ATHAAS = exports.ATHAAS || (exports.ATHAAS = {}));
var JAREB;
(function (JAREB) {
    JAREB["en"] = "Jareb";
    JAREB["ur"] = "\u062C\u0631\u06CC\u0628";
})(JAREB = exports.JAREB || (exports.JAREB = {}));
var GRAM;
(function (GRAM) {
    GRAM["en"] = "g";
    GRAM["ur"] = "\u06AF\u0631\u0627\u0645";
})(GRAM = exports.GRAM || (exports.GRAM = {}));
var KILOGRAM;
(function (KILOGRAM) {
    KILOGRAM["en"] = "kg";
    KILOGRAM["ur"] = "\u06A9\u0644\u0648\u06AF\u0631\u0627\u0645";
})(KILOGRAM = exports.KILOGRAM || (exports.KILOGRAM = {}));
var POUND;
(function (POUND) {
    POUND["en"] = "lbs";
    POUND["ur"] = "\u067E\u0627\u0624\u0646\u0688";
})(POUND = exports.POUND || (exports.POUND = {}));
var METRE;
(function (METRE) {
    METRE["en"] = "m";
    METRE["ur"] = "\u0645\u06CC\u0679\u0631";
})(METRE = exports.METRE || (exports.METRE = {}));
var CENTIMETRE;
(function (CENTIMETRE) {
    CENTIMETRE["en"] = "cm";
    CENTIMETRE["ur"] = "\u0633\u06CC\u0646\u0679\u06CC \u0645\u06CC\u0679\u0631";
})(CENTIMETRE = exports.CENTIMETRE || (exports.CENTIMETRE = {}));
var INCH;
(function (INCH) {
    INCH["en"] = "inch";
    INCH["ur"] = "\u0627\u0646\u0686";
})(INCH = exports.INCH || (exports.INCH = {}));
// Land Ownership
var SELFOWNERSHIP;
(function (SELFOWNERSHIP) {
    SELFOWNERSHIP["en"] = "Self Ownership";
    SELFOWNERSHIP["ur"] = "\u0630\u0627\u062A\u06CC";
})(SELFOWNERSHIP = exports.SELFOWNERSHIP || (exports.SELFOWNERSHIP = {}));
var LEASED;
(function (LEASED) {
    LEASED["en"] = "Leased";
    LEASED["ur"] = "\u0644\u06CC\u0632 \u067E\u0631";
})(LEASED = exports.LEASED || (exports.LEASED = {}));
// Crops Variety Update
var KHARIF;
(function (KHARIF) {
    KHARIF["en"] = "Summer - Kharif Crop";
    KHARIF["ur"] = "\u062E\u0631\u06CC\u0641 \u0641\u0635\u0644";
})(KHARIF = exports.KHARIF || (exports.KHARIF = {}));
var RABI;
(function (RABI) {
    RABI["en"] = "Winter - Rabi Crop";
    RABI["ur"] = "\u0631\u0628\u06CC\u0639 \u0641\u0635\u0644";
})(RABI = exports.RABI || (exports.RABI = {}));
// Crops Variety
var SUMMER;
(function (SUMMER) {
    SUMMER["en"] = "Summer";
    SUMMER["ur"] = "\u0645\u0648\u0633\u0645 \u06AF\u0631\u0645\u0627";
})(SUMMER = exports.SUMMER || (exports.SUMMER = {}));
var WINTER;
(function (WINTER) {
    WINTER["en"] = "Winter";
    WINTER["ur"] = "\u0645\u0648\u0633\u0645 \u0633\u0631\u0645\u0627";
})(WINTER = exports.WINTER || (exports.WINTER = {}));
// Land Types
var IRRIGATED;
(function (IRRIGATED) {
    IRRIGATED["en"] = "Irrigated";
    IRRIGATED["ur"] = "\u0633\u06CC\u0631\u0627\u0628";
})(IRRIGATED = exports.IRRIGATED || (exports.IRRIGATED = {}));
var RAINFED;
(function (RAINFED) {
    RAINFED["en"] = "Rainfed";
    RAINFED["ur"] = "\u0628\u0627\u0631\u0627\u0646\u06CC";
})(RAINFED = exports.RAINFED || (exports.RAINFED = {}));
//Soil Type
var IRRIGATIONMETHOD;
(function (IRRIGATIONMETHOD) {
    IRRIGATIONMETHOD["TUBEWELL"] = "Tube Well";
    IRRIGATIONMETHOD["CANAL"] = "Canal";
    IRRIGATIONMETHOD["RAINFED"] = "Rain Red";
})(IRRIGATIONMETHOD = exports.IRRIGATIONMETHOD || (exports.IRRIGATIONMETHOD = {}));
var SoilType;
(function (SoilType) {
    SoilType["ALLUVIAL"] = "Alluvial";
    SoilType["CALCAREOUS_lOAM"] = "Calcareous-Loam";
    SoilType["SILTY_CLAY_LOAM"] = "Silty-Clay-Loam";
    SoilType["SILT_LOAM"] = "Silt-Loam";
    SoilType["CLAYEY"] = "Clayey";
    SoilType["SANDY"] = "Sandy";
})(SoilType = exports.SoilType || (exports.SoilType = {}));
// Gender
var MALE;
(function (MALE) {
    MALE["en"] = "Male";
    MALE["ur"] = "\u0645\u0631\u062F";
})(MALE = exports.MALE || (exports.MALE = {}));
var FEMALE;
(function (FEMALE) {
    FEMALE["en"] = "Female";
    FEMALE["ur"] = "\u0639\u0648\u0631\u062A";
})(FEMALE = exports.FEMALE || (exports.FEMALE = {}));
