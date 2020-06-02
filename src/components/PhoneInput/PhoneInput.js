import React, { useState } from "react";
import PropTypes from "prop-types";
import DropDown from "./DropDown";
import StyledPhoneInput from "./StyledPhoneInput";
import Box from "../Box";
import Text from "../Text";

const PhoneInput = (props) => {

  const options = [
    {
      name: "Afghanistan",
      dialCode: "+93",
      code: "AF"
    },
    {
      name: "Albania",
      dialCode: "+355",
      code: "AL"
    },
    {
      name: "Algeria",
      dialCode: "+213",
      code: "DZ"
    },
    {
      name: "American Samoa",
      dialCode: "+1684",
      code: "AS"
    },
    {
      name: "Andorra",
      dialCode: "+376",
      code: "AD"
    },
    {
      name: "Angola",
      dialCode: "+244",
      code: "AO"
    },
    {
      name: "Anguilla",
      dialCode: "+1264",
      code: "AI"
    },
    {
      name: "Antarctica",
      dialCode: "+672",
      code: "AQ"
    },
    {
      name: "Antigua and Barbuda",
      dialCode: "+1268",
      code: "AG"
    },
    {
      name: "Argentina",
      dialCode: "+54",
      code: "AR"
    },
    {
      name: "Armenia",
      dialCode: "+374",
      code: "AM"
    },
    {
      name: "Aruba",
      dialCode: "+297",
      code: "AW"
    },
    {
      name: "Australia",
      dialCode: "+61",
      code: "AU"
    },
    {
      name: "Austria",
      dialCode: "+43",
      code: "AT"
    },
    {
      name: "Azerbaijan",
      dialCode: "+994",
      code: "AZ"
    },
    {
      name: "Bahamas",
      dialCode: "+1242",
      code: "BS"
    },
    {
      name: "Bahrain",
      dialCode: "+973",
      code: "BH"
    },
    {
      name: "Bangladesh",
      dialCode: "+880",
      code: "BD"
    },
    {
      name: "Barbados",
      dialCode: "+1246",
      code: "BB"
    },
    {
      name: "Belarus",
      dialCode: "+375",
      code: "BY"
    },
    {
      name: "Belgium",
      dialCode: "+32",
      code: "BE"
    },
    {
      name: "Belize",
      dialCode: "+501",
      code: "BZ"
    },
    {
      name: "Benin",
      dialCode: "+229",
      code: "BJ"
    },
    {
      name: "Bermuda",
      dialCode: "+1441",
      code: "BM"
    },
    {
      name: "Bhutan",
      dialCode: "+975",
      code: "BT"
    },
    {
      name: "Bolivia",
      dialCode: "+591",
      code: "BO"
    },
    {
      name: "Bosnia and Herzegovina",
      dialCode: "+387",
      code: "BA"
    },
    {
      name: "Botswana",
      dialCode: "+267",
      code: "BW"
    },
    {
      name: "Brazil",
      dialCode: "+55",
      code: "BR"
    },
    {
      name: "British Indian Ocean Territory",
      dialCode: "+246",
      code: "IO"
    },
    {
      name: "Brunei Darussalam",
      dialCode: "+673",
      code: "BN"
    },
    {
      name: "Bulgaria",
      dialCode: "+359",
      code: "BG"
    },
    {
      name: "Burkina Faso",
      dialCode: "+226",
      code: "BF"
    },
    {
      name: "Burundi",
      dialCode: "+257",
      code: "BI"
    },
    {
      name: "Cambodia",
      dialCode: "+855",
      code: "KH"
    },
    {
      name: "Cameroon",
      dialCode: "+237",
      code: "CM"
    },
    {
      name: "Canada",
      dialCode: "+1",
      code: "CA"
    },
    {
      name: "Cape Verde",
      dialCode: "+238",
      code: "CV"
    },
    {
      name: "Cayman Islands",
      dialCode: "+ 345",
      code: "KY"
    },
    {
      name: "Central African Republic",
      dialCode: "+236",
      code: "CF"
    },
    {
      name: "Chad",
      dialCode: "+235",
      code: "TD"
    },
    {
      name: "Chile",
      dialCode: "+56",
      code: "CL"
    },
    {
      name: "China",
      dialCode: "+86",
      code: "CN"
    },
    {
      name: "Christmas Island",
      dialCode: "+61",
      code: "CX"
    },
    {
      name: "Cocos (Keeling) Islands",
      dialCode: "+61",
      code: "CC"
    },
    {
      name: "Colombia",
      dialCode: "+57",
      code: "CO"
    },
    {
      name: "Comoros",
      dialCode: "+269",
      code: "KM"
    },
    {
      name: "Congo",
      dialCode: "+242",
      code: "CG"
    },
    {
      name: "Congo, The Democratic Republic of the",
      dialCode: "+243",
      code: "CD"
    },
    {
      name: "Cook Islands",
      dialCode: "+682",
      code: "CK"
    },
    {
      name: "Costa Rica",
      dialCode: "+506",
      code: "CR"
    },
    {
      name: "Cote d'Ivoire",
      dialCode: "+225",
      code: "CI"
    },
    {
      name: "Croatia",
      dialCode: "+385",
      code: "HR"
    },
    {
      name: "Cuba",
      dialCode: "+53",
      code: "CU"
    },
    {
      name: "Cyprus",
      dialCode: "+537",
      code: "CY"
    },
    {
      name: "Czech Republic",
      dialCode: "+420",
      code: "CZ"
    },
    {
      name: "Denmark",
      dialCode: "+45",
      code: "DK"
    },
    {
      name: "Djibouti",
      dialCode: "+253",
      code: "DJ"
    },
    {
      name: "Dominica",
      dialCode: "+1767",
      code: "DM"
    },
    {
      name: "Dominican Republic",
      dialCode: "+1849",
      code: "DO"
    },
    {
      name: "Ecuador",
      dialCode: "+593",
      code: "EC"
    },
    {
      name: "Egypt",
      dialCode: "+20",
      code: "EG"
    },
    {
      name: "El Salvador",
      dialCode: "+503",
      code: "SV"
    },
    {
      name: "Equatorial Guinea",
      dialCode: "+240",
      code: "GQ"
    },
    {
      name: "Eritrea",
      dialCode: "+291",
      code: "ER"
    },
    {
      name: "Estonia",
      dialCode: "+372",
      code: "EE"
    },
    {
      name: "Ethiopia",
      dialCode: "+251",
      code: "ET"
    },
    {
      name: "Falkland Islands (Malvinas)",
      dialCode: "+500",
      code: "FK"
    },
    {
      name: "Faroe Islands",
      dialCode: "+298",
      code: "FO"
    },
    {
      name: "Fiji",
      dialCode: "+679",
      code: "FJ"
    },
    {
      name: "Finland",
      dialCode: "+358",
      code: "FI"
    },
    {
      name: "France",
      dialCode: "+33",
      code: "FR"
    },
    {
      name: "French Guiana",
      dialCode: "+594",
      code: "GF"
    },
    {
      name: "French Polynesia",
      dialCode: "+689",
      code: "PF"
    },
    {
      name: "Gabon",
      dialCode: "+241",
      code: "GA"
    },
    {
      name: "Gambia",
      dialCode: "+220",
      code: "GM"
    },
    {
      name: "Georgia",
      dialCode: "+995",
      code: "GE"
    },
    {
      name: "Germany",
      dialCode: "+49",
      code: "DE"
    },
    {
      name: "Ghana",
      dialCode: "+233",
      code: "GH"
    },
    {
      name: "Gibraltar",
      dialCode: "+350",
      code: "GI"
    },
    {
      name: "Greece",
      dialCode: "+30",
      code: "GR"
    },
    {
      name: "Greenland",
      dialCode: "+299",
      code: "GL"
    },
    {
      name: "Grenada",
      dialCode: "+1473",
      code: "GD"
    },
    {
      name: "Guadeloupe",
      dialCode: "+590",
      code: "GP"
    },
    {
      name: "Guam",
      dialCode: "+1671",
      code: "GU"
    },
    {
      name: "Guatemala",
      dialCode: "+502",
      code: "GT"
    },
    {
      name: "Guernsey",
      dialCode: "+44",
      code: "GG"
    },
    {
      name: "Guinea",
      dialCode: "+224",
      code: "GN"
    },
    {
      name: "Guinea-Bissau",
      dialCode: "+245",
      code: "GW"
    },
    {
      name: "Guyana",
      dialCode: "+595",
      code: "GY"
    },
    {
      name: "Haiti",
      dialCode: "+509",
      code: "HT"
    },
    {
      name: "Holy See (Vatican City State)",
      dialCode: "+379",
      code: "VA"
    },
    {
      name: "Honduras",
      dialCode: "+504",
      code: "HN"
    },
    {
      name: "Hong Kong",
      dialCode: "+852",
      code: "HK"
    },
    {
      name: "Hungary",
      dialCode: "+36",
      code: "HU"
    },
    {
      name: "Iceland",
      dialCode: "+354",
      code: "IS"
    },
    {
      name: "India",
      dialCode: "+91",
      code: "IN"
    },
    {
      name: "Indonesia",
      dialCode: "+62",
      code: "ID"
    },
    {
      name: "Iran, Islamic Republic of",
      dialCode: "+98",
      code: "IR"
    },
    {
      name: "Iraq",
      dialCode: "+964",
      code: "IQ"
    },
    {
      name: "Ireland",
      dialCode: "+353",
      code: "IE"
    },
    {
      name: "Isle of Man",
      dialCode: "+44",
      code: "IM"
    },
    {
      name: "Israel",
      dialCode: "+972",
      code: "IL"
    },
    {
      name: "Italy",
      dialCode: "+39",
      code: "IT"
    },
    {
      name: "Jamaica",
      dialCode: "+1876",
      code: "JM"
    },
    {
      name: "Japan",
      dialCode: "+81",
      code: "JP"
    },
    {
      name: "Jersey",
      dialCode: "+44",
      code: "JE"
    },
    {
      name: "Jordan",
      dialCode: "+962",
      code: "JO"
    },
    {
      name: "Kazakhstan",
      dialCode: "+7 7",
      code: "KZ"
    },
    {
      name: "Kenya",
      dialCode: "+254",
      code: "KE"
    },
    {
      name: "Kiribati",
      dialCode: "+686",
      code: "KI"
    },
    {
      name: "Korea, Democratic People's Republic of",
      dialCode: "+850",
      code: "KP"
    },
    {
      name: "Korea, Republic of",
      dialCode: "+82",
      code: "KR"
    },
    {
      name: "Kuwait",
      dialCode: "+965",
      code: "KW"
    },
    {
      name: "Kyrgyzstan",
      dialCode: "+996",
      code: "KG"
    },
    {
      name: "Lao People's Democratic Republic",
      dialCode: "+856",
      code: "LA"
    },
    {
      name: "Latvia",
      dialCode: "+371",
      code: "LV"
    },
    {
      name: "Lebanon",
      dialCode: "+961",
      code: "LB"
    },
    {
      name: "Lesotho",
      dialCode: "+266",
      code: "LS"
    },
    {
      name: "Liberia",
      dialCode: "+231",
      code: "LR"
    },
    {
      name: "Libyan Arab Jamahiriya",
      dialCode: "+218",
      code: "LY"
    },
    {
      name: "Liechtenstein",
      dialCode: "+423",
      code: "LI"
    },
    {
      name: "Lithuania",
      dialCode: "+370",
      code: "LT"
    },
    {
      name: "Luxembourg",
      dialCode: "+352",
      code: "LU"
    },
    {
      name: "Macao",
      dialCode: "+853",
      code: "MO"
    },
    {
      name: "Macedonia, The Former Yugoslav Republic of",
      dialCode: "+389",
      code: "MK"
    },
    {
      name: "Madagascar",
      dialCode: "+261",
      code: "MG"
    },
    {
      name: "Malawi",
      dialCode: "+265",
      code: "MW"
    },
    {
      name: "Malaysia",
      dialCode: "+60",
      code: "MY"
    },
    {
      name: "Maldives",
      dialCode: "+960",
      code: "MV"
    },
    {
      name: "Mali",
      dialCode: "+223",
      code: "ML"
    },
    {
      name: "Malta",
      dialCode: "+356",
      code: "MT"
    },
    {
      name: "Marshall Islands",
      dialCode: "+692",
      code: "MH"
    },
    {
      name: "Martinique",
      dialCode: "+596",
      code: "MQ"
    },
    {
      name: "Mauritania",
      dialCode: "+222",
      code: "MR"
    },
    {
      name: "Mauritius",
      dialCode: "+230",
      code: "MU"
    },
    {
      name: "Mayotte",
      dialCode: "+262",
      code: "YT"
    },
    {
      name: "Mexico",
      dialCode: "+52",
      code: "MX"
    },
    {
      name: "Micronesia, Federated States of",
      dialCode: "+691",
      code: "FM"
    },
    {
      name: "Moldova",
      dialCode: "+373",
      code: "MD"
    },
    {
      name: "Monaco",
      dialCode: "+377",
      code: "MC"
    },
    {
      name: "Mongolia",
      dialCode: "+976",
      code: "MN"
    },
    {
      name: "Montenegro",
      dialCode: "+382",
      code: "ME"
    },
    {
      name: "Montserrat",
      dialCode: "+1664",
      code: "MS"
    },
    {
      name: "Morocco",
      dialCode: "+212",
      code: "MA"
    },
    {
      name: "Mozambique",
      dialCode: "+258",
      code: "MZ"
    },
    {
      name: "Myanmar",
      dialCode: "+95",
      code: "MM"
    },
    {
      name: "Namibia",
      dialCode: "+264",
      code: "NA"
    },
    {
      name: "Nauru",
      dialCode: "+674",
      code: "NR"
    },
    {
      name: "Nepal",
      dialCode: "+977",
      code: "NP"
    },
    {
      name: "Netherlands",
      dialCode: "+31",
      code: "NL"
    },
    {
      name: "Netherlands Antilles",
      dialCode: "+599",
      code: "AN"
    },
    {
      name: "New Caledonia",
      dialCode: "+687",
      code: "NC"
    },
    {
      name: "New Zealand",
      dialCode: "+64",
      code: "NZ"
    },
    {
      name: "Nicaragua",
      dialCode: "+505",
      code: "NI"
    },
    {
      name: "Niger",
      dialCode: "+227",
      code: "NE"
    },
    {
      name: "Nigeria",
      dialCode: "+234",
      code: "NG"
    },
    {
      name: "Niue",
      dialCode: "+683",
      code: "NU"
    },
    {
      name: "Norfolk Island",
      dialCode: "+672",
      code: "NF"
    },
    {
      name: "Northern Mariana Islands",
      dialCode: "+1670",
      code: "MP"
    },
    {
      name: "Norway",
      dialCode: "+47",
      code: "NO"
    },
    {
      name: "Oman",
      dialCode: "+968",
      code: "OM"
    },
    {
      name: "Pakistan",
      dialCode: "+92",
      code: "PK"
    },
    {
      name: "Palau",
      dialCode: "+680",
      code: "PW"
    },
    {
      name: "Palestinian Territory, Occupied",
      dialCode: "+970",
      code: "PS"
    },
    {
      name: "Panama",
      dialCode: "+507",
      code: "PA"
    },
    {
      name: "Papua New Guinea",
      dialCode: "+675",
      code: "PG"
    },
    {
      name: "Paraguay",
      dialCode: "+595",
      code: "PY"
    },
    {
      name: "Peru",
      dialCode: "+51",
      code: "PE"
    },
    {
      name: "Philippines",
      dialCode: "+63",
      code: "PH"
    },
    {
      name: "Pitcairn",
      dialCode: "+872",
      code: "PN"
    },
    {
      name: "Poland",
      dialCode: "+48",
      code: "PL"
    },
    {
      name: "Portugal",
      dialCode: "+351",
      code: "PT"
    },
    {
      name: "Puerto Rico",
      dialCode: "+1939",
      code: "PR"
    },
    {
      name: "Qatar",
      dialCode: "+974",
      code: "QA"
    },
    {
      name: "Romania",
      dialCode: "+40",
      code: "RO"
    },
    {
      name: "Russia",
      dialCode: "+7",
      code: "RU"
    },
    {
      name: "Rwanda",
      dialCode: "+250",
      code: "RW"
    },
    {
      name: "Réunion",
      dialCode: "+262",
      code: "RE"
    },
    {
      name: "Saint Barthélemy",
      dialCode: "+590",
      code: "BL"
    },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      dialCode: "+290",
      code: "SH"
    },
    {
      name: "Saint Kitts and Nevis",
      dialCode: "+1869",
      code: "KN"
    },
    {
      name: "Saint Lucia",
      dialCode: "+1758",
      code: "LC"
    },
    {
      name: "Saint Martin",
      dialCode: "+590",
      code: "MF"
    },
    {
      name: "Saint Pierre and Miquelon",
      dialCode: "+508",
      code: "PM"
    },
    {
      name: "Saint Vincent and the Grenadines",
      dialCode: "+1784",
      code: "VC"
    },
    {
      name: "Samoa",
      dialCode: "+685",
      code: "WS"
    },
    {
      name: "San Marino",
      dialCode: "+378",
      code: "SM"
    },
    {
      name: "Sao Tome and Principe",
      dialCode: "+239",
      code: "ST"
    },
    {
      name: "Saudi Arabia",
      dialCode: "+966",
      code: "SA"
    },
    {
      name: "Senegal",
      dialCode: "+221",
      code: "SN"
    },
    {
      name: "Serbia",
      dialCode: "+381",
      code: "RS"
    },
    {
      name: "Seychelles",
      dialCode: "+248",
      code: "SC"
    },
    {
      name: "Sierra Leone",
      dialCode: "+232",
      code: "SL"
    },
    {
      name: "Singapore",
      dialCode: "+65",
      code: "SG"
    },
    {
      name: "Slovakia",
      dialCode: "+421",
      code: "SK"
    },
    {
      name: "Slovenia",
      dialCode: "+386",
      code: "SI"
    },
    {
      name: "Solomon Islands",
      dialCode: "+677",
      code: "SB"
    },
    {
      name: "Somalia",
      dialCode: "+252",
      code: "SO"
    },
    {
      name: "South Africa",
      dialCode: "+27",
      code: "ZA"
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      dialCode: "+500",
      code: "GS"
    },
    {
      name: "Spain",
      dialCode: "+34",
      code: "ES"
    },
    {
      name: "Sri Lanka",
      dialCode: "+94",
      code: "LK"
    },
    {
      name: "Sudan",
      dialCode: "+249",
      code: "SD"
    },
    {
      name: "Suriname",
      dialCode: "+597",
      code: "SR"
    },
    {
      name: "Svalbard and Jan Mayen",
      dialCode: "+47",
      code: "SJ"
    },
    {
      name: "Swaziland",
      dialCode: "+268",
      code: "SZ"
    },
    {
      name: "Sweden",
      dialCode: "+46",
      code: "SE"
    },
    {
      name: "Switzerland",
      dialCode: "+41",
      code: "CH"
    },
    {
      name: "Syrian Arab Republic",
      dialCode: "+963",
      code: "SY"
    },
    {
      name: "Taiwan, Province of China",
      dialCode: "+886",
      code: "TW"
    },
    {
      name: "Tajikistan",
      dialCode: "+992",
      code: "TJ"
    },
    {
      name: "Tanzania, United Republic of",
      dialCode: "+255",
      code: "TZ"
    },
    {
      name: "Thailand",
      dialCode: "+66",
      code: "TH"
    },
    {
      name: "Timor-Leste",
      dialCode: "+670",
      code: "TL"
    },
    {
      name: "Togo",
      dialCode: "+228",
      code: "TG"
    },
    {
      name: "Tokelau",
      dialCode: "+690",
      code: "TK"
    },
    {
      name: "Tonga",
      dialCode: "+676",
      code: "TO"
    },
    {
      name: "Trinidad and Tobago",
      dialCode: "+1868",
      code: "TT"
    },
    {
      name: "Tunisia",
      dialCode: "+216",
      code: "TN"
    },
    {
      name: "Turkey",
      dialCode: "+90",
      code: "TR"
    },
    {
      name: "Turkmenistan",
      dialCode: "+993",
      code: "TM"
    },
    {
      name: "Turks and Caicos Islands",
      dialCode: "+1649",
      code: "TC"
    },
    {
      name: "Tuvalu",
      dialCode: "+688",
      code: "TV"
    },
    {
      name: "Uganda",
      dialCode: "+256",
      code: "UG"
    },
    {
      name: "Ukraine",
      dialCode: "+380",
      code: "UA"
    },
    {
      name: "United Arab Emirates",
      dialCode: "+971",
      code: "AE"
    },
    {
      name: "United Kingdom",
      dialCode: "+44",
      code: "GB"
    },
    {
      name: "United States",
      dialCode: "+1",
      code: "US"
    },
    {
      name: "Uruguay",
      dialCode: "+598",
      code: "UY"
    },
    {
      name: "Uzbekistan",
      dialCode: "+998",
      code: "UZ"
    },
    {
      name: "Vanuatu",
      dialCode: "+678",
      code: "VU"
    },
    {
      name: "Venezuela, Bolivarian Republic of",
      dialCode: "+58",
      code: "VE"
    },
    {
      name: "Viet Nam",
      dialCode: "+84",
      code: "VN"
    },
    {
      name: "Virgin Islands, British",
      dialCode: "+1284",
      code: "VG"
    },
    {
      name: "Virgin Islands, U.S.",
      dialCode: "+1340",
      code: "VI"
    },
    {
      name: "Wallis and Futuna",
      dialCode: "+681",
      code: "WF"
    },
    {
      name: "Yemen",
      dialCode: "+967",
      code: "YE"
    },
    {
      name: "Zambia",
      dialCode: "+260",
      code: "ZM"
    },
    {
      name: "Zimbabwe",
      dialCode: "+263",
      code: "ZW"
    },
    {
      name: "Åland Islands",
      dialCode: "+358",
      code: "AX"
    }
  ];

  const [country, setCountry] = useState(props.locale);

  const getMask = locale => {
    switch (locale) {
      case "RU":
        return [/\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/];
      case "BY":
      case "UA":
        return [/\d/, /\d/, " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/];
      case "AF":
      case "AL":
      case "DZ":
      case "AS":
      case "AD":
      case "AO":
      case "AI":
      case "AQ":
      case "AG":
      case "AR":
      case "AM":
      case "AW":
      case "AU":
      case "AT":
      case "AZ":
      case "BS":
      case "BH":
      case "BD":
      case "BB":
      case "BE":
      case "BZ":
      case "BJ":
      case "BM":
      case "BT":
      case "BO":
      case "BA":
      case "BW":
      case "BR":
      case "IO":
      case "BN":
      case "BG":
      case "BF":
      case "BI":
      case "KH":
      case "CM":
      case "CA":
      case "CV":
      case "KY":
      case "CF":
      case "TD":
      case "CL":
      case "CN":
      case "CX":
      case "CC":
      case "CO":
      case "KM":
      case "CG":
      case "CD":
      case "CK":
      case "CR":
      case "CI":
      case "HR":
      case "CU":
      case "CY":
      case "CZ":
      case "DK":
      case "DJ":
      case "DM":
      case "DO":
      case "EC":
      case "EG":
      case "SV":
      case "GQ":
      case "ER":
      case "EE":
      case "ET":
      case "FK":
      case "FO":
      case "FJ":
      case "FI":
      case "FR":
      case "GF":
      case "PF":
      case "GA":
      case "GM":
      case "GE":
      case "DE":
      case "GH":
      case "GI":
      case "GR":
      case "GL":
      case "GD":
      case "GP":
      case "GU":
      case "GT":
      case "GG":
      case "GN":
      case "GW":
      case "GY":
      case "HT":
      case "VA":
      case "HN":
      case "HK":
      case "HU":
      case "IS":
      case "IN":
      case "ID":
      case "IR":
      case "IQ":
      case "IE":
      case "IM":
      case "IL":
      case "IT":
      case "JM":
      case "JP":
      case "JE":
      case "JO":
      case "KZ":
      case "KE":
      case "KI":
      case "KP":
      case "KR":
      case "KW":
      case "KG":
      case "LA":
      case "LV":
      case "LB":
      case "LS":
      case "LR":
      case "LY":
      case "LI":
      case "LT":
      case "LU":
      case "MO":
      case "MK":
      case "MG":
      case "MW":
      case "MY":
      case "MV":
      case "ML":
      case "MT":
      case "MH":
      case "MQ":
      case "MR":
      case "MU":
      case "YT":
      case "MX":
      case "FM":
      case "MD":
      case "MC":
      case "MN":
      case "ME":
      case "MS":
      case "MA":
      case "MZ":
      case "MM":
      case "NA":
      case "NR":
      case "NP":
      case "NL":
      case "AN":
      case "NC":
      case "NZ":
      case "NI":
      case "NE":
      case "NG":
      case "NU":
      case "NF":
      case "MP":
      case "NO":
      case "OM":
      case "PK":
      case "PW":
      case "PS":
      case "PA":
      case "PG":
      case "PY":
      case "PE":
      case "PH":
      case "PN":
      case "PL":
      case "PT":
      case "PR":
      case "QA":
      case "RO":
      case "RW":
      case "RE":
      case "BL":
      case "SH":
      case "KN":
      case "LC":
      case "MF":
      case "PM":
      case "VC":
      case "WS":
      case "SM":
      case "ST":
      case "SA":
      case "SN":
      case "RS":
      case "SC":
      case "SL":
      case "SG":
      case "SK":
      case "SI":
      case "SB":
      case "SO":
      case "ZA":
      case "GS":
      case "ES":
      case "LK":
      case "SD":
      case "SR":
      case "SJ":
      case "SZ":
      case "SE":
      case "CH":
      case "SY":
      case "TW":
      case "TJ":
      case "TZ":
      case "TH":
      case "TL":
      case "TG":
      case "TK":
      case "TO":
      case "TT":
      case "TN":
      case "TR":
      case "TM":
      case "TC":
      case "TV":
      case "UG":
      case "AE":
      case "GB":
      case "US":
      case "UY":
      case "UZ":
      case "VU":
      case "VE":
      case "VN":
      case "VG":
      case "VI":
      case "WF":
      case "YE":
      case "ZM":
      case "ZW":
      case "AX":
        return [/\d/, /\d/, " ", /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/];
      default:
        return "";
    }
  }

  const getPlaceholder = locale => {
    switch (locale) {
      case "RU":
        return "XXX XXX-XX-XX";
      case "BY":
      case "UA":
        return "XX XXX-XX-XX";
      case "AF":
      case "AL":
      case "DZ":
      case "AS":
      case "AD":
      case "AO":
      case "AI":
      case "AQ":
      case "AG":
        return "XXX XXX-XX-XX-XX";
      case "AR":
      case "AM":
      case "AW":
      case "AU":
      case "AT":
      case "AZ":
      case "BS":
      case "BH":
      case "BD":
      case "BB":
      case "BE":
      case "BZ":
      case "BJ":
      case "BM":
      case "BT":
      case "BO":
      case "BA":
      case "BW":
      case "BR":
      case "IO":
      case "BN":
      case "BG":
      case "BF":
      case "BI":
      case "KH":
      case "CM":
      case "CA":
      case "CV":
      case "KY":
      case "CF":
      case "TD":
      case "CL":
      case "CN":
      case "CX":
      case "CC":
      case "CO":
      case "KM":
      case "CG":
      case "CD":
      case "CK":
      case "CR":
      case "CI":
      case "HR":
      case "CU":
      case "CY":
      case "CZ":
      case "DK":
      case "DJ":
      case "DM":
      case "DO":
      case "EC":
      case "EG":
      case "SV":
      case "GQ":
      case "ER":
      case "EE":
      case "ET":
      case "FK":
      case "FO":
      case "FJ":
      case "FI":
      case "FR":
      case "GF":
      case "PF":
      case "GA":
      case "GM":
      case "GE":
      case "DE":
      case "GH":
      case "GI":
      case "GR":
      case "GL":
      case "GD":
      case "GP":
      case "GU":
      case "GT":
      case "GG":
      case "GN":
      case "GW":
      case "GY":
      case "HT":
      case "VA":
      case "HN":
      case "HK":
      case "HU":
      case "IS":
      case "IN":
      case "ID":
      case "IR":
      case "IQ":
      case "IE":
      case "IM":
      case "IL":
      case "IT":
      case "JM":
      case "JP":
      case "JE":
      case "JO":
      case "KZ":
      case "KE":
      case "KI":
      case "KP":
      case "KR":
      case "KW":
      case "KG":
      case "LA":
      case "LV":
      case "LB":
      case "LS":
      case "LR":
      case "LY":
      case "LI":
      case "LT":
      case "LU":
      case "MO":
      case "MK":
      case "MG":
      case "MW":
      case "MY":
      case "MV":
      case "ML":
      case "MT":
      case "MH":
      case "MQ":
      case "MR":
      case "MU":
      case "YT":
      case "MX":
      case "FM":
      case "MD":
      case "MC":
      case "MN":
      case "ME":
      case "MS":
      case "MA":
      case "MZ":
      case "MM":
      case "NA":
      case "NR":
      case "NP":
      case "NL":
      case "AN":
      case "NC":
      case "NZ":
      case "NI":
      case "NE":
      case "NG":
      case "NU":
      case "NF":
      case "MP":
      case "NO":
      case "OM":
      case "PK":
      case "PW":
      case "PS":
      case "PA":
      case "PG":
      case "PY":
      case "PE":
      case "PH":
      case "PN":
      case "PL":
      case "PT":
      case "PR":
      case "QA":
      case "RO":
      case "RW":
      case "RE":
      case "BL":
      case "SH":
      case "KN":
      case "LC":
      case "MF":
      case "PM":
      case "VC":
      case "WS":
      case "SM":
      case "ST":
      case "SA":
      case "SN":
      case "RS":
      case "SC":
      case "SL":
      case "SG":
      case "SK":
      case "SI":
      case "SB":
      case "SO":
      case "ZA":
      case "GS":
      case "ES":
      case "LK":
      case "SD":
      case "SR":
      case "SJ":
      case "SZ":
      case "SE":
      case "CH":
      case "SY":
      case "TW":
      case "TJ":
      case "TZ":
      case "TH":
      case "TL":
      case "TG":
      case "TK":
      case "TO":
      case "TT":
      case "TN":
      case "TR":
      case "TM":
      case "TC":
      case "TV":
      case "UG":
      case "AE":
      case "GB":
      case "US":
      case "UY":
      case "UZ":
      case "VU":
      case "VE":
      case "VN":
      case "VG":
      case "VI":
      case "WF":
      case "YE":
      case "ZM":
      case "ZW":
      case "AX":
        return "XX XX-XX-XX";
      default:
        return "";
    }
  }

  const getLocaleCode = locale => {
    switch (locale) {
      case "AF":
        return "+93";
      case "AL":
        return "+355";
      case "DZ":
        return "+213";
      case "AS":
        return "+1684";
      case "AD":
        return "+376";
      case "AO":
        return "+244";
      case "AI":
        return "+1264";
      case "AQ":
        return "+672";
      case "AG":
        return "+1268";
      case "AR":
        return "+54";
      case "AM":
        return "+374";
      case "AW":
        return "+297";
      case "AU":
        return "+61";
      case "AT":
        return "+43";
      case "AZ":
        return "+994";
      case "BS":
        return "+1242";
      case "BH":
        return "+973";
      case "BD":
        return "+880";
      case "BB":
        return "+1246";
      case "BY":
        return "+375";
      case "BE":
        return "+32";
      case "BZ":
        return "+501";
      case "BJ":
        return "+229";
      case "BM":
        return "+1441";
      case "BT":
        return "+975";
      case "BO":
        return "+591";
      case "BA":
        return "+387";
      case "BW":
        return "+267";
      case "BR":
        return "+55";
      case "IO":
        return "+246";
      case "BN":
        return "+673";
      case "BG":
        return "+359";
      case "BF":
        return "+226";
      case "BI":
        return "+257";
      case "KH":
        return "+855";
      case "CM":
        return "+237";
      case "CA":
        return "+1";
      case "CV":
        return "+238";
      case "KY":
        return "+ 345";
      case "CF":
        return "+236";
      case "TD":
        return "+235";
      case "CL":
        return "+56";
      case "CN":
        return "+86";
      case "CX":
        return "+61";
      case "CC":
        return "+61";
      case "CO":
        return "+57";
      case "KM":
        return "+269";
      case "CG":
        return "+242";
      case "CD":
        return "+243";
      case "CK":
        return "+682";
      case "CR":
        return "+506";
      case "CI":
        return "+225";
      case "HR":
        return "+385";
      case "CU":
        return "+53";
      case "CY":
        return "+537";
      case "CZ":
        return "+420";
      case "DK":
        return "+45";
      case "DJ":
        return "+253";
      case "DM":
        return "+1767";
      case "DO":
        return "+1849";
      case "EC":
        return "+593";
      case "EG":
        return "+20";
      case "SV":
        return "+503";
      case "GQ":
        return "+240";
      case "ER":
        return "+291";
      case "EE":
        return "+372";
      case "ET":
        return "+251";
      case "FK":
        return "+500";
      case "FO":
        return "+298";
      case "FJ":
        return "+679";
      case "FI":
        return "+358";
      case "FR":
        return "+33";
      case "GF":
        return "+594";
      case "PF":
        return "+689";
      case "GA":
        return "+241";
      case "GM":
        return "+220";
      case "GE":
        return "+995";
      case "DE":
        return "+49";
      case "GH":
        return "+233";
      case "GI":
        return "+350";
      case "GR":
        return "+30";
      case "GL":
        return "+299";
      case "GD":
        return "+1473";
      case "GP":
        return "+590";
      case "GU":
        return "+1671";
      case "GT":
        return "+502";
      case "GG":
        return "+44";
      case "GN":
        return "+224";
      case "GW":
        return "+245";
      case "GY":
        return "+595";
      case "HT":
        return "+509";
      case "VA":
        return "+379";
      case "HN":
        return "+504";
      case "HK":
        return "+852";
      case "HU":
        return "+36";
      case "IS":
        return "+354";
      case "IN":
        return "+91";
      case "ID":
        return "+62";
      case "IR":
        return "+98";
      case "IQ":
        return "+964";
      case "IE":
        return "+353";
      case "IM":
        return "+44";
      case "IL":
        return "+972";
      case "IT":
        return "+39";
      case "JM":
        return "+1876";
      case "JP":
        return "+81";
      case "JE":
        return "+44";
      case "JO":
        return "+962";
      case "KZ":
        return "+7 7";
      case "KE":
        return "+254";
      case "KI":
        return "+686";
      case "KP":
        return "+850";
      case "KR":
        return "+82";
      case "KW":
        return "+965";
      case "KG":
        return "+996";
      case "LA":
        return "+856";
      case "LV":
        return "+371";
      case "LB":
        return "+961";
      case "LS":
        return "+266";
      case "LR":
        return "+231";
      case "LY":
        return "+218";
      case "LI":
        return "+423";
      case "LT":
        return "+370";
      case "LU":
        return "+352";
      case "MO":
        return "+853";
      case "MK":
        return "+389";
      case "MG":
        return "+261";
      case "MW":
        return "+265";
      case "MY":
        return "+60";
      case "MV":
        return "+960";
      case "ML":
        return "+223";
      case "MT":
        return "+356";
      case "MH":
        return "+692";
      case "MQ":
        return "+596";
      case "MR":
        return "+222";
      case "MU":
        return "+230";
      case "YT":
        return "+262";
      case "MX":
        return "+52";
      case "FM":
        return "+691";
      case "MD":
        return "+373";
      case "MC":
        return "+377";
      case "MN":
        return "+976";
      case "ME":
        return "+382";
      case "MS":
        return "+1664";
      case "MA":
        return "+212";
      case "MZ":
        return "+258";
      case "MM":
        return "+95";
      case "NA":
        return "+264";
      case "NR":
        return "+674";
      case "NP":
        return "+977";
      case "NL":
        return "+31";
      case "AN":
        return "+599";
      case "NC":
        return "+687";
      case "NZ":
        return "+64";
      case "NI":
        return "+505";
      case "NE":
        return "+227";
      case "NG":
        return "+234";
      case "NU":
        return "+683";
      case "NF":
        return "+672";
      case "MP":
        return "+1670";
      case "NO":
        return "+47";
      case "OM":
        return "+968";
      case "PK":
        return "+92";
      case "PW":
        return "+680";
      case "PS":
        return "+970";
      case "PA":
        return "+507";
      case "PG":
        return "+675";
      case "PY":
        return "+595";
      case "PE":
        return "+51";
      case "PH":
        return "+63";
      case "PN":
        return "+872";
      case "PL":
        return "+48";
      case "PT":
        return "+351";
      case "PR":
        return "+1939";
      case "QA":
        return "+974";
      case "RO":
        return "+40";
      case "RU":
        return "+7";
      case "RW":
        return "+250";
      case "RE":
        return "+262";
      case "BL":
        return "+590";
      case "SH":
        return "+290";
      case "KN":
        return "+1869";
      case "LC":
        return "+1758";
      case "MF":
        return "+590";
      case "PM":
        return "+508";
      case "VC":
        return "+1784";
      case "WS":
        return "+685";
      case "SM":
        return "+378";
      case "ST":
        return "+239";
      case "SA":
        return "+966";
      case "SN":
        return "+221";
      case "RS":
        return "+381";
      case "SC":
        return "+248";
      case "SL":
        return "+232";
      case "SG":
        return "+65";
      case "SK":
        return "+421";
      case "SI":
        return "+386";
      case "SB":
        return "+677";
      case "SO":
        return "+252";
      case "ZA":
        return "+27";
      case "GS":
        return "+500";
      case "ES":
        return "+34";
      case "LK":
        return "+94";
      case "SD":
        return "+249";
      case "SR":
        return "+597";
      case "SJ":
        return "+47";
      case "SZ":
        return "+268";
      case "SE":
        return "+46";
      case "CH":
        return "+41";
      case "SY":
        return "+963";
      case "TW":
        return "+886";
      case "TJ":
        return "+992";
      case "TZ":
        return "+255";
      case "TH":
        return "+66";
      case "TL":
        return "+670";
      case "TG":
        return "+228";
      case "TK":
        return "+690";
      case "TO":
        return "+676";
      case "TT":
        return "+1868";
      case "TN":
        return "+216";
      case "TR":
        return "+90";
      case "TM":
        return "+993";
      case "TC":
        return "+1649";
      case "TV":
        return "+688";
      case "UG":
        return "+256";
      case "UA":
        return "+380";
      case "AE":
        return "+971";
      case "GB":
        return "+44";
      case "US":
        return "+1";
      case "UY":
        return "+598";
      case "UZ":
        return "+998";
      case "VU":
        return "+678";
      case "VE":
        return "+58";
      case "VN":
        return "+84";
      case "VG":
        return "+1284";
      case "VI":
        return "+1340";
      case "WF":
        return "+681";
      case "YE":
        return "+967";
      case "ZM":
        return "+260";
      case "ZW":
        return "+263";
      case "AX":
        return "+358";
      default:
        return "n/a";
    }
  }

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
        paddingProp={"14px 25px 14px 16px"}>
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
        <Box>
          <StyledPhoneInput mask={getMask(country)} placeholder={getPlaceholder(country)} {...props} />
        </Box>
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
  value: "",
  // maxLength: 255,
  // size: "base",
  // tabIndex: -1,
  // autoComplete: "ona",
  // border: false,
  // keepCharPositions: false
};

export default PhoneInput;
