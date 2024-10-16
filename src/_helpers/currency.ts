interface Currency {
  value: string;
  title: string;
  symbol: string;
  rate?: number;
}
const currencies: Currency[] = [
  {
    value: "gbp",
    title: "British Pound Sterling",
    symbol: "£",
  },
  {
    value: "usd",
    title: "US Dollar",
    symbol: "$",
  },
  {
    value: "eur",
    title: "Euro",
    symbol: "€",
  },
  // --------------------------------
  {
    value: "afn",
    title: "Afghan Afghani",
    symbol: "؋",
  },
  {
    value: "all",
    title: "Albanian Lek",
    symbol: "Lek",
  },
  {
    value: "dzd",
    title: "Algerian Dinar",
    symbol: "دج",
  },
  {
    value: "aoa",
    title: "Angolan Kwanza",
    symbol: "Kz",
  },
  {
    value: "ars",
    title: "Argentine Peso",
    symbol: "$",
  },
  {
    value: "amd",
    title: "Armenian Dram",
    symbol: "֏",
  },
  {
    value: "awg",
    title: "Aruban Florin",
    symbol: "ƒ",
  },
  {
    value: "aud",
    title: "Australian Dollar",
    symbol: "AU $",
  },
  {
    value: "azn",
    title: "Azerbaijani Manat",
    symbol: "m",
  },
  {
    value: "bsd",
    title: "Bahamian Dollar",
    symbol: "B$",
  },
  {
    value: "bdt",
    title: "Bangladeshi Taka",
    symbol: "৳",
  },
  {
    value: "bbd",
    title: "Barbadian Dollar",
    symbol: "Bds$",
  },
  {
    value: "bhd",
    title: "Bahraini Dinar",
    symbol: ".د.ب",
    rate: 1,
  },
  {
    value: "bzd",
    title: "Belize Dollar",
    symbol: "$",
  },
  {
    value: "bmd",
    title: "Bermudan Dollar",
    symbol: "$",
  },
  {
    value: "bob",
    title: "Bolivian Boliviano",
    symbol: "Bs.",
  },
  {
    value: "bam",
    title: "Bosnia-Herzegovina Convertible Mark",
    symbol: "KM",
  },
  {
    value: "bwp",
    title: "Botswanan Pula",
    symbol: "P",
  },
  {
    value: "brl",
    title: "Brazilian Real",
    symbol: "R$",
  },
  {
    value: "bnd",
    title: "Brunei Dollar",
    symbol: "B$",
  },
  {
    value: "bgn",
    title: "Bulgarian Lev",
    symbol: "Лв.",
  },
  {
    value: "bif",
    title: "Burundian Franc",
    symbol: "FBu",
  },
  {
    value: "khr",
    title: "Cambodian Riel",
    symbol: "KHR",
  },
  {
    value: "cad",
    title: "Canadian Dollar",
    symbol: "C $",
  },
  {
    value: "cve",
    title: "Cape Verdean Escudo",
    symbol: "$",
  },
  {
    value: "kyd",
    title: "Cayman Islands Dollar",
    symbol: "$",
  },
  {
    value: "xof",
    title: "CFA Franc BCEAO",
    symbol: "CFA",
  },
  {
    value: "xaf",
    title: "CFA Franc BEAC",
    symbol: "FCFA",
  },
  {
    value: "xpf",
    title: "CFP Franc",
    symbol: "₣",
  },
  {
    value: "clp",
    title: "Chilean Peso",
    symbol: "$",
  },
  {
    value: "cny",
    title: "Chinese Yuan",
    symbol: "¥",
  },
  {
    value: "cop",
    title: "Colombian Peso",
    symbol: "$",
  },
  {
    value: "kmf",
    title: "Comorian Franc",
    symbol: "CF",
  },
  {
    value: "cdf",
    title: "Congolese Franc",
    symbol: "FC",
  },
  {
    value: "crc",
    title: "Costa Rican ColÃ³n",
    symbol: "₡",
  },
  {
    value: "czk",
    title: "Czech Republic Koruna",
    symbol: "Kč",
  },
  {
    value: "dkk",
    title: "Danish Krone",
    symbol: "Kr.",
  },
  {
    value: "djf",
    title: "Djiboutian Franc",
    symbol: "Fdj",
  },
  {
    value: "dop",
    title: "Dominican Peso",
    symbol: "$",
  },
  {
    value: "xcd",
    title: "East Caribbean Dollar",
    symbol: "$",
  },
  {
    value: "egp",
    title: "Egyptian Pound",
    symbol: "ج.م",
  },
  {
    value: "etb",
    title: "Ethiopian Birr",
    symbol: "Nkf",
  },
  {
    value: "fkp",
    title: "Falkland Islands Pound",
    symbol: "£",
  },
  {
    value: "fjd",
    title: "Fijian Dollar",
    symbol: "FJ$",
  },
  {
    value: "gmd",
    title: "Gambian Dalasi",
    symbol: "D",
  },
  {
    value: "gel",
    title: "Georgian Lari",
    symbol: "ლ",
  },
  {
    value: "gip",
    title: "Gibraltar Pound",
    symbol: "£",
  },
  {
    value: "gtq",
    title: "Guatemalan Quetzal",
    symbol: "Q",
  },
  {
    value: "gnf",
    title: "Guinean Franc",
    symbol: "FG",
  },
  {
    value: "gyd",
    title: "Guyanaese Dollar",
    symbol: "$",
  },
  {
    value: "htg",
    title: "Haitian Gourde",
    symbol: "G",
  },
  {
    value: "hnl",
    title: "Honduran Lempira",
    symbol: "L",
  },
  {
    value: "hkd",
    title: "Hong Kong Dollar",
    symbol: "$",
  },
  {
    value: "huf",
    title: "Hungarian Forint",
    symbol: "Ft",
  },
  {
    value: "isk",
    title: "Icelandic KrÃ³na",
    symbol: "kr",
  },
  {
    value: "inr",
    title: "Indian Rupee",
    symbol: "₹",
  },
  {
    value: "idr",
    title: "Indonesian Rupiah",
    symbol: "Rp",
  },
  {
    value: "ils",
    title: "Israeli New Sheqel",
    symbol: "₪",
  },
  {
    value: "jmd",
    title: "Jamaican Dollar",
    symbol: "J$",
  },
  {
    value: "jpy",
    title: "Japanese Yen",
    symbol: "¥",
  },
  {
    value: "kzt",
    title: "Kazakhstani Tenge",
    symbol: "лв",
  },
  {
    value: "kes",
    title: "Kenyan Shilling",
    symbol: "KSh",
  },
  {
    value: "kgs",
    title: "Kyrgystani Som",
    symbol: "лв",
  },
  {
    value: "lak",
    title: "Laotian Kip",
    symbol: "₭",
  },
  {
    value: "lbp",
    title: "Lebanese Pound",
    symbol: "£",
  },
  {
    value: "lsl",
    title: "Lesotho Loti",
    symbol: "L",
  },
  {
    value: "lrd",
    title: "Liberian Dollar",
    symbol: "$",
  },
  {
    value: "mop",
    title: "Macanese Pataca",
    symbol: "$",
  },
  {
    value: "mkd",
    title: "Macedonian Denar",
    symbol: "ден",
  },
  {
    value: "mga",
    title: "Malagasy Ariary",
    symbol: "Ar",
  },
  {
    value: "mwk",
    title: "Malawian Kwacha",
    symbol: "MK",
  },
  {
    value: "myr",
    title: "Malaysian Ringgit",
    symbol: "RM",
  },
  {
    value: "mvr",
    title: "Maldivian Rufiyaa",
    symbol: "Rf",
  },
  {
    value: "mur",
    title: "Mauritian Rupee",
    symbol: "₨",
  },
  {
    value: "mxn",
    title: "Mexican Peso",
    symbol: "$",
  },
  {
    value: "mdl",
    title: "Moldovan Leu",
    symbol: "L",
  },
  {
    value: "mnt",
    title: "Mongolian Tugrik",
    symbol: "₮",
  },
  {
    value: "mad",
    title: "Moroccan Dirham",
    symbol: "MAD",
  },
  {
    value: "mmk",
    title: "Myanmar Kyat",
    symbol: "K",
  },
  {
    value: "nad",
    title: "Namibian Dollar",
    symbol: "$",
  },
  {
    value: "npr",
    title: "Nepalese Rupee",
    symbol: "₨",
  },
  {
    value: "ang",
    title: "Netherlands Antillean Guilder",
    symbol: "ƒ",
  },
  {
    value: "twd",
    title: "New Taiwan Dollar",
    symbol: "$",
  },
  {
    value: "nzd",
    title: "New Zealand Dollar",
    symbol: "$",
  },
  {
    value: "nio",
    title: "Nicaraguan CÃ³rdoba",
    symbol: "C$",
  },
  {
    value: "ngn",
    title: "Nigerian Naira",
    symbol: "₦",
  },
  {
    value: "nok",
    title: "Norwegian Krone",
    symbol: "kr",
  },
  {
    value: "pkr",
    title: "Pakistani Rupee",
    symbol: "₨",
  },
  {
    value: "pab",
    title: "Panamanian Balboa",
    symbol: "B/.",
  },
  {
    value: "pgk",
    title: "Papua New Guinean Kina",
    symbol: "K",
  },
  {
    value: "pyg",
    title: "Paraguayan Guarani",
    symbol: "₲",
  },
  {
    value: "pen",
    title: "Peruvian Nuevo Sol",
    symbol: "S/.",
  },
  {
    value: "php",
    title: "Philippine Peso",
    symbol: "₱",
  },
  {
    value: "pln",
    title: "Polish Zloty",
    symbol: "zł",
  },
  {
    value: "qar",
    title: "Qatari Rial",
    symbol: "ق.ر",
  },
  {
    value: "ron",
    title: "Romanian Leu",
    symbol: "lei",
  },
  {
    value: "rub",
    title: "Russian Ruble",
    symbol: "₽",
  },
  {
    value: "rwf",
    title: "Rwandan Franc",
    symbol: "FRw",
  },
  {
    value: "wst",
    title: "Samoan Tala",
    symbol: "SAT",
  },
  {
    value: "sar",
    title: "Saudi Riyal",
    symbol: "﷼",
  },
  {
    value: "rsd",
    title: "Serbian Dinar",
    symbol: "din",
  },
  {
    value: "scr",
    title: "Seychellois Rupee",
    symbol: "SRe",
  },
  {
    value: "sgd",
    title: "Singapore Dollar",
    symbol: "$",
  },
  {
    value: "sbd",
    title: "Solomon Islands Dollar",
    symbol: "Si$",
  },
  {
    value: "sos",
    title: "Somali Shilling",
    symbol: "Sh.so.",
  },
  {
    value: "zar",
    title: "South African Rand",
    symbol: "R",
  },
  {
    value: "krw",
    title: "South Korean Won",
    symbol: "₩",
  },
  {
    value: "lkr",
    title: "Sri Lankan Rupee",
    symbol: "Rs",
  },
  {
    value: "shp",
    title: "St. Helena Pound",
    symbol: "£",
  },
  {
    value: "srd",
    title: "Surinamese Dollar",
    symbol: "$",
  },
  {
    value: "szl",
    title: "Swazi Lilangeni",
    symbol: "E",
  },
  {
    value: "sek",
    title: "Swedish Krona",
    symbol: "kr",
  },
  {
    value: "chf",
    title: "Swiss Franc",
    symbol: "CHf",
  },
  {
    value: "std",
    title: "São Tomé and Príncipe Dobra",
    symbol: "Db",
  },
  {
    value: "tjs",
    title: "Tajikistani Somoni",
    symbol: "SM",
  },
  {
    value: "tzs",
    title: "Tanzanian Shilling",
    symbol: "TSh",
  },
  {
    value: "thb",
    title: "Thai Baht",
    symbol: "฿",
  },
  {
    value: "top",
    title: "Tongan pa'anga",
    symbol: "$",
  },
  {
    value: "ttd",
    title: "Trinidad & Tobago Dollar",
    symbol: "$",
  },
  {
    value: "try",
    title: "Turkish Lira",
    symbol: "₺",
  },
  {
    value: "ugx",
    title: "Ugandan Shilling",
    symbol: "USh",
  },
  {
    value: "uah",
    title: "Ukrainian Hryvnia",
    symbol: "₴",
  },
  {
    value: "aed",
    title: "United Arab Emirates Dirham",
    symbol: "إ.د",
  },
  {
    value: "uyu",
    title: "Uruguayan Peso",
    symbol: "$",
  },
  {
    value: "uzs",
    title: "Uzbekistan Som",
    symbol: "лв",
  },
  {
    value: "vuv",
    title: "Vanuatu Vatu",
    symbol: "VT",
  },
  {
    value: "vnd",
    title: "Vietnamese Dong",
    symbol: "₫",
  },
  {
    value: "yer",
    title: "Yemeni Rial",
    symbol: "﷼",
  },
  {
    value: "byn",
    title: "Belarusian Ruble",
    symbol: "BYN",
  },
  {
    value: "mzn",
    title: "Mozambican metical",
    symbol: "MZN",
  },
  {
    value: "sle",
    title: "Sierra Leonean Leone",
    symbol: "Le",
  },
  {
    value: "zmw",
    title: "Zambian Kwacha",
    symbol: "ZWM",
  },
];

export const getCurrencyPrefix = (val: string): string => {
  // TODO - get the correct currency prefix
  return val;
};
