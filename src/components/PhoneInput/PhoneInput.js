import React, { useState } from "react";
import PropTypes from "prop-types";
import DropDown from "./DropDown";
import { StyledPhoneInput } from "./StyledPhoneInput";
import Box from "../Box";
import Text from "../Text";

const PhoneInput = (props) => {

  const options = [{
    name: "Afghanistan (‫افغانستان‬‎)",
    dialCode: "+93",
    code: "AF",
    mask: []
  },
  {
    name: "Albania (Shqipëria)",
    dialCode: "+355",
    code: "AL",
    mask: []
  },
  {
    name: "Algeria (‫الجزائر‬‎)",
    dialCode: "+213",
    code: "DZ",
    mask: []
  },
  {
    name: "American Samoa (American Samoa)",
    dialCode: "+1684",
    code: "AS",
    mask: []
  },
  {
    name: "Andorra (Andorra)",
    dialCode: "+376",
    code: "AD",
    mask: []
  },
  {
    name: "Angola (Angola)",
    dialCode: "+244",
    code: "AO",
    mask: []
  },
  {
    name: "Anguilla (Anguilla)",
    dialCode: "+1264",
    code: "AI",
    mask: []
  },
  {
    name: "Antarctica",
    dialCode: "+672",
    code: "AQ",
    mask: []
  },
  {
    name: "Antigua and Barbuda (Antigua and Barbuda)",
    dialCode: "+1268",
    code: "AG",
    mask: []
  },
  {
    name: "Argentina (Argentina)",
    dialCode: "+54",
    code: "AR",
    mask: [/\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  {
    name: "Armenia (Հայաստանի Հանրապետություն)",
    dialCode: "+374",
    code: "AM",
    mask: []
  },
  {
    name: "Aruba (Aruba)",
    dialCode: "+297",
    code: "AW",
    mask: []
  },
  {
    name: "Australia (Australia)",
    dialCode: "+61",
    code: "AU",
    mask: [/\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]
  },
  {
    name: "Austria (Österreich)",
    dialCode: "+43",
    code: "AT",
    mask: []
  },
  {
    name: "Azerbaijan (Azərbaycan)",
    dialCode: "+994",
    code: "AZ",
    mask: []
  },
  {
    name: "Bahamas (Bahamas)",
    dialCode: "+1242",
    code: "BS",
    mask: []
  },
  {
    name: "Bahrain (‫البحرين‬‎)",
    dialCode: "+973",
    code: "BH",
    mask: []
  },
  {
    name: "Bangladesh (বাংলাদেশ)",
    dialCode: "+880",
    code: "BD",
    mask: []
  },
  {
    name: "Barbados (Barbados)",
    dialCode: "+1246",
    code: "BB",
    mask: []
  },
  {
    name: "Belarus (Беларусь)",
    dialCode: "+375",
    code: "BY",
    mask: [/\d/, /\d/, " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]
  },
  {
    name: "Belgium (België)",
    dialCode: "+32",
    code: "BE",
    mask: [/\d/, /\d/, /\d/, " ", /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]
  },
  {
    name: "Belize (Belize)",
    dialCode: "+501",
    code: "BZ",
    mask: []
  },
  {
    name: "Benin (Bénin)",
    dialCode: "+229",
    code: "BJ",
    mask: []
  },
  {
    name: "Bermuda (Bermuda)",
    dialCode: "+1441",
    code: "BM",
    mask: []
  },
  {
    name: "Bhutan (འབྲུག)",
    dialCode: "+975",
    code: "BT",
    mask: []
  },
  {
    name: "Bolivia (Bolivia)",
    dialCode: "+591",
    code: "BO",
    mask: []
  },
  {
    name: "Bosnia and Herzegovina (Bosna i Hercegovina)",
    dialCode: "+387",
    code: "BA",
    mask: []
  },
  {
    name: "Botswana (Botswana)",
    dialCode: "+267",
    code: "BW",
    mask: []
  },
  {
    name: "Brazil (Brasil)",
    dialCode: "+55",
    code: "BR",
    mask: [/\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  {
    name: "British Indian Ocean Territory (British Indian Ocean Territory)",
    dialCode: "+246",
    code: "IO",
    mask: []
  },
  {
    name: "Brunei Darussalam (Brunei)",
    dialCode: "+673",
    code: "BN",
    mask: []
  },
  {
    name: "Bulgaria (България)",
    dialCode: "+359",
    code: "BG",
    mask: []
  },
  {
    name: "Burkina Faso (Burkina Faso)",
    dialCode: "+226",
    code: "BF",
    mask: []
  },
  {
    name: "Burundi (Uburundi)",
    dialCode: "+257",
    code: "BI",
    mask: []
  },
  {
    name: "Cambodia (កម្ពុជា)",
    dialCode: "+855",
    code: "KH",
    mask: []
  },
  {
    name: "Cameroon (Cameroun)",
    dialCode: "+237",
    code: "CM",
    mask: []
  },
  {
    name: "Canada (Canada)",
    dialCode: "+1",
    code: "CA",
    mask: [/\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]
  },
  {
    name: "Cape Verde (Kabu Verdi)",
    dialCode: "+238",
    code: "CV",
    mask: []
  },
  {
    name: "Cayman Islands (Cayman Islands)",
    dialCode: "+1345",
    code: "KY",
    mask: []
  },
  {
    name: "Central African Republic (République centrafricaine)",
    dialCode: "+236",
    code: "CF",
    mask: []
  },
  {
    name: "Chad (Tchad)",
    dialCode: "+235",
    code: "TD",
    mask: []
  },
  {
    name: "Chile (Chile)",
    dialCode: "+56",
    code: "CL",
    mask: []
  },
  {
    name: "China (中国)",
    dialCode: "+86",
    code: "CN",
    mask: [/\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  {
    name: "Christmas Island",
    dialCode: "+61",
    code: "CX",
    mask: []
  },
  {
    name: "Cocos (Keeling) Islands",
    dialCode: "+61",
    code: "CC",
    mask: []
  },
  {
    name: "Colombia (Colombia)",
    dialCode: "+57",
    code: "CO",
    mask: []
  },
  {
    name: "Comoros (‫جزر القمر‬‎)",
    dialCode: "+269",
    code: "KM",
    mask: []
  },
  {
    name: "Congo-Brazzaville (Congo-Brazzaville)",
    dialCode: "+242",
    code: "CG",
    mask: []
  },
  {
    name: "Congo-Kinshasa (Congo-Kinshasa)",
    dialCode: "+243",
    code: "CD",
    mask: []
  },
  {
    name: "Cook Islands (Cook Islands)",
    dialCode: "+682",
    code: "CK",
    mask: []
  },
  {
    name: "Costa Rica (Costa Rica)",
    dialCode: "+506",
    code: "CR",
    mask: [/\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]
  },
  {
    name: "Croatia (Hrvatska)",
    dialCode: "+385",
    code: "HR",
    mask: []
  },
  {
    name: "Cuba (Cuba)",
    dialCode: "+53",
    code: "CU",
    mask: []
  },
  {
    name: "Cyprus (Κύπρος)",
    dialCode: "+357",
    code: "CY",
    mask: []
  },
  {
    name: "Czech Republic (Česká republika)",
    dialCode: "+420",
    code: "CZ",
    mask: []
  },
  {
    name: "Denmark (Danmark)",
    dialCode: "+45",
    code: "DK",
    mask: []
  },
  {
    name: "Djibouti (Djibouti)",
    dialCode: "+253",
    code: "DJ",
    mask: []
  },
  {
    name: "Dominica (Dominica)",
    dialCode: "+1767",
    code: "DM",
    mask: []
  },
  {
    name: "Dominican Republic (República Dominicana)",
    dialCode: "+1849",
    code: "DO",
    mask: []
  },
  {
    name: "Ecuador (Ecuador)",
    dialCode: "+593",
    code: "EC",
    mask: []
  },
  {
    name: "Egypt (‫مصر‬‎)",
    dialCode: "+20",
    code: "EG",
    mask: []
  },
  {
    name: "El Salvador (El Salvador)",
    dialCode: "+503",
    code: "SV",
    mask: []
  },
  {
    name: "Equatorial Guinea (Guinea Ecuatorial)",
    dialCode: "+240",
    code: "GQ",
    mask: []
  },
  {
    name: "Eritrea (Eritrea)",
    dialCode: "+291",
    code: "ER",
    mask: []
  },
  {
    name: "Estonia (Eesti)",
    dialCode: "+372",
    code: "EE",
    mask: []
  },
  {
    name: "Ethiopia (Ethiopia)",
    dialCode: "+251",
    code: "ET",
    mask: []
  },
  {
    name: "Falkland Islands (Malvinas)",
    dialCode: "+500",
    code: "FK",
    mask: []
  },
  {
    name: "Faroe Islands (Føroyar)",
    dialCode: "+298",
    code: "FO",
    mask: []
  },
  {
    name: "Fiji (Fiji)",
    dialCode: "+679",
    code: "FJ",
    mask: []
  },
  {
    name: "Finland (Suomi)",
    dialCode: "+358",
    code: "FI",
    mask: []
  },
  {
    name: "France (France)",
    dialCode: "+33",
    code: "FR",
    mask: []
  },
  {
    name: "French Guiana (Guyane française)",
    dialCode: "+594",
    code: "GF",
    mask: []
  },
  {
    name: "French Polynesia (Polynésie française)",
    dialCode: "+689",
    code: "PF",
    mask: []
  },
  {
    name: "Gabon (Gabon)",
    dialCode: "+241",
    code: "GA",
    mask: []
  },
  {
    name: "Gambia (Gambia)",
    dialCode: "+220",
    code: "GM",
    mask: []
  },
  {
    name: "Georgia (საქართველო)",
    dialCode: "+995",
    code: "GE",
    mask: []
  },
  {
    name: "Germany (Deutschland)",
    dialCode: "+49",
    code: "DE",
    mask: []
  },
  {
    name: "Ghana (Gaana)",
    dialCode: "+233",
    code: "GH",
    mask: []
  },
  {
    name: "Gibraltar (Gibraltar)",
    dialCode: "+350",
    code: "GI",
    mask: []
  },
  {
    name: "Greece (Ελλάδα)",
    dialCode: "+30",
    code: "GR",
    mask: []
  },
  {
    name: "Greenland (Greenland)",
    dialCode: "+299",
    code: "GL",
    mask: []
  },
  {
    name: "Grenada (Grenada)",
    dialCode: "+1473",
    code: "GD",
    mask: []
  },
  {
    name: "Guadeloupe (Guadeloupe)",
    dialCode: "+590",
    code: "GP",
    mask: []
  },
  {
    name: "Guam (Guam)",
    dialCode: "+1671",
    code: "GU",
    mask: []
  },
  {
    name: "Guatemala (Guatemala)",
    dialCode: "+502",
    code: "GT",
    mask: []
  },
  {
    name: "Guernsey",
    dialCode: "+44",
    code: "GG",
    mask: []
  },
  {
    name: "Guinea (Guinée)",
    dialCode: "+224",
    code: "GN",
    mask: []
  },
  {
    name: "Guinea-Bissau (Guiné Bissau)",
    dialCode: "+245",
    code: "GW",
    mask: []
  },
  {
    name: "Guyana (Guyana)",
    dialCode: "+592",
    code: "GY",
    mask: []
  },
  {
    name: "Haiti (Haiti)",
    dialCode: "+509",
    code: "HT",
    mask: []
  },
  {
    name: "Honduras (Honduras)",
    dialCode: "+504",
    code: "HN",
    mask: []
  },
  {
    name: "Hong Kong (香港)",
    dialCode: "+852",
    code: "HK",
    mask: []
  },
  {
    name: "Hungary (Magyarország)",
    dialCode: "+36",
    code: "HU",
    mask: []
  },
  {
    name: "Iceland (Ísland)",
    dialCode: "+354",
    code: "IS",
    mask: []
  },
  {
    name: "India (भारत)",
    dialCode: "+91",
    code: "IN",
    mask: []
  },
  {
    name: "Indonesia (Indonesia)",
    dialCode: "+62",
    code: "ID",
    mask: []
  },
  {
    name: "Iran (‫ایران‬‎)",
    dialCode: "+98",
    code: "IR",
    mask: []
  },
  {
    name: "Iraq (‫العراق‬‎)",
    dialCode: "+964",
    code: "IQ",
    mask: []
  },
  {
    name: "Ireland (Ireland)",
    dialCode: "+353",
    code: "IE",
    mask: []
  },
  {
    name: "Isle of Man",
    dialCode: "+44",
    code: "IM",
    mask: []
  },
  {
    name: "Israel (‫ישראל‬‎)",
    dialCode: "+972",
    code: "IL",
    mask: []
  },
  {
    name: "Italy (Italia)",
    dialCode: "+39",
    code: "IT",
    mask: []
  },
  {
    name: "Ivory Coast (Côte d’Ivoire)",
    dialCode: "+225",
    code: "CI",
    mask: []
  },
  {
    name: "Jamaica (Jamaica)",
    dialCode: "+1876",
    code: "JM",
    mask: []
  },
  {
    name: "Japan (日本)",
    dialCode: "+81",
    code: "JP",
    mask: []
  },
  {
    name: "Jersey",
    dialCode: "+44",
    code: "JE",
    mask: []
  },
  {
    name: "Jordan (‫الأردن‬‎)",
    dialCode: "+962",
    code: "JO",
    mask: []
  },
  {
    name: "Kazakhstan (Казахстан)",
    dialCode: "+7",
    code: "KZ",
    mask: []
  },
  {
    name: "Kenya (Kenya)",
    dialCode: "+254",
    code: "KE",
    mask: []
  },
  {
    name: "Kiribati (Kiribati)",
    dialCode: "+686",
    code: "KI",
    mask: []
  },
  {
    name: "Kuwait (‫الكويت‬‎)",
    dialCode: "+965",
    code: "KW",
    mask: []
  },
  {
    name: "Kyrgyzstan (Kyrgyzstan)",
    dialCode: "+996",
    code: "KG",
    mask: []
  },
  {
    name: "Laos (ສ.ປ.ປ ລາວ)",
    dialCode: "+856",
    code: "LA",
    mask: []
  },
  {
    name: "Latvia (Latvija)",
    dialCode: "+371",
    code: "LV",
    mask: []
  },
  {
    name: "Lebanon (‫لبنان‬‎)",
    dialCode: "+961",
    code: "LB",
    mask: []
  },
  {
    name: "Lesotho (Lesotho)",
    dialCode: "+266",
    code: "LS",
    mask: []
  },
  {
    name: "Liberia (Liberia)",
    dialCode: "+231",
    code: "LR",
    mask: []
  },
  {
    name: "Libya (‫ليبيا‬‎)",
    dialCode: "+218",
    code: "LY",
    mask: []
  },
  {
    name: "Liechtenstein (Liechtenstein)",
    dialCode: "+423",
    code: "LI",
    mask: []
  },
  {
    name: "Lithuania (Lietuva)",
    dialCode: "+370",
    code: "LT",
    mask: []
  },
  {
    name: "Luxembourg (Luxembourg)",
    dialCode: "+352",
    code: "LU",
    mask: []
  },
  {
    name: "Macao (澳門)",
    dialCode: "+853",
    code: "MO",
    mask: []
  },
  {
    name: "Macedonia (Македонија)",
    dialCode: "+389",
    code: "MK",
    mask: []
  },
  {
    name: "Madagascar (Madagasikara)",
    dialCode: "+261",
    code: "MG",
    mask: []
  },
  {
    name: "Malawi (Malawi)",
    dialCode: "+265",
    code: "MW",
    mask: []
  },
  {
    name: "Malaysia (Malaysia)",
    dialCode: "+60",
    code: "MY",
    mask: []
  },
  {
    name: "Maldives (Maldives)",
    dialCode: "+960",
    code: "MV",
    mask: []
  },
  {
    name: "Mali (Mali)",
    dialCode: "+223",
    code: "ML",
    mask: []
  },
  {
    name: "Malta (Malta)",
    dialCode: "+356",
    code: "MT",
    mask: []
  },
  {
    name: "Marshall Islands (Marshall Islands)",
    dialCode: "+692",
    code: "MH",
    mask: []
  },
  {
    name: "Martinique (Martinique)",
    dialCode: "+596",
    code: "MQ",
    mask: []
  },
  {
    name: "Mauritania (‫موريتانيا‬‎)",
    dialCode: "+222",
    code: "MR",
    mask: []
  },
  {
    name: "Mauritius (Moris)",
    dialCode: "+230",
    code: "MU",
    mask: []
  },
  {
    name: "Mayotte",
    dialCode: "+262",
    code: "YT",
    mask: []
  },
  {
    name: "Mexico (México)",
    dialCode: "+52",
    code: "MX",
    mask: []
  },
  {
    name: "Micronesia (Micronesia)",
    dialCode: "+691",
    code: "FM",
    mask: []
  },
  {
    name: "Moldova (Republica Moldova)",
    dialCode: "+373",
    code: "MD",
    mask: []
  },
  {
    name: "Monaco (Monaco)",
    dialCode: "+377",
    code: "MC",
    mask: []
  },
  {
    name: "Mongolia (Mongolia)",
    dialCode: "+976",
    code: "MN",
    mask: []
  },
  {
    name: "Montenegro (Crna Gora)",
    dialCode: "+382",
    code: "ME",
    mask: []
  },
  {
    name: "Montserrat (Montserrat)",
    dialCode: "+1664",
    code: "MS",
    mask: []
  },
  {
    name: "Morocco (‫المغرب‬‎)",
    dialCode: "+212",
    code: "MA",
    mask: []
  },
  {
    name: "Mozambique (Moçambique)",
    dialCode: "+258",
    code: "MZ",
    mask: []
  },
  {
    name: "Myanmar [Burma] (မြန်မာ)",
    dialCode: "+95",
    code: "MM",
    mask: []
  },
  {
    name: "Namibia (Namibia)",
    dialCode: "+264",
    code: "NA",
    mask: []
  },
  {
    name: "Nauru (Nauru)",
    dialCode: "+674",
    code: "NR",
    mask: []
  },
  {
    name: "Nepal (नेपाल)",
    dialCode: "+977",
    code: "NP",
    mask: []
  },
  {
    name: "Netherlands (Nederland)",
    dialCode: "+31",
    code: "NL",
    mask: []
  },
  {
    name: "Netherlands Antilles",
    dialCode: "+599",
    code: "AN",
    mask: []
  },
  {
    name: "New Caledonia (Nouvelle-Calédonie)",
    dialCode: "+687",
    code: "NC",
    mask: []
  },
  {
    name: "New Zealand (New Zealand)",
    dialCode: "+64",
    code: "NZ",
    mask: []
  },
  {
    name: "Nicaragua (Nicaragua)",
    dialCode: "+505",
    code: "NI",
    mask: []
  },
  {
    name: "Niger (Nijar)",
    dialCode: "+227",
    code: "NE",
    mask: []
  },
  {
    name: "Nigeria (Nigeria)",
    dialCode: "+234",
    code: "NG",
    mask: []
  },
  {
    name: "Niue (Niue)",
    dialCode: "+683",
    code: "NU",
    mask: []
  },
  {
    name: "Norfolk Island (Norfolk Island)",
    dialCode: "+672",
    code: "NF",
    mask: []
  },
  {
    name: "Northern Mariana Islands (Northern Mariana Islands)",
    dialCode: "+1670",
    code: "MP",
    mask: []
  },
  {
    name: "North Korea (조선 민주주의 인민 공화국)",
    dialCode: "+850",
    code: "KP",
    mask: []
  },
  {
    name: "Norway (Norge)",
    dialCode: "+47",
    code: "NO",
    mask: []
  },
  {
    name: "Oman (‫عُمان‬‎)",
    dialCode: "+968",
    code: "OM",
    mask: []
  },
  {
    name: "Pakistan (‫پاکستان‬‎)",
    dialCode: "+92",
    code: "PK",
    mask: []
  },
  {
    name: "Palau (Palau)",
    dialCode: "+680",
    code: "PW",
    mask: []
  },
  {
    name: "Palestine (‫فلسطين‬‎)",
    dialCode: "+970",
    code: "PS",
    mask: []
  },
  {
    name: "Panama (Panamá)",
    dialCode: "+507",
    code: "PA",
    mask: []
  },
  {
    name: "Papua New Guinea (Papua New Guinea)",
    dialCode: "+675",
    code: "PG",
    mask: []
  },
  {
    name: "Paraguay (Paraguay)",
    dialCode: "+595",
    code: "PY",
    mask: []
  },
  {
    name: "Peru (Perú)",
    dialCode: "+51",
    code: "PE",
    mask: []
  },
  {
    name: "Philippines (Philippines)",
    dialCode: "+63",
    code: "PH",
    mask: []
  },
  {
    name: "Pitcairn",
    dialCode: "+872",
    code: "PN",
    mask: []
  },
  {
    name: "Poland (Polska)",
    dialCode: "+48",
    code: "PL",
    mask: []
  },
  {
    name: "Portugal (Portugal)",
    dialCode: "+351",
    code: "PT",
    mask: []
  },
  {
    name: "Puerto Rico (Puerto Rico)",
    dialCode: "+1939",
    code: "PR",
    mask: []
  },
  {
    name: "Qatar (‫قطر‬‎)",
    dialCode: "+974",
    code: "QA",
    mask: []
  },
  {
    name: "Republic of Korea (대한민국)",
    dialCode: "+82",
    code: "KR",
    mask: []
  },
  {
    name: "Reunion (Réunion)",
    dialCode: "+262",
    code: "RE",
    mask: []
  },
  {
    name: "Romania (România)",
    dialCode: "+40",
    code: "RO",
    mask: []
  },
  {
    name: "Russia (Россия)",
    dialCode: "+7",
    code: "RU",
    mask: [/\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]
  },
  {
    name: "Rwanda (Rwanda)",
    dialCode: "+250",
    code: "RW",
    mask: []
  },
  {
    name: "Saint Barthélemy (Saint-Barthélémy)",
    dialCode: "+590",
    code: "BL",
    mask: []
  },
  {
    name: "Saint Helena (Saint Helena)",
    dialCode: "+290",
    code: "SH",
    mask: []
  },
  {
    name: "Saint Kitts and Nevis (Saint Kitts and Nevis)",
    dialCode: "+1869",
    code: "KN",
    mask: []
  },
  {
    name: "Saint Lucia (Saint Lucia)",
    dialCode: "+1758",
    code: "LC",
    mask: []
  },
  {
    name: "Saint Martin Island (Saint-Martin [partie française])",
    dialCode: "+590",
    code: "MF",
    mask: []
  },
  {
    name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    dialCode: "+508",
    code: "PM",
    mask: []
  },
  {
    name: "Saint Vincent and the Grenadines (Saint Vincent and the Grenadines)",
    dialCode: "+1784",
    code: "VC",
    mask: []
  },
  {
    name: "Samoa (Samoa)",
    dialCode: "+685",
    code: "WS",
    mask: []
  },
  {
    name: "San Marino (San Marino)",
    dialCode: "+378",
    code: "SM",
    mask: []
  },
  {
    name: "Sao Tome and Principe (São Tomé e Príncipe)",
    dialCode: "+239",
    code: "ST",
    mask: []
  },
  {
    name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    dialCode: "+966",
    code: "SA",
    mask: []
  },
  {
    name: "Senegal (Sénégal)",
    dialCode: "+221",
    code: "SN",
    mask: []
  },
  {
    name: "Serbia (Србија)",
    dialCode: "+381",
    code: "RS",
    mask: []
  },
  {
    name: "Seychelles (Seychelles)",
    dialCode: "+248",
    code: "SC",
    mask: []
  },
  {
    name: "Sierra Leone (Sierra Leone)",
    dialCode: "+232",
    code: "SL",
    mask: []
  },
  {
    name: "Singapore (Singapore)",
    dialCode: "+65",
    code: "SG",
    mask: []
  },
  {
    name: "Slovakia (Slovensko)",
    dialCode: "+421",
    code: "SK",
    mask: []
  },
  {
    name: "Slovenia (Slovenija)",
    dialCode: "+386",
    code: "SI",
    mask: []
  },
  {
    name: "Solomon Islands (Solomon Islands)",
    dialCode: "+677",
    code: "SB",
    mask: []
  },
  {
    name: "Somalia (Soomaaliya)",
    dialCode: "+252",
    code: "SO",
    mask: []
  },
  {
    name: "South Africa (South Africa)",
    dialCode: "+27",
    code: "ZA",
    mask: []
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    dialCode: "+500",
    code: "GS",
    mask: []
  },
  {
    name: "Spain (España)",
    dialCode: "+34",
    code: "ES",
    mask: []
  },
  {
    name: "Sri Lanka (ශ්‍රී ලංකාව)",
    dialCode: "+94",
    code: "LK",
    mask: []
  },
  {
    name: "Sudan (‫السودان‬‎)",
    dialCode: "+249",
    code: "SD",
    mask: []
  },
  {
    name: "Suriname (Suriname)",
    dialCode: "+597",
    code: "SR",
    mask: []
  },
  {
    name: "Svalbard and Jan Mayen",
    dialCode: "+47",
    code: "SJ",
    mask: []
  },
  {
    name: "Swaziland (Swaziland)",
    dialCode: "+268",
    code: "SZ",
    mask: []
  },
  {
    name: "Sweden (Sverige)",
    dialCode: "+46",
    code: "SE",
    mask: []
  },
  {
    name: "Switzerland (Schweiz)",
    dialCode: "+41",
    code: "CH",
    mask: []
  },
  {
    name: "Syria (‫سوريا‬‎)",
    dialCode: "+963",
    code: "SY",
    mask: []
  },
  {
    name: "Taiwan (台灣)",
    dialCode: "+886",
    code: "TW",
    mask: []
  },
  {
    name: "Tajikistan (Tajikistan)",
    dialCode: "+992",
    code: "TJ",
    mask: []
  },
  {
    name: "Tanzania (Tanzania)",
    dialCode: "+255",
    code: "TZ",
    mask: []
  },
  {
    name: "Thailand (ไทย)",
    dialCode: "+66",
    code: "TH",
    mask: []
  },
  {
    name: "Timor-Leste (Timor-Leste)",
    dialCode: "+670",
    code: "TL",
    mask: []
  },
  {
    name: "Togo (Togo)",
    dialCode: "+228",
    code: "TG",
    mask: []
  },
  {
    name: "Tokelau (Tokelau)",
    dialCode: "+690",
    code: "TK",
    mask: []
  },
  {
    name: "Tonga (Tonga)",
    dialCode: "+676",
    code: "TO",
    mask: []
  },
  {
    name: "Trinidad and Tobago (Trinidad and Tobago)",
    dialCode: "+1868",
    code: "TT",
    mask: []
  },
  {
    name: "Tunisia (‫تونس‬‎)",
    dialCode: "+216",
    code: "TN",
    mask: []
  },
  {
    name: "Turkey (Türkiye)",
    dialCode: "+90",
    code: "TR",
    mask: []
  },
  {
    name: "Turkmenistan (Turkmenistan)",
    dialCode: "+993",
    code: "TM",
    mask: []
  },
  {
    name: "Turks and Caicos Islands (Turks and Caicos Islands)",
    dialCode: "+1649",
    code: "TC",
    mask: []
  },
  {
    name: "Tuvalu (Tuvalu)",
    dialCode: "+688",
    code: "TV",
    mask: []
  },
  {
    name: "Uganda (Uganda)",
    dialCode: "+256",
    code: "UG",
    mask: []
  },
  {
    name: "Ukraine (Україна)",
    dialCode: "+380",
    code: "UA",
    mask: [/\d/, /\d/, " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]
  },
  {
    name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    dialCode: "+971",
    code: "AE",
    mask: []
  },
  {
    name: "UK (United Kingdom)",
    dialCode: "+44",
    code: "GB",
    mask: []
  },
  {
    name: "United States (United States)",
    dialCode: "+1",
    code: "US",
    mask: []
  },
  {
    name: "Uruguay (Uruguay)",
    dialCode: "+598",
    code: "UY",
    mask: []
  },
  {
    name: "Uzbekistan (Ўзбекистон)",
    dialCode: "+998",
    code: "UZ",
    mask: []
  },
  {
    name: "Vanuatu (Vanuatu)",
    dialCode: "+678",
    code: "VU",
    mask: []
  },
  {
    name: "Vatican City (Città del Vaticano)",
    dialCode: "+379",
    code: "VA",
    mask: []
  },
  {
    name: "Venezuela (Venezuela)",
    dialCode: "+58",
    code: "VE",
    mask: []
  },
  {
    name: "Vietnam (Việt Nam)",
    dialCode: "+84",
    code: "VN",
    mask: []
  },
  {
    name: "Virgin Islands (British)",
    dialCode: "+1284",
    code: "VG",
    mask: []
  },
  {
    name: "Virgin Islands (US)",
    dialCode: "+1340",
    code: "VI",
    mask: []
  },
  {
    name: "Wallis and Futuna (Wallis and Futuna)",
    dialCode: "+681",
    code: "WF",
    mask: []
  },
  {
    name: "Yemen (‫اليمن‬‎)",
    dialCode: "+967",
    code: "YE",
    mask: []
  },
  {
    name: "Zambia (Zambia)",
    dialCode: "+260",
    code: "ZM",
    mask: []
  },
  {
    name: "Zimbabwe (Zimbabwe)",
    dialCode: "+263",
    code: "ZW",
    mask: []
  },
  {
    name: "Åland Islands (Ahvenanmaa)",
    dialCode: "+358",
    code: "AX",
    mask: []
  }];

  const [country, setCountry] = useState(props.locale);

  const getMask = locale => options.find(o => o.code === locale).mask;

  const getPlaceholder = locale => options.find(o => o.code === locale).mask.join('').replace(/[\/|\\]/g, "").replace(/[d]/gi, "X");

  const getLocaleCode = locale => options.find(o => o.code === locale).dialCode;

  const onChangeCountry = country => setCountry(country)

  return (
    <Box displayProp="flex"
      borderProp={{
        radius: "3px 3px 3px 3px",
        style: "solid",
        width: "1px",
        color: "#D0D5DA"
      }}
      widthProp="329px"
      heightProp="44px">
      <Box displayProp="flex"
        borderProp={{
          style: "solid",
          width: "0 1px 0 0",
          color: "#D0D5DA"
        }}
        paddingProp={"14px 16px 14px 16px"}>
        <DropDown
          value={country}
          onChange={onChangeCountry}
          options={options}
        />
      </Box>
      <Box displayProp="flex">
        <Box paddingProp={"10px 0 11px 16px"}>
          <Text fontSize={16}>
            {getLocaleCode(country)}
          </Text>
        </Box>
        <div>
          <StyledPhoneInput mask={getMask(country)} placeholder={getPlaceholder(country)} {...props} />
        </div>
      </Box>
    </Box>
  );
}

PhoneInput.propTypes = {
  locale: PropTypes.oneOf(["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "GS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "YE", "ZM", "ZW", "AX"]),
  getLocaleCode: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
};

PhoneInput.defaultProps = {
  locale: "AS",
  type: "text",
  value: ""
};

export default PhoneInput;
