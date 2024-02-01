export declare enum HttpVerbs {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export declare enum NotificationType {
    CALENDAR = "Crop Calendar",
    ANNOUNCEMENT = "Announcement"
}
export declare enum CalendarNotificationType {
    NOTIFICATION = "Notification",
    ACTION_ITEM = "Action Item"
}
export declare enum CalendarUIOptionType {
    BUTTON = "Button",
    RADIO_BUTTON = "Radio Button",
    TEXT_INPUT = "Text Input",
    CHECKBOX = "Checkbox"
}
export declare enum CalendarStatusType {
    DRAFT = "Draft",
    PUBLISHED = "Published"
}
export declare enum knowledgeBaseType {
    VIDEO = "Video",
    BOOKLET = "Booklet"
}
export declare enum Role {
    FC = "Field Coordinator",
    DES = "Data Entry Supervisor",
    DEO = "Data Entry Operator",
    CCM = "Call Center Manager",
    CSR = "Customer Support Representative",
    AA = "Agri Advisor",
    OM = "Operations Manager",
    CM = "Cluster Manager",
    AD = "Administrator",
    SA = "System Administrator",
    KDA = "Kissan Dukan Agent"
}
export declare enum SystemUserType {
    EDITOR_APP = "Editor App User",
    FC_APP = "FC App User"
}
export declare enum FileType {
    EXCEL = "Excel Document",
    WORD = "Word Document",
    IMAGE = "Image",
    PDF = "PDF Document"
}
export declare enum MobileNetworks {
    JAZZ = "Jazz",
    TELENOR = "Telenor",
    ZONG = "Zong",
    UFONE = "Ufone",
    WARID = "Warid",
    SCO = "Sco"
}
export declare enum SalaryDuration {
    CROPWISE = "Crop Wise",
    ANNUAL = "Annual"
}
export declare enum Wallets {
    JAZZCASH = "JazzCash",
    EASYPAISA = "EasyPaisa",
    UBLOMNI = "UBLOmni",
    SADAPAY = "SadaPay",
    NAYAPAY = "NayaPay",
    HBLKONNECT = "HBL Konnect"
}
export declare enum Banks {
    HABIB_BANK_LIMITED = "Habib Bank Limited",
    MEEZAN_BANK_LIMITED = "Meezan Bank Limited",
    BANK_AL_FALAH_LIMITED = "Bank Al-Falah Limited",
    BANK_AL_HABIB_LIMITED = "Bank Al-Habib Limited",
    JS_BANK_LIMITED = "JS Bank Limited",
    SUMMIT_BANK_LIMITED = "Summit Bank Limited",
    BANKOFPUNJAB = "The Bank of Punjab",
    NATIONALBANKOFPAKISTAN = "National Bank of Pakistan",
    BANKOFKHYBER = "The Bank of Khyber",
    SINDHBANKLIMITED = "Sindh Bank Limited",
    ZARAI_TARQIATI_BANK_LIMITED = "Zarai Tarqiati Bank Limited",
    UNITED_BANK_LIMITED = "United Bank Limited",
    MCB_BANK_LIMITED = "MCB Bank Limited",
    ALLIED_BANK_LIMITED = "Allied Bank limited",
    HABIB_METROPOLITAN_BANK_LIMITED = "Habib Metropolitan Bank Limited",
    ASKARI_BANK_LIMITED = "Askari Bank Limited",
    SONERI_BANK_LIMITED = "Soneri Bank Limited",
    SILKBANK_LIMITED = "Silk Bank Limited",
    AL_BARAKA_BANK_LIMITED = "Al-Baraka Bank (Pakistan) Limited",
    BANK_ISLAMI_PAKISTAN_LIMITED = "Bank Islami Pakistan Limited",
    MCB_ISLAMIC_BANK_LIMITED = "MCB Islamic Bank Limited",
    DUBAI_ISLAMIC_BANK_PAKISTAN = "Dubai Islamic Bank Pakistan",
    FAYSAL_BANK_LIMITED = "Faysal Bank Limited",
    SAMBA_BANK_LIMITED = "Samba Bank Limited",
    SME_BANK_LIMITED = "SME Bank Limited",
    BANK_OF_CHINA_LIMITED = "Bank of China Limited",
    STANDARD_CHARTERED_BANK_LIMITED = "Standard Chartered Bank (Pakistan) Limited",
    INDUSTRIAL_COMMERCIAL_BANK_OF_CHINA = "Industrial & Commercial Bank of China",
    PUNJAB_PROVINCIAL_COOOPERATIVE_BANK_LIMITED = "Punjab Provincial Cooperative Bank Limited",
    INDUSTRIAL_DEVELOPMENT_BANK_OF_PAKISTAN_LIMITED = "Industrial Development Bank of Pakistan Limited"
}
export declare enum DatasetStatus {
    DRAFT = "Draft",
    AVAILABLE_FOR_ASSIGNING = "Available For Assigning",
    AVAILABLE_FOR_DATA_ENTRY = "Available For Data Entry",
    RESUBMISSION_REQUESTED = "Resubmission Requested",
    DATA_ENTRY_IN_PROGRESS = "Data Entry In Progress",
    DATA_ENTRY_COMPLETED = "Data Entry Completed",
    AVAILABLE_FOR_VERIFICATION = "Available For Verification",
    VERIFICATION_IN_PROGRESS = "Verification In Progress",
    VERIFIED = "Verified",
    NOT_VERIFIED = "Not Verified"
}
export declare enum CallType {
    INBOUND_CALL = "Inbound Call",
    OUTBOUND_CALL = "Outbound Call"
}
export declare enum UserType {
    FARMER = "Farmer",
    BUSINESS_ENTITY = "Business Entity",
    COMPANY_AGENT = "Agent"
}
export declare enum RecordState {
    DRAFT = "Draft",
    PUBLISHED = "Published",
    RESUBMITTED = "Resubmitted"
}
export declare enum ProductsType {
    LIVESTOCK_MEDICINES = "Livestock Medicines",
    FERTILIZERS = "Fertilizers",
    PESTICIDES = "Pesticides",
    MACHINERY = "Machinery"
}
export declare enum CallQueryPurpose {
    INFORMATION = "Information",
    GUIDANCE = "Guidance",
    ADVICE = "Advice"
}
export declare enum CallQueryStatus {
    ADDRESSED = "Addressed",
    NOT_ADDRESSED = "Not Addressed",
    PENDING = "Pending",
    IN_PROGRESS = "In Progress",
    FOLLOW_UP_REQUIRED = "Follow Up Required",
    CONVERTED_TO_SALES_LEADS = "Converted to Sales/Leads"
}
export declare enum MessageType {
    SENDER = "Sender",
    RECEIVER = "Receiver"
}
export declare enum UserConcern {
    SEED_DEMAND_RECOMMENDATIONS = "Seed Demand and Recommendations",
    SOIL_WATER_PROBLEM = "Soil and Water Problems",
    FERTILIZER_UNAVAILABLE = "Fertilizer Availability Issue",
    FINANCE_GOVT_SERVICES = "Finance and Government Services",
    DISEASE_PESTICIDE_RECOMMENDATIONS = "Insect Disease attack and Pesticides Recommendation",
    FERTILIZER_PLAN = "Fertilizer plan for crop",
    NEED_WEATHER_UPDATE = "Want update for Weather Forecast",
    PRODUCT_DEMAND = "Ask/Demand for our product",
    NEED_LIVESTOCK_INFO = "Want information about Livestock",
    GENERAL_CROP_DICUSSION = "General Crop Discussion",
    WHATSAPP_GROUP_FARMER_ADD = "Add Farmer in Whatsapp Group",
    KM_HELPLINE_INTRODUCTION = "KM Helpline Introduction",
    OTHER = "Other"
}
export declare enum QueriesSpecifications {
    CROP_SPECIFIC = "Crop Specific",
    FARMING_SPECIFIC = "Farming Specific",
    OTHER = "Other"
}
export declare enum QuerySource {
    INBOUND_CALL = "Inbound Call",
    OUTBOUND_CALL = "Outbound Call",
    WHATSAPP = "Whatsapp",
    FACEBOOK = "Facebook"
}
export declare enum PotentialLeadCategory {
    FERTILIZER = "Fertilizer - Crop Specific",
    SEEDS = "Seeds - Crop Specific",
    INSECTICES = "Insecticides & Weedicides - Crop Specific",
    FARM_MACHINERY = "Farm Machinery - Farming Specific",
    ALTERNATE_ENERGY = "Alternate Energy/Solar - Farming Specific",
    AGRI_INSURANCE = "Loan and Agri Insurance - Farming Specific",
    LIVESTOCK_SERVICE = "Livestock Product/Service - Farming Specific",
    OTHER = "Other"
}
export declare enum UserProfilePremiumStatus {
    PREMIUM = "Premium User",
    GRACE_PERIOD = "Grace Period User",
    DOWNGRADED = "Downgraded User",
    NOT_PREMIUM = "Not Premium"
}
export declare const UserProfileGracePeriod = 15;
/***** Multilingual Enums *****/
export declare enum ACRE {
    en = "Acre",
    ur = "\u0627\u06CC\u06A9\u0691"
}
export declare enum KANAL {
    en = "Kanal",
    ur = "\u06A9\u0646\u0627\u0644"
}
export declare enum MURABBA {
    en = "Murabba",
    ur = "\u0645\u0631\u0628\u06C1"
}
export declare enum BISWA {
    en = "Biswa",
    ur = "\u0628\u0633\u0648\u0627"
}
export declare enum MARLA {
    en = "Marla",
    ur = "\u0645\u0631\u0644\u06C1"
}
export declare enum BEGA {
    en = "Bega",
    ur = "\u0628\u06CC\u06AF\u0627"
}
export declare enum HECTARE {
    en = "Hectare",
    ur = "\u06C1\u06CC\u06A9\u0679\u0631"
}
export declare enum LAT {
    en = "Lat",
    ur = "\u0644\u0627\u0679"
}
export declare enum QILA {
    en = "Qila/Killa",
    ur = "\u0642\u0644\u0639\u06C1"
}
export declare enum ATHAAS {
    en = "Athaas",
    ur = "\u0627\u062A\u06BE\u0627\u0633"
}
export declare enum JAREB {
    en = "Jareb",
    ur = "\u062C\u0631\u06CC\u0628"
}
export declare enum GRAM {
    en = "g",
    ur = "\u06AF\u0631\u0627\u0645"
}
export declare enum KILOGRAM {
    en = "kg",
    ur = "\u06A9\u0644\u0648\u06AF\u0631\u0627\u0645"
}
export declare enum POUND {
    en = "lbs",
    ur = "\u067E\u0627\u0624\u0646\u0688"
}
export declare enum METRE {
    en = "m",
    ur = "\u0645\u06CC\u0679\u0631"
}
export declare enum CENTIMETRE {
    en = "cm",
    ur = "\u0633\u06CC\u0646\u0679\u06CC \u0645\u06CC\u0679\u0631"
}
export declare enum INCH {
    en = "inch",
    ur = "\u0627\u0646\u0686"
}
export declare enum SELFOWNERSHIP {
    en = "Self Ownership",
    ur = "\u0630\u0627\u062A\u06CC"
}
export declare enum LEASED {
    en = "Leased",
    ur = "\u0644\u06CC\u0632 \u067E\u0631"
}
export declare enum KHARIF {
    en = "Summer - Kharif Crop",
    ur = "\u062E\u0631\u06CC\u0641 \u0641\u0635\u0644"
}
export declare enum RABI {
    en = "Winter - Rabi Crop",
    ur = "\u0631\u0628\u06CC\u0639 \u0641\u0635\u0644"
}
export declare enum SUMMER {
    en = "Summer",
    ur = "\u0645\u0648\u0633\u0645 \u06AF\u0631\u0645\u0627"
}
export declare enum WINTER {
    en = "Winter",
    ur = "\u0645\u0648\u0633\u0645 \u0633\u0631\u0645\u0627"
}
export declare enum IRRIGATED {
    en = "Irrigated",
    ur = "\u0633\u06CC\u0631\u0627\u0628"
}
export declare enum RAINFED {
    en = "Rainfed",
    ur = "\u0628\u0627\u0631\u0627\u0646\u06CC"
}
export declare enum IRRIGATIONMETHOD {
    TUBEWELL = "Tube Well",
    CANAL = "Canal",
    RAINFED = "Rain Red"
}
export declare enum SoilType {
    ALLUVIAL = "Alluvial",
    CALCAREOUS_lOAM = "Calcareous-Loam",
    SILTY_CLAY_LOAM = "Silty-Clay-Loam",
    SILT_LOAM = "Silt-Loam",
    CLAYEY = "Clayey",
    SANDY = "Sandy"
}
export declare enum MALE {
    en = "Male",
    ur = "\u0645\u0631\u062F"
}
export declare enum FEMALE {
    en = "Female",
    ur = "\u0639\u0648\u0631\u062A"
}
