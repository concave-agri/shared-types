export enum HttpVerbs {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum NotificationType {
  CALENDAR = 'Crop Calendar',
  ANNOUNCEMENT = 'Announcement',
}

export enum CalendarNotificationType {
  NOTIFICATION = 'Notification',
  ACTION_ITEM = 'Action Item',
}

export enum CalendarUIOptionType {
  BUTTON = 'Button',
  RADIO_BUTTON = 'Radio Button',
  TEXT_INPUT = 'Text Input',
  CHECKBOX = 'Checkbox',
}

export enum CalendarStatusType {
  DRAFT = 'Draft',
  PUBLISHED = 'Published',
}

export enum knowledgeBaseType {
  VIDEO = 'Video',
  BOOKLET = 'Booklet',
}

export enum Role {
  FC = 'Field Coordinator',
  DES = 'Data Entry Supervisor',
  DEO = 'Data Entry Operator',
  CCM = 'Call Center Manager',
  CSR = 'Customer Support Representative',
  AA = 'Agri Advisor',
  OM = 'Operations Manager',
  CM = 'Cluster Manager',
  AD = 'Administrator',
  SA = 'System Administrator',
  KDA = 'Kissan Dukan Agent',
}

export enum SystemUserType {
  EDITOR_APP = 'Editor App User',
  FC_APP = 'FC App User',
}
export enum FileType {
  EXCEL = 'Excel Document',
  WORD = 'Word Document',
  IMAGE = 'Image',
  PDF = 'PDF Document',
}

export enum MobileNetworks {
  JAZZ = 'Jazz',
  TELENOR = 'Telenor',
  ZONG = 'Zong',
  UFONE = 'Ufone',
  WARID = 'Warid',
  SCO = 'Sco',
}

export enum SalaryDuration {
  CROPWISE = 'Crop Wise',
  ANNUAL = 'Annual',
}

export enum Wallets {
  JAZZCASH = 'JazzCash',
  EASYPAISA = 'EasyPaisa',
  UBLOMNI = 'UBLOmni',
  SADAPAY = 'SadaPay',
  NAYAPAY = 'NayaPay',
  HBLKONNECT = 'HBL Konnect',
}

export enum Banks {
  HABIB_BANK_LIMITED = 'Habib Bank Limited',
  MEEZAN_BANK_LIMITED = 'Meezan Bank Limited',
  BANK_AL_FALAH_LIMITED = 'Bank Al-Falah Limited',
  BANK_AL_HABIB_LIMITED = 'Bank Al-Habib Limited',
  JS_BANK_LIMITED = 'JS Bank Limited',
  SUMMIT_BANK_LIMITED = 'Summit Bank Limited',
  BANKOFPUNJAB = 'The Bank of Punjab',
  NATIONALBANKOFPAKISTAN = 'National Bank of Pakistan',
  BANKOFKHYBER = 'The Bank of Khyber',
  SINDHBANKLIMITED = 'Sindh Bank Limited',
  ZARAI_TARQIATI_BANK_LIMITED = 'Zarai Tarqiati Bank Limited',
  UNITED_BANK_LIMITED = 'United Bank Limited',
  MCB_BANK_LIMITED = 'MCB Bank Limited',
  ALLIED_BANK_LIMITED = 'Allied Bank limited',
  HABIB_METROPOLITAN_BANK_LIMITED = 'Habib Metropolitan Bank Limited',
  ASKARI_BANK_LIMITED = 'Askari Bank Limited',
  SONERI_BANK_LIMITED = 'Soneri Bank Limited',
  SILKBANK_LIMITED = 'Silk Bank Limited',
  AL_BARAKA_BANK_LIMITED = 'Al-Baraka Bank (Pakistan) Limited',
  BANK_ISLAMI_PAKISTAN_LIMITED = 'Bank Islami Pakistan Limited',
  MCB_ISLAMIC_BANK_LIMITED = 'MCB Islamic Bank Limited',
  DUBAI_ISLAMIC_BANK_PAKISTAN = 'Dubai Islamic Bank Pakistan',
  FAYSAL_BANK_LIMITED = 'Faysal Bank Limited',
  SAMBA_BANK_LIMITED = 'Samba Bank Limited',
  SME_BANK_LIMITED = 'SME Bank Limited',
  BANK_OF_CHINA_LIMITED = 'Bank of China Limited',
  STANDARD_CHARTERED_BANK_LIMITED = 'Standard Chartered Bank (Pakistan) Limited',
  INDUSTRIAL_COMMERCIAL_BANK_OF_CHINA = 'Industrial & Commercial Bank of China',
  PUNJAB_PROVINCIAL_COOOPERATIVE_BANK_LIMITED = 'Punjab Provincial Cooperative Bank Limited',
  INDUSTRIAL_DEVELOPMENT_BANK_OF_PAKISTAN_LIMITED = 'Industrial Development Bank of Pakistan Limited',
}

export enum DatasetStatus {
  DRAFT = 'Draft',
  AVAILABLE_FOR_ASSIGNING = 'Available For Assigning',
  AVAILABLE_FOR_DATA_ENTRY = 'Available For Data Entry',
  RESUBMISSION_REQUESTED = 'Resubmission Requested',
  DATA_ENTRY_IN_PROGRESS = 'Data Entry In Progress',
  DATA_ENTRY_COMPLETED = 'Data Entry Completed',
  AVAILABLE_FOR_VERIFICATION = 'Available For Verification',
  VERIFICATION_IN_PROGRESS = 'Verification In Progress',
  VERIFIED = 'Verified',
  NOT_VERIFIED = 'Not Verified',
}

export enum CallType {
  INBOUND_CALL = 'Inbound Call',
  OUTBOUND_CALL = 'Outbound Call',
}

export enum UserType {
  FARMER = 'Farmer',
  BUSINESS_ENTITY = 'Business Entity',
  COMPANY_AGENT = 'Agent',
}

export enum RecordState {
  DRAFT = 'Draft',
  PUBLISHED = 'Published',
  RESUBMITTED = 'Resubmitted',
}

export enum ProductsType {
  LIVESTOCK_MEDICINES = 'Livestock Medicines',
  FERTILIZERS = 'Fertilizers',
  PESTICIDES = 'Pesticides',
  MACHINERY = 'Machinery',
}

export enum CallQueryPurpose {
  INFORMATION = 'Information',
  GUIDANCE = 'Guidance',
  ADVICE = 'Advice',
}

export enum CallQueryStatus {
  ADDRESSED = 'Addressed',
  NOT_ADDRESSED = 'Not Addressed',
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  FOLLOW_UP_REQUIRED = 'Follow Up Required',
  CONVERTED_TO_SALES_LEADS = 'Converted to Sales/Leads',
}

export enum MessageType {
  SENDER = 'Sender',
  RECEIVER = 'Receiver',
}

export enum UserConcern {
  SEED_DEMAND_RECOMMENDATIONS = 'Seed Demand and Recommendations',
  SOIL_WATER_PROBLEM = 'Soil and Water Problems',
  FERTILIZER_UNAVAILABLE = 'Fertilizer Availability Issue',
  FINANCE_GOVT_SERVICES = 'Finance and Government Services',
  DISEASE_PESTICIDE_RECOMMENDATIONS = 'Insect Disease attack and Pesticides Recommendation',
  FERTILIZER_PLAN = 'Fertilizer plan for crop',
  NEED_WEATHER_UPDATE = 'Want update for Weather Forecast',
  PRODUCT_DEMAND = 'Ask/Demand for our product',
  NEED_LIVESTOCK_INFO = 'Want information about Livestock',
  GENERAL_CROP_DICUSSION = 'General Crop Discussion',
  WHATSAPP_GROUP_FARMER_ADD = 'Add Farmer in Whatsapp Group',
  KM_HELPLINE_INTRODUCTION = 'KM Helpline Introduction',
  OTHER = 'Other',
}

export enum QueriesSpecifications {
  CROP_SPECIFIC = 'Crop Specific',
  FARMING_SPECIFIC = 'Farming Specific',
  OTHER = 'Other',
}
export enum QuerySource {
  INBOUND_CALL = 'Inbound Call',
  OUTBOUND_CALL = 'Outbound Call',
  WHATSAPP = 'Whatsapp',
  FACEBOOK = 'Facebook',
}

export enum PotentialLeadCategory {
  FERTILIZER = 'Fertilizer - ' + QueriesSpecifications.CROP_SPECIFIC,
  SEEDS = 'Seeds - ' + QueriesSpecifications.CROP_SPECIFIC,
  INSECTICES = 'Insecticides & Weedicides - ' + QueriesSpecifications.CROP_SPECIFIC,
  FARM_MACHINERY = 'Farm Machinery - ' + QueriesSpecifications.FARMING_SPECIFIC,
  ALTERNATE_ENERGY = 'Alternate Energy/Solar - ' + QueriesSpecifications.FARMING_SPECIFIC,
  AGRI_INSURANCE = 'Loan and Agri Insurance - ' + QueriesSpecifications.FARMING_SPECIFIC,
  LIVESTOCK_SERVICE = 'Livestock Product/Service - ' + QueriesSpecifications.FARMING_SPECIFIC,
  OTHER = QueriesSpecifications.OTHER,
}

export enum UserProfilePremiumStatus {
  PREMIUM = 'Premium User',
  GRACE_PERIOD = 'Grace Period User',
  DOWNGRADED = 'Downgraded User',
  NOT_PREMIUM = 'Not Premium',
}
export const UserProfileGracePeriod = 15; // in days

/***** Multilingual Enums *****/
// Units
export enum ACRE {
  en = 'Acre',
  ur = 'ایکڑ',
}
export enum KANAL {
  en = 'Kanal',
  ur = 'کنال',
}
export enum MURABBA {
  en = 'Murabba',
  ur = 'مربہ',
}
export enum BISWA {
  en = 'Biswa',
  ur = 'بسوا',
}
export enum MARLA {
  en = 'Marla',
  ur = 'مرلہ',
}
export enum BEGA {
  en = 'Bega',
  ur = 'بیگا',
}
export enum HECTARE {
  en = 'Hectare',
  ur = 'ہیکٹر',
}
export enum LAT {
  en = 'Lat',
  ur = 'لاٹ',
}
export enum QILA {
  en = 'Qila/Killa',
  ur = 'قلعہ',
}
export enum ATHAAS {
  en = 'Athaas',
  ur = 'اتھاس',
}
export enum JAREB {
  en = 'Jareb',
  ur = 'جریب',
}
export enum GRAM {
  en = 'g',
  ur = 'گرام',
}
export enum KILOGRAM {
  en = 'kg',
  ur = 'کلوگرام',
}
export enum POUND {
  en = 'lbs',
  ur = 'پاؤنڈ',
}
export enum METRE {
  en = 'm',
  ur = 'میٹر',
}
export enum CENTIMETRE {
  en = 'cm',
  ur = 'سینٹی میٹر',
}
export enum INCH {
  en = 'inch',
  ur = 'انچ',
}

// Land Ownership
export enum SELFOWNERSHIP {
  en = 'Self Ownership',
  ur = 'ذاتی',
}
export enum LEASED {
  en = 'Leased',
  ur = 'لیز پر',
}

// Crops Variety Update
export enum KHARIF {
  en = 'Summer - Kharif Crop',
  ur = 'خریف فصل',
}
export enum RABI {
  en = 'Winter - Rabi Crop',
  ur = 'ربیع فصل',
}

// Crops Variety
export enum SUMMER {
  en = 'Summer',
  ur = 'موسم گرما',
}
export enum WINTER {
  en = 'Winter',
  ur = 'موسم سرما',
}

// Land Types
export enum IRRIGATED {
  en = 'Irrigated',
  ur = 'سیراب',
}
export enum RAINFED {
  en = 'Rainfed',
  ur = 'بارانی',
}

//Soil Type
export enum IRRIGATIONMETHOD {
  TUBEWELL = 'Tube Well',
  CANAL = 'Canal',
  RAINFED = 'Rain Red',
}

export enum SoilType {
  ALLUVIAL = 'Alluvial',
  CALCAREOUS_lOAM = 'Calcareous-Loam',
  SILTY_CLAY_LOAM = 'Silty-Clay-Loam',
  SILT_LOAM = 'Silt-Loam',
  CLAYEY = 'Clayey',
  SANDY = 'Sandy',
}

// Gender
export enum MALE {
  en = 'Male',
  ur = 'مرد',
}
export enum FEMALE {
  en = 'Female',
  ur = 'عورت',
}
