// ═══════════════════════════════════════════════════════════════
// data.js — RMC Pulse app data
// This file is separate from index.html so it never gets
// overwritten when the app code is updated.
// Edit ONLY this file to: add RSMs, change PINs, add SS/DBs.
// ═══════════════════════════════════════════════════════════════
// ── USER STORE ──────────────────────────────────────────────
const USERS = {
  "rajesh upadhyay": {zone:"Pune", pin:"1234", role:"rsm"},
  "shivaji tamgale": {zone:"Pune Rural", pin:"1234", role:"rsm"},
  "sambhaji jadhav": {zone:"Satara", pin:"1234", role:"rsm"},
  "rahul chougule": {zone:"Kolhapur", pin:"1234", role:"rsm"},
  "nandkumar shirgave": {zone:"Sangli / Solapur / Konkan", pin:"1234", role:"rsm"},
  "chandpasha pathan": {zone:"Marathwada", pin:"1234", role:"rsm"},
  "vijay wagh": {zone:"Ahmednagar", pin:"1234", role:"rsm"},
  "syd. waseemuddin": {zone:"Aurangabad", pin:"1234", role:"rsm"},
  "naresh lade": {zone:"Jalna", pin:"1234", role:"rsm"},
  "rishabh sinha":   {zone:"All zones", pin:"9999", role:"manager"}
};

// ── MASTER DATA ──────────────────────────────────────────────
const MASTER = {
  "rajesh upadhyay": {
    ss: [
      {id:"ss_raj_1",name:"NEW MANGAL SALES, DATTA NAGAR",town:"DATTA NAGAR",secTgt:2000000},
      {id:"ss_raj_2",name:"TEAM 4 LOGISTICS",town:"TEAM 4 LOGISTICS",secTgt:2000000},
      {id:"ss_raj_3",name:"SALMA FOODS & BEVERAGES",town:"SALMA FOODS & BEVERAGES",secTgt:2500000},
      {id:"ss_raj_4",name:"SHIV SAI TRADING LONI",town:"SHIV SAI TRADING LONI",secTgt:1000000},
      {id:"ss_raj_5",name:"JAY MATA DI RETAIL",town:"JAY MATA DI RETAIL",secTgt:3000000},
    ],
    dbs: [
      {id:"db_raj_1",name:"ADESH MARKETING",ssId:"ss_raj_1",priTgt:1800000,area:"Active",mustVisit:false,soName:"nikhil kamble",vehicles:0,routeTarget:0},
      {id:"db_raj_2",name:"ABASAHEB CHAUDHARY & SONS",ssId:"ss_raj_2",priTgt:1400000,area:"Active",mustVisit:false,soName:"suraj taru",vehicles:0,routeTarget:0},
      {id:"db_raj_3",name:"BALAJI TRADING CO. PETH",ssId:"ss_raj_3",priTgt:1500000,area:"Active",mustVisit:false,soName:"",vehicles:0,routeTarget:0},
      {id:"db_raj_4",name:"SHRADDHA MARKETING",ssId:"ss_raj_4",priTgt:700000,area:"Active",mustVisit:false,soName:"shankar gaikwad",vehicles:0,routeTarget:0},
      {id:"db_raj_5",name:"AAYUSH ENTERPRISES,PUNE",ssId:"ss_raj_5",priTgt:700000,area:"Active",mustVisit:false,soName:"shankar gaikwad",vehicles:0,routeTarget:0},
      {id:"db_raj_6",name:"S K ENTERPRISES,YD",ssId:"ss_raj_1",priTgt:900000,area:"Active",mustVisit:false,soName:"suraj taru",vehicles:0,routeTarget:0},
      {id:"db_raj_7",name:"SHRI BHIMASHANKAR ENTERPRISES",ssId:"ss_raj_2",priTgt:900000,area:"Active",mustVisit:false,soName:"nikhil kamble",vehicles:0,routeTarget:0},
      {id:"db_raj_8",name:"MAHALAXMI DISTRIBUTORS,YD",ssId:"ss_raj_3",priTgt:800000,area:"Active",mustVisit:false,soName:"suraj taru",vehicles:0,routeTarget:0},
      {id:"db_raj_9",name:"SRUSHTI AGENCY",ssId:"ss_raj_4",priTgt:800000,area:"Active",mustVisit:false,soName:"nikhil kamble",vehicles:0,routeTarget:0},
      {id:"db_raj_10",name:"LAXMI TRADERS,HADAPSAR",ssId:"ss_raj_5",priTgt:500000,area:"Active",mustVisit:false,soName:"suraj taru",vehicles:0,routeTarget:0},
      {id:"db_raj_11",name:"POONAM ENTERPRISES- STATION",ssId:"ss_raj_1",priTgt:1000000,area:"Active",mustVisit:false,soName:"",vehicles:0,routeTarget:0},
      {id:"db_raj_12",name:"S P ENTERPRISES,HADAPSAR",ssId:"ss_raj_2",priTgt:150000,area:"Active",mustVisit:false,soName:"nikhil kamble",vehicles:0,routeTarget:0},
      {id:"db_raj_13",name:"Mahalaxmi Agencies,Sinhgad Road",ssId:"ss_raj_3",priTgt:800000,area:"Active",mustVisit:false,soName:"shankar gaikwad",vehicles:0,routeTarget:0},
      {id:"db_raj_14",name:"Anandratna Sales,Wagholi",ssId:"ss_raj_4",priTgt:600000,area:"Active",mustVisit:false,soName:"",vehicles:0,routeTarget:0},
      {id:"db_raj_15",name:"ANAYA TRADERS",ssId:"ss_raj_5",priTgt:250000,area:"Active",mustVisit:false,soName:"shankar gaikwad",vehicles:0,routeTarget:0},
      {id:"db_raj_16",name:"MANE ENTERPRISES,BHOR",ssId:"ss_raj_1",priTgt:250000,area:"Active",mustVisit:false,soName:"shankar gaikwad",vehicles:0,routeTarget:0},
      {id:"db_raj_17",name:"AARYA DISTRIBUTORS,SHIRUR",ssId:"ss_raj_2",priTgt:150000,area:"Active",mustVisit:false,soName:"",vehicles:0,routeTarget:0},
      {id:"db_raj_18",name:"Vimal Trading Co. Bhandgaon",ssId:"ss_raj_3",priTgt:250000,area:"Active",mustVisit:false,soName:"",vehicles:0,routeTarget:0},
      {id:"db_raj_19",name:"R S Distributor",ssId:"ss_raj_4",priTgt:250000,area:"Active",mustVisit:false,soName:"suraj taru",vehicles:0,routeTarget:0},
      {id:"db_raj_20",name:"Hadapsar",ssId:"ss_raj_1",priTgt:0,area:"Vacant",mustVisit:false,soName:"nikhil kamble",vehicles:0,routeTarget:0},
      {id:"db_raj_21",name:"Vimanagar",ssId:"ss_raj_2",priTgt:0,area:"Vacant",mustVisit:false,soName:"nikhil kamble",vehicles:0,routeTarget:0},
      {id:"db_raj_22",name:"Satara Road",ssId:"ss_raj_3",priTgt:0,area:"Vacant",mustVisit:false,soName:"suraj taru",vehicles:0,routeTarget:0},
    ]
  },
  "shivaji tamgale": {
    ss: [],
    dbs: [
      {id:"db_shi_1",name:"Pandurang Agency",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_2",name:"Vishal Enterprises",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_3",name:"GANESH AGENCY",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_4",name:"Naaz Agency",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_5",name:"Pooja Agency (Dehu Road)",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_6",name:"SHREE GANESH AGENCY - ALANDI",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_7",name:"PRATAP ENTERPRISES",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_8",name:"Hasmukh Traders (Kamshet)",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_9",name:"SHUBHAM FOODS,LONAVALA",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_10",name:"MTS FOOD PRODUCTS",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_11",name:"JAY GANESH AGENCY - CHAKAN",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_12",name:"AMIT LUNAVAT",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_13",name:"Sairam agency,Manchar",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_14",name:"DEVA ENTERPRISES",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_shi_15",name:"Sayli Agency,Narayangaon",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
    ]
  },
  "sambhaji jadhav": {
    ss: [
      {id:"ss_sam_1",name:"SHRADDHA AGENCY, SATARA CITY",town:"SATARA CITY",secTgt:100000},
      {id:"ss_sam_2",name:"Kavikesh Enterprises, LONAND",town:"LONAND",secTgt:100000},
      {id:"ss_sam_3",name:"VISHNAVI AGENCIES, SHREEGONDA",town:"SHREEGONDA",secTgt:100000},
    ],
    dbs: [
      {id:"db_sam_1",name:"SP AGENCIES, SATARA CITY",ssId:"ss_sam_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_2",name:"GANESH AGENCY, RAHMETPUR",ssId:"ss_sam_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_3",name:"SAGAR TRADING CO, VADOOJ + DAHIWADI",ssId:"ss_sam_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_4",name:"SANDEEP AGENCY, MEDHA",ssId:"ss_sam_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_5",name:"SHREE AGENCY, W STATION",ssId:"ss_sam_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_6",name:"SAI AGENCY, UMBRAJ",ssId:"ss_sam_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_7",name:"PRASHANT GEN STORES , KATAV",ssId:"ss_sam_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_8",name:"NISHA SALES ,WAI city & Interior",ssId:"ss_sam_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_9",name:"JAY BHAVANI , SHIRWAL",ssId:"ss_sam_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_10",name:"PUNEKAR AG.VITA",ssId:"ss_sam_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_11",name:"KANAK AGENCY",ssId:"ss_sam_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_sam_12",name:"VIJAY PAN SHOP, RASHIN ( KARJAT)",ssId:"ss_sam_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
    ]
  },
  "rahul chougule": {
    ss: [
      {id:"ss_rah_1",name:"AMBIKA AGENCY, KOLHAPUR",town:"KOLHAPUR",secTgt:100000},
      {id:"ss_rah_2",name:"New Sharada Store (Self WH)",town:"New Sharada Store",secTgt:100000},
      {id:"ss_rah_3",name:"NEW SAMARTH AGENCY (SELF WH)",town:"NEW SAMARTH AGENCY",secTgt:100000},
      {id:"ss_rah_4",name:"VANEET AGE, GARGOTI (Self)",town:"GARGOTI (Self)",secTgt:100000},
    ],
    dbs: [
      {id:"db_rah_1",name:"SANDEEP AGENCY",ssId:"ss_rah_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_2",name:"GURUKRUPA AGENCY, KOP CITY",ssId:"ss_rah_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_3",name:"PATIL & SONS, KOP CITY",ssId:"ss_rah_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_4",name:"SAI GAJANAN AG., KOP CITY",ssId:"ss_rah_4",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_5",name:"MAULI AGENCY, PANHALA",ssId:"ss_rah_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_6",name:"PADAMAWATI AGENCY, Rukadi",ssId:"ss_rah_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_7",name:"NAV BHARAT AGENCY, Shirol",ssId:"ss_rah_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_8",name:"M.G.AGENCY, Jaysinghpur",ssId:"ss_rah_4",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_9",name:"SAAD AGENCY, Savarde",ssId:"ss_rah_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_10",name:"GANESH AGENCY, P VADGAON",ssId:"ss_rah_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_11",name:"OMKAR AGENCY, PARGOV",ssId:"ss_rah_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_12",name:"RAVALANATHA AGENCY( AJARA IDC)",ssId:"ss_rah_4",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_13",name:"VAIBHAV AGENCY, CHANDGADH",ssId:"ss_rah_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_14",name:"SHIVANANAD AGENCY, GADHINGLAJ",ssId:"ss_rah_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_rah_15",name:"KUMBHAR AGENCY, RADHANAGARI",ssId:"ss_rah_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
    ]
  },
  "nandkumar shirgave": {
    ss: [
      {id:"ss_nan_1",name:"SIDDANATH ENTERPRISES, Islampur (DB)",town:"Islampur (DB)",secTgt:100000},
      {id:"ss_nan_2",name:"SHRI SAI PHONDAGHAT WHOLESALE",town:"SHRI SAI PHONDAGHAT WHOLESALE",secTgt:100000},
      {id:"ss_nan_3",name:"Kartick Agency",town:"Kartick Agency",secTgt:100000},
      {id:"ss_nan_4",name:"TAMBOLI AGENCY, SOLAPUR",town:"SOLAPUR",secTgt:100000},
      {id:"ss_nan_5",name:"KAIF TRADERS, AKKALKOT",town:"AKKALKOT",secTgt:100000},
    ],
    dbs: [
      {id:"db_nan_1",name:"Diamond Agency, Miraj",ssId:"ss_nan_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_2",name:"R. K. Agencies, Miraj Interior",ssId:"ss_nan_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_3",name:"Sri Sri Agency, Sangali",ssId:"ss_nan_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_4",name:"VS ENTERPRISES",ssId:"ss_nan_4",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_5",name:"Yash Agency, Sangali Interior",ssId:"ss_nan_5",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_6",name:"BALAJI, Tasgaon",ssId:"ss_nan_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_7",name:"AVINASH AGENCY(Siddhali) , Jat",ssId:"ss_nan_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_8",name:"Choudhary Agency, Kavthe Mahankal",ssId:"ss_nan_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_9",name:"Choudhary Agency, SHIRALA",ssId:"ss_nan_4",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_10",name:"PATIL TRADERS,ASHTA",ssId:"ss_nan_5",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_11",name:"SHAH AGENCIES, PALUS",ssId:"ss_nan_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_12",name:"Sachin Agency, Kankawali",ssId:"ss_nan_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_13",name:"L. R. Joshi, Devgadh",ssId:"ss_nan_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_14",name:"Mangavkar Agency",ssId:"ss_nan_4",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_15",name:"RAJALAXMI TRADERS, VENGURLA",ssId:"ss_nan_5",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_16",name:"Mahesh Agency, Kudal",ssId:"ss_nan_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_17",name:"Masurkar Agency, Kudal Interior",ssId:"ss_nan_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_18",name:"SWAMI SAMARTH AGENCY",ssId:"ss_nan_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_19",name:"MAULI AGENCY",ssId:"ss_nan_4",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_20",name:"YASH (Parab) Agency, Malvan",ssId:"ss_nan_5",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_21",name:"Shri Dattaguru Enterprises",ssId:"ss_nan_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nan_22",name:"Siddhi Agencies",ssId:"ss_nan_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
    ]
  },
  "chandpasha pathan": {
    ss: [
      {id:"ss_cha_1",name:"Vijay Sales Agencies",town:"Vijay Sales Agencies",secTgt:100000},
      {id:"ss_cha_2",name:"Lalit Agency, Udgir",town:"Udgir",secTgt:100000},
      {id:"ss_cha_3",name:"Kumarswami Agencies, Satala + Interior",town:"Satala + Interior",secTgt:100000},
      {id:"ss_cha_4",name:"Tapadia Agency, Ausa",town:"Ausa",secTgt:100000},
      {id:"ss_cha_5",name:"Samruddhi Agency, Ahmedpur",town:"Ahmedpur",secTgt:100000},
      {id:"ss_cha_6",name:"Arnav Agency, Renapur",town:"Renapur",secTgt:100000},
      {id:"ss_cha_7",name:"FAMOUS CONFECTIONARY",town:"FAMOUS CONFECTIONARY",secTgt:100000},
      {id:"ss_cha_8",name:"Good Choice Enterprises, Beed",town:"Beed",secTgt:100000},
      {id:"ss_cha_9",name:"R R AGENCIES, PARALI",town:"PARALI",secTgt:100000},
      {id:"ss_cha_10",name:"Baheti Trading, Ambejogai",town:"Ambejogai",secTgt:100000},
      {id:"ss_cha_11",name:"J. M. Agency, Majalgaon",town:"Majalgaon",secTgt:100000},
      {id:"ss_cha_12",name:"New Nayyum Kirana, Keij",town:"Keij",secTgt:100000},
      {id:"ss_cha_13",name:"Sharad Traders, Omerga",town:"Omerga",secTgt:100000},
      {id:"ss_cha_14",name:"Gajanan Agency, Kallamb",town:"Kallamb",secTgt:100000},
    ],
    dbs: [
      {id:"db_cha_1",name:"Kwality Bakery, Nilanga",ssId:"ss_cha_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_cha_2",name:"Sukhakarta Agency, Osmanabad",ssId:"ss_cha_2",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_cha_3",name:"B. R. Enterprises, Tuljapur",ssId:"ss_cha_3",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
    ]
  },
  "vijay wagh": {
    ss: [
      {id:"ss_vij_1",name:"S. R. Provision, Rahuri City",town:"Rahuri City",secTgt:100000},
    ],
    dbs: [
      {id:"db_vij_1",name:"Shrimal Agency",ssId:"ss_vij_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_vij_2",name:"ADVIKA ENTERPRISES, SHRIRAMPUR CITY",ssId:"ss_vij_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_vij_3",name:"Sariya Agency, Shevgaon",ssId:"ss_vij_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_vij_4",name:"Dalvi Agency, Supa",ssId:"ss_vij_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_vij_5",name:"Balaji Farsan, Rahata",ssId:"ss_vij_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_vij_6",name:"Sai Dwarka Agency, Shirdi",ssId:"ss_vij_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_vij_7",name:"SHRI SAI AGENCY, BABHLESHWAR",ssId:"ss_vij_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_vij_8",name:"Aarsh Agency, Akole",ssId:"ss_vij_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_vij_9",name:"Pravara Provision, Bhadardara",ssId:"ss_vij_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
    ]
  },
  "syd. waseemuddin": {
    ss: [
      {id:"ss_syd_1",name:"Mirza Agency, Kagazipura",town:"Kagazipura",secTgt:100000},
    ],
    dbs: [
      {id:"db_syd_1",name:"VISHAL AGENCY, Walunj",ssId:"ss_syd_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_syd_2",name:"Balaji Goli Buiscuit, Lasur WH",ssId:"ss_syd_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_syd_3",name:"Sagar Agency, Paithan",ssId:"ss_syd_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_syd_4",name:"Shah Agency, Bidkin",ssId:"ss_syd_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_syd_5",name:"MAHARASTRA ANDA CENTRE, KANNAD",ssId:"ss_syd_1",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
    ]
  },
  "naresh lade": {
    ss: [],
    dbs: [
      {id:"db_nar_1",name:"Ambar Traders Mantha",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nar_2",name:"GUNJAN TREDERS",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nar_3",name:"Darshna Treders Ambad",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nar_4",name:"Ganpati Treders",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
      {id:"db_nar_5",name:"Shree Samarth Agency",ssId:"ss_none",priTgt:200000,area:"Active",mustVisit:false,vehicles:0,routeTarget:0},
    ]
  },
  "rishabh sinha": {ss:[], dbs:[]}
};
// ── FOCUS SKU TARGETS ─────────────────────────────────────────
// 4 Focus SKUs tracked monthly per RSM
// Units: cases (or whatever unit your team uses)
// Keys: total, mrp10, papdiGathiya, chilliWheel, puffGarlicHerb
// Update monthly — these are Apr 2026 targets

const FOCUS_SKU_TARGETS = {
  "rajesh upadhyay": {
    month:"Apr", fy:"FY2026-27",
    total:500, mrp10:150, papdiGathiya:100, chilliWheel:100, puffGarlic:150
  },
  "shivaji tamgale": {
    month:"Apr", fy:"FY2026-27",
    total:400, mrp10:120, papdiGathiya:80, chilliWheel:80, puffGarlic:120
  },
  "sambhaji jadhav": {
    month:"Apr", fy:"FY2026-27",
    total:350, mrp10:100, papdiGathiya:70, chilliWheel:70, puffGarlic:110
  },
  "rahul chougule": {
    month:"Apr", fy:"FY2026-27",
    total:450, mrp10:130, papdiGathiya:90, chilliWheel:90, puffGarlic:140
  },
  "nandkumar shirgave": {
    month:"Apr", fy:"FY2026-27",
    total:600, mrp10:180, papdiGathiya:120, chilliWheel:120, puffGarlic:180
  },
  "chandpasha pathan": {
    month:"Apr", fy:"FY2026-27",
    total:300, mrp10:90, papdiGathiya:60, chilliWheel:60, puffGarlic:90
  },
  "vijay wagh": {
    month:"Apr", fy:"FY2026-27",
    total:350, mrp10:100, papdiGathiya:70, chilliWheel:70, puffGarlic:110
  },
  "syd. waseemuddin": {
    month:"Apr", fy:"FY2026-27",
    total:250, mrp10:70, papdiGathiya:50, chilliWheel:50, puffGarlic:80
  },
  "naresh lade": {
    month:"Apr", fy:"FY2026-27",
    total:200, mrp10:60, papdiGathiya:40, chilliWheel:40, puffGarlic:60
  }
};
