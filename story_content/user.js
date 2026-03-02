window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script3 = function()
{
  document.activeElement.blur();
const player = GetPlayer();
const input = player.GetVar("UserSearch").toLowerCase().trim();

const drugMap = {
    "glibenclamide": "glibenclamide", 
    "diatab":"glibenclamide",
    "metformin": "metformin",
    "glucophage":"metformin",
    "glimepride": "gliclazide",
    "gliclazide":"gliclazide",
    "diamicron":"gliclazide",
    "insulin glargine":"lantus",
    "lantus":"lantus",
    "levemir":"lantus",
    "long acting insulin":"lantus",
    "novorapid":"novorapid",
    "rapid acting insulin":"novorapid",
    "apidra":"novorapid",
    "lispro":"humalog",
    "lispro protamine insulin ":"humalog",
    "kiwi pen":"humalog",
    "Lispro":"humalog",
    "humalog":"humalog",
    "vidagliptin":"vidagliptin",
    "Pioglitazone":"vidagliptin",
    "Liraglutide":"vidagliptin",
    "Pioglitazone hcl":"vidagliptin",
    "januvia":"vidagliptin",
    "galvus":"vidagliptin",
    "actos":"vidagliptin",
    "trajenta":"vidagliptin",
    "jardiance":"vidagliptin",
    "trulicity":"vidagliptin",
    "victoza":"vidagliptin",
    "lipanthyl":"tovast",
    "tovast":"tovast",
    "evaren":"tovast",
    "warfarin":"warfarin",
    "depakine":"depakine",
    "epanutin":"depakine",
    "tegretol":"depakine",
    "epitam":"depakine",
    "lamictal":"depakine",
    "methotrexate":"methotrexate",
    "metotpekcat":"methotrexate",
    "metoject":"methotrexate",
    "imuran":"imuran",
    "arava":"imuran",
    "plaquenil":"imuran",
    "Levothyroxine":"Levothyroxine",
    "euthyrox":"Levothyroxine",
    "propylthiouracil":"propylthiouracil",
    "methimazole":"propylthiouracil",
    "carbimazole":"propylthiouracil",
    "neomercazole":"propylthiouracil",
    "thyrocil":"propylthiouracil",
    "augmentin":"augmentin",
    "amoxil":"augmentin",
    "zithromax":"augmentin",
    "pantazol":"pantazol",
    "ppis":"pantazol",
    "proton pump inhibitors":"pantazol",
    "peptazol":"pantazol",
    "nexium":"pantazol",
    "omiz":"pantazol",
    "vitamin":"vitamin",
    "amlodipine":"amlodipine",
    "valsartan":"amlodipine",
    "amlor":"amlodipine",
    "coversil":"amlodipine",
    "lotevan":"amlodipine",
    "furosemide":"furosemide",
    "diuretics":"furosemide",
    "lasix":"furosemide",
    "aldactone":"furosemide",
    "spironolactone":"furosemide",
};


// Initialize as a string since the variable is now Text
let match = "none"; 

for (let key in drugMap) {
    // Pro-tip: lower-case the key here just in case you 
    // have capitals in your drugMap object keys
    if (input.includes(key.toLowerCase())) {
        match = drugMap[key];
        break;
    }
}

player.SetVar("TargetSlide", match);
}

window.Script4 = function()
{
  document.activeElement.blur();
const player = GetPlayer();
const input = player.GetVar("UserSearch").toLowerCase().trim();

const drugMap = {
    "glibenclamide": "glibenclamide", 
    "diatab":"glibenclamide",
    "metformin": "metformin",
    "glucophage":"metformin",
    "glimepride": "gliclazide",
    "gliclazide":"gliclazide",
    "diamicron":"gliclazide",
    "insulin glargine":"lantus",
    "lantus":"lantus",
    "levemir":"lantus",
    "long acting insulin":"lantus",
    "novorapid":"novorapid",
    "rapid acting insulin":"novorapid",
    "apidra":"novorapid",
    "lispro":"humalog",
    "lispro protamine insulin ":"humalog",
    "kiwi pen":"humalog",
    "Lispro":"humalog",
    "humalog":"humalog",
    "vidagliptin":"vidagliptin",
    "Pioglitazone":"vidagliptin",
    "Liraglutide":"vidagliptin",
    "Pioglitazone hcl":"vidagliptin",
    "januvia":"vidagliptin",
    "galvus":"vidagliptin",
    "actos":"vidagliptin",
    "trajenta":"vidagliptin",
    "jardiance":"vidagliptin",
    "trulicity":"vidagliptin",
    "victoza":"vidagliptin",
    "lipanthyl":"tovast",
    "tovast":"tovast",
    "evaren":"tovast",
    "warfarin":"warfarin",
    "depakine":"depakine",
    "epanutin":"depakine",
    "tegretol":"depakine",
    "epitam":"depakine",
    "lamictal":"depakine",
    "methotrexate":"methotrexate",
    "metotpekcat":"methotrexate",
    "metoject":"methotrexate",
    "imuran":"imuran",
    "arava":"imuran",
    "plaquenil":"imuran",
    "Levothyroxine":"Levothyroxine",
    "euthyrox":"Levothyroxine",
    "propylthiouracil":"propylthiouracil",
    "methimazole":"propylthiouracil",
    "carbimazole":"propylthiouracil",
    "neomercazole":"propylthiouracil",
    "thyrocil":"propylthiouracil",
    "augmentin":"augmentin",
    "amoxil":"augmentin",
    "zithromax":"augmentin",
    "pantazol":"pantazol",
    "ppis":"pantazol",
    "proton pump inhibitors":"pantazol",
    "peptazol":"pantazol",
    "nexium":"pantazol",
    "omiz":"pantazol",
    "vitamin":"vitamin",
    "amlodipine":"amlodipine",
    "valsartan":"amlodipine",
    "amlor":"amlodipine",
    "coversil":"amlodipine",
    "lotevan":"amlodipine",
    "furosemide":"furosemide",
    "diuretics":"furosemide",
    "lasix":"furosemide",
    "aldactone":"furosemide",
    "spironolactone":"furosemide",
};


// Initialize as a string since the variable is now Text
let match = "none"; 

for (let key in drugMap) {
    // Pro-tip: lower-case the key here just in case you 
    // have capitals in your drugMap object keys
    if (input.includes(key.toLowerCase())) {
        match = drugMap[key];
        break;
    }
}

player.SetVar("TargetSlide", match);
}

window.Script5 = function()
{
  document.activeElement.blur();
const player = GetPlayer();
const input = player.GetVar("UserSearch").toLowerCase().trim();

const drugMap = {
    "glibenclamide": "glibenclamide", 
    "diatab":"glibenclamide",
    "metformin": "metformin",
    "glucophage":"metformin",
    "glimepride": "gliclazide",
    "gliclazide":"gliclazide",
    "diamicron":"gliclazide",
    "insulin glargine":"lantus",
    "lantus":"lantus",
    "levemir":"lantus",
    "long acting insulin":"lantus",
    "novorapid":"novorapid",
    "rapid acting insulin":"novorapid",
    "apidra":"novorapid",
    "lispro":"humalog",
    "lispro protamine insulin ":"humalog",
    "kiwi pen":"humalog",
    "Lispro":"humalog",
    "humalog":"humalog",
    "vidagliptin":"vidagliptin",
    "Pioglitazone":"vidagliptin",
    "Liraglutide":"vidagliptin",
    "Pioglitazone hcl":"vidagliptin",
    "januvia":"vidagliptin",
    "galvus":"vidagliptin",
    "actos":"vidagliptin",
    "trajenta":"vidagliptin",
    "jardiance":"vidagliptin",
    "trulicity":"vidagliptin",
    "victoza":"vidagliptin",
    "lipanthyl":"tovast",
    "tovast":"tovast",
    "evaren":"tovast",
    "warfarin":"warfarin",
    "depakine":"depakine",
    "epanutin":"depakine",
    "tegretol":"depakine",
    "epitam":"depakine",
    "lamictal":"depakine",
    "methotrexate":"methotrexate",
    "metotpekcat":"methotrexate",
    "metoject":"methotrexate",
    "imuran":"imuran",
    "arava":"imuran",
    "plaquenil":"imuran",
    "Levothyroxine":"Levothyroxine",
    "euthyrox":"Levothyroxine",
    "propylthiouracil":"propylthiouracil",
    "methimazole":"propylthiouracil",
    "carbimazole":"propylthiouracil",
    "neomercazole":"propylthiouracil",
    "thyrocil":"propylthiouracil",
    "augmentin":"augmentin",
    "amoxil":"augmentin",
    "zithromax":"augmentin",
    "pantazol":"pantazol",
    "ppis":"pantazol",
    "proton pump inhibitors":"pantazol",
    "peptazol":"pantazol",
    "nexium":"pantazol",
    "omiz":"pantazol",
    "vitamin":"vitamin",
    "amlodipine":"amlodipine",
    "valsartan":"amlodipine",
    "amlor":"amlodipine",
    "coversil":"amlodipine",
    "lotevan":"amlodipine",
    "furosemide":"furosemide",
    "diuretics":"furosemide",
    "lasix":"furosemide",
    "aldactone":"furosemide",
    "spironolactone":"furosemide",
};


// Initialize as a string since the variable is now Text
let match = "none"; 

for (let key in drugMap) {
    // Pro-tip: lower-case the key here just in case you 
    // have capitals in your drugMap object keys
    if (input.includes(key.toLowerCase())) {
        match = drugMap[key];
        break;
    }
}


player.SetVar("TargetSlide", match);
}

window.Script6 = function()
{
  document.activeElement.blur();
const player = GetPlayer();
const input = player.GetVar("UserSearch").toLowerCase().trim();

const drugMap = {
    "glibenclamide": "glibenclamide", 
    "diatab":"glibenclamide",
    "metformin": "metformin",
    "glucophage":"metformin",
    "glimepride": "gliclazide",
    "gliclazide":"gliclazide",
    "diamicron":"gliclazide",
    "insulin glargine":"lantus",
    "lantus":"lantus",
    "levemir":"lantus",
    "long acting insulin":"lantus",
    "novorapid":"novorapid",
    "rapid acting insulin":"novorapid",
    "apidra":"novorapid",
    "lispro":"humalog",
    "lispro protamine insulin ":"humalog",
    "kiwi pen":"humalog",
    "Lispro":"humalog",
    "humalog":"humalog",
    "vidagliptin":"vidagliptin",
    "Pioglitazone":"vidagliptin",
    "Liraglutide":"vidagliptin",
    "Pioglitazone hcl":"vidagliptin",
    "januvia":"vidagliptin",
    "galvus":"vidagliptin",
    "actos":"vidagliptin",
    "trajenta":"vidagliptin",
    "jardiance":"vidagliptin",
    "trulicity":"vidagliptin",
    "victoza":"vidagliptin",
    "lipanthyl":"tovast",
    "tovast":"tovast",
    "evaren":"tovast",
    "warfarin":"warfarin",
    "depakine":"depakine",
    "epanutin":"depakine",
    "tegretol":"depakine",
    "epitam":"depakine",
    "lamictal":"depakine",
    "methotrexate":"methotrexate",
    "metotpekcat":"methotrexate",
    "metoject":"methotrexate",
    "imuran":"imuran",
    "arava":"imuran",
    "plaquenil":"imuran",
    "Levothyroxine":"Levothyroxine",
    "euthyrox":"Levothyroxine",
    "propylthiouracil":"propylthiouracil",
    "methimazole":"propylthiouracil",
    "carbimazole":"propylthiouracil",
    "neomercazole":"propylthiouracil",
    "thyrocil":"propylthiouracil",
    "augmentin":"augmentin",
    "amoxil":"augmentin",
    "zithromax":"augmentin",
    "pantazol":"pantazol",
    "ppis":"pantazol",
    "proton pump inhibitors":"pantazol",
    "peptazol":"pantazol",
    "nexium":"pantazol",
    "omiz":"pantazol",
    "vitamin":"vitamin",
    "amlodipine":"amlodipine",
    "valsartan":"amlodipine",
    "amlor":"amlodipine",
    "coversil":"amlodipine",
    "lotevan":"amlodipine",
    "furosemide":"furosemide",
    "diuretics":"furosemide",
    "lasix":"furosemide",
    "aldactone":"furosemide",
    "spironolactone":"furosemide",
};


// Initialize as a string since the variable is now Text
let match = "none"; 

for (let key in drugMap) {
    // Pro-tip: lower-case the key here just in case you 
    // have capitals in your drugMap object keys
    if (input.includes(key.toLowerCase())) {
        match = drugMap[key];
        break;
    }
}

player.SetVar("TargetSlide", match);
}

};
