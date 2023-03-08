import {
  ACRE,
  ATHAAS,
  BEGA,
  BISWA,
  CENTIMETRE,
  FEMALE,
  GRAM,
  HECTARE,
  INCH,
  IRRIGATED,
  JAREB,
  KANAL,
  KHARIF,
  KILOGRAM,
  LAT,
  LEASED,
  MALE,
  MARLA,
  METRE,
  MURABBA,
  POUND,
  QILA,
  RABI,
  RAINFED,
  SELFOWNERSHIP,
  SUMMER,
  WINTER,
} from './enums';
import { IMultiLang } from './interfaces';

export const Ownerships: {
  SELFOWNERSHIP: IMultiLang;
  LEASED: IMultiLang;
} = Object.freeze({
  SELFOWNERSHIP,
  LEASED,
});

export const LandUnits: {
  ACRE: IMultiLang;
  KANAL: IMultiLang;
  MURABBA: IMultiLang;
  MARLA: IMultiLang;
  BEGA: IMultiLang;
  HECTARE: IMultiLang;
  LAT: IMultiLang;
  QILA: IMultiLang;
  BISWA: IMultiLang;
  ATHAAS: IMultiLang;
  JAREB: IMultiLang;
} = Object.freeze({
  ACRE,
  KANAL,
  MURABBA,
  MARLA,
  BEGA,
  HECTARE,
  LAT,
  QILA,
  BISWA,
  ATHAAS,
  JAREB,
});

export const CalendarLandType: { IRRIGATED: IMultiLang; RAINFED: IMultiLang } = Object.freeze({
  IRRIGATED,
  RAINFED,
});

export const MeasurementUnits: {
  GRAM: IMultiLang;
  KILOGRAM: IMultiLang;
  POUND: IMultiLang;
  METRE: IMultiLang;
  CENTIMETRE: IMultiLang;
  INCH: IMultiLang;
} = Object.freeze({
  GRAM,
  KILOGRAM,
  POUND,
  METRE,
  CENTIMETRE,
  INCH,
});

export const CropsVarietyUpdate: {
  KHARIF: IMultiLang;
  RABI: IMultiLang;
} = Object.freeze({
  KHARIF,
  RABI,
});

export const CropsVariety: {
  SUMMER: IMultiLang;
  WINTER: IMultiLang;
} = Object.freeze({
  SUMMER,
  WINTER,
});

export const Genders: { MALE: IMultiLang; FEMALE: IMultiLang } = Object.freeze({
  MALE,
  FEMALE,
});
