"use strict";

const db = require("../server/db");
const {
  User,
  Food,
  Recipe,
  ExpirationDate,
  UserFood,
  UserRecipe
} = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = [
    {
      firstName: "Emma",
      lastName: "Curtis",
      email: "emma@gmail.com",
      password: "123"
    },
    {
      firstName: "Meredyth",
      lastName: "Houpos",
      email: "mer@gamil.com",
      password: "234"
    }
  ];

  const recipes = [
    {
      name: "mac n cheese",
      url:
        "https://www.momontimeout.com/best-homemade-baked-mac-and-cheese-recipe/",
      apiId: 1,
      imgUrl:
        "https://www.foodiecrush.com/wp-content/uploads/2017/10/Instant-Pot-Macaroni-and-Cheese-foodiecrush.com-019.jpg"
    },
    {
      name: "apple-pie",
      url:
        "https://www.momontimeout.com/best-homemade-baked-mac-and-cheese-recipe/",
      apiId: 2,
      imgUrl:
        "https://image.shutterstock.com/image-photo/red-apple-on-white-background-260nw-158989157.jpg"
    }
  ];
  const food = [
    {
      name: "orange"
    },
    {
      name: "apple"
    }
  ];

  const user_foods = [
    {
      eatBy: 5,
      userId: 1,
      foodId: 2
    },
    {
      eatBy: 5,
      userId: 2,
      foodId: 1
    }
  ];

  const users_recipes = [
    {
      recipeId: 1,
      userId: 2
    },
    {
      recipeId: 2,
      userId: 1
    }
  ];

  const expirationDates = [
    {
      idremove: 30,
      name: "Whipped topping",
      keywords: "Whipped topping,topping,tub,whipped",
      life: "14 Months"
    },
    {
      idremove: 20,
      name: "Eggs",
      keywords: "Eggs,raw whites, yolks,egg,whites",
      life: "4 Days"
    },
    {
      idremove: 233,
      name: "Berries",
      keywords:
        "Berries,berry,cherries,cherry,goose berries,goose berry,lychee,gooseberries",
      life: "12 Months"
    },
    {
      idremove: 234,
      name: "Berries",
      keywords:
        "Berries,berry,blackberries,blackberry,boysenberries,boysenberry,currant",
      life: "12 Months"
    },
    {
      idremove: 235,
      name: "Blueberries",
      keywords: "Blueberries,blueberry,berries,berry",
      life: "12 Months"
    },
    {
      idremove: 236,
      name: "Cherimoya",
      keywords: "Cherimoya",
      life: "4 Days"
    },
    {
      idremove: 240,
      name: "Cranberries",
      keywords: "Cranberries,cranberry",
      life: "12 Months"
    },
    {
      idremove: 248,
      name: "Pineapple",
      keywords: "Pineapple",
      life: "7 Days"
    },
    {
      idremove: 249,
      name: "Plantains",
      keywords: "Plantains,plantain",
      life: "5 Days"
    },
    {
      idremove: 250,
      name: "Pomegranate",
      keywords: "Pomegranate",
      life: "12 Months"
    },
    {
      idremove: 277,
      name: "Potatoes",
      keywords: "Potatoes,potato",
      life: "12 Months"
    },
    {
      idremove: 364,
      name: "Nuts",
      keywords: "Nuts,nut,jar,jars,cans,can",
      life: "12 Months"
    },
    {
      idremove: 403,
      name: "Quinoa",
      keywords: "Quinoa,cook,cooked",
      life: "7 Days"
    },
    {
      idremove: 456,
      name: "Star fruit",
      keywords: "Star fruit,fruit,fruits",
      life: "1 Weeks"
    },
    {
      idremove: 457,
      name: "Prickly pear",
      keywords: "Prickly pear,pear,pickle",
      life: "5 Days"
    },
    {
      idremove: 458,
      name: "Pitaya/dragon fruit",
      keywords: "Pitaya,dragon fruit,fruit,fruits",
      life: "5 Days"
    },
    {
      idremove: 459,
      name: "Strawberries",
      keywords: "Strawberries,strawberry",
      life: "12 Months"
    },
    {
      idremove: 460,
      name: "Raspberries",
      keywords: "Raspberries,raspberry",
      life: "12 Months"
    },
    {
      idremove: 471,
      name: "Kohlrabi",
      keywords: "Kohlrabi",
      life: "12 Months"
    },
    {
      idremove: 472,
      name: "Watermelon",
      keywords: "Watermelon",
      life: "12 Months"
    },
    {
      idremove: 473,
      name: "Cantaloupe",
      keywords: "Cantaloupe",
      life: "12 Months"
    },
    {
      idremove: 474,
      name: "Cherries",
      keywords: "Cherries,cherry",
      life: "12 Months"
    },
    {
      idremove: 475,
      name: "Honeydew",
      keywords: "Honeydew",
      life: "12 Months"
    },
    {
      idremove: 482,
      name: "Flaxseed",
      keywords: "Flaxseed,ground",
      life: "12 Months"
    },
    {
      idremove: 497,
      name: "Canadian bacon",
      keywords: "Canadian bacon,bacon,sliced",
      life: "10 Days"
    },
    {
      idremove: 504,
      name: "Bacon grease",
      keywords: "Bacon grease,bacon,grease",
      life: "6 Months"
    },
    {
      idremove: 512,
      name: "Apple juice",
      keywords: "Apple juice,juice,fresh squeezed,squeezed,juices,apple",
      life: "6 Days"
    },
    {
      idremove: 513,
      name: "Lemon juice",
      keywords: "Lemon juice,juice,fresh squeezed,squeezed,juices",
      life: "6 Days"
    },
    {
      idremove: 514,
      name: "Carrot juice",
      keywords: "Carrot juice,juice,fresh squeezed,squeezed,juices",
      life: "6 Days"
    },
    {
      idremove: 517,
      name: "Coffee",
      keywords: "Coffee,commercial ground, non-vacuum",
      life: "12 Months"
    },
    {
      idremove: 527,
      name: "Puff pastry",
      keywords: "Puff pastry,pastry,pastries,puff",
      life: "12 Months"
    },
    {
      idremove: 539,
      name: "Applesauce",
      keywords: "Applesauce,homemade",
      life: "3 Weeks"
    },
    {
      idremove: 548,
      name: "Pizza",
      keywords: "Pizza,frozen",
      life: "4 Days"
    },
    {
      idremove: 554,
      name: "Barley",
      keywords: "Barley,whole grain,grain",
      life: "6 Months"
    },
    {
      idremove: 558,
      name: "Farro",
      keywords: "Farro,whole grain,grain",
      life: "6 Months"
    },
    {
      idremove: 564,
      name: "Rye",
      keywords: "Rye,whole grain,grain",
      life: "6 Months"
    },
    {
      idremove: 568,
      name: "Spelt",
      keywords: "Spelt,whole grain,grain",
      life: "6 Months"
    },
    {
      idremove: 622,
      name: "Salsa",
      keywords: "homemade salsa,homemade,salsa",
      life: "7 Days"
    },
    {
      idremove: 630,
      name: "Coconut flour",
      keywords: "coconut flour,coconut,flour",
      life: "12 Months"
    },
    {
      idremove: 634,
      name: "Polenta",
      keywords: "polenta,frozen,frozen polenta",
      life: "12 Months"
    },
    {
      idremove: 659,
      name: "Croutons",
      keywords: "croutons,crouton,bread",
      life: "6 Months"
    },
    {
      idremove: 523,
      name: "Zucchini",
      keywords: "Zucchini,fresh, whole",
      life: "1 Weeks"
    },
    {
      idremove: 121,
      name: "Stuffed, raw chicken breasts",
      keywords: "Stuffed,raw chicken breasts,breast,chicken,chicken breasts",
      life: "2 Days"
    },
    {
      idremove: 524,
      name: "Hot peppers",
      keywords: "Hot peppers,pepper",
      life: "9 Months"
    },
    {
      idremove: 532,
      name: "Frying oil",
      keywords: "Frying oil,re-used oil,oil",
      life: "1 Months"
    },
    {
      idremove: 573,
      name: "Rabbit",
      keywords: "Rabbit,whole, fresh",
      life: "2 Days"
    },
    {
      idremove: 598,
      name: "Bison",
      keywords: "bison whole,bison,whole",
      life: "5 Days"
    },
    {
      idremove: 631,
      name: "Pine nuts",
      keywords: "pine nuts,pine nut,pine,nut,nuts",
      life: "3 Weeks"
    },
    {
      idremove: 190,
      name: "Fruit pies",
      keywords:
        "Pies,fruit,pie,apple,apple pie,peach,peach pie,blueberry,blueberry pie,cherry,cherry pie,apricot,apricot pie,blackberry,blackberry pie",
      life: "2 Days"
    },
    {
      idremove: 191,
      name: "Pies",
      keywords: "Pies,mincemeat,pie,meat,mince",
      life: "2 Hours"
    },
    {
      idremove: 229,
      name: "Apples",
      keywords: "Apples,apple",
      life: "8 Months"
    },
    {
      idremove: 246,
      name: "Papaya, mango, feijoa, passionfruit, casaha melon",
      keywords:
        "Papaya,mango,feijoa,passionfruit,casaha melon,melon,fruit,passion",
      life: "8 Months"
    },
    {
      idremove: 551,
      name: "Amaranth",
      keywords: "Amaranth,whole grain,grain",
      life: "4 Months"
    },
    {
      idremove: 562,
      name: "Oats",
      keywords: "Oat,Oats,whole grain,grain",
      life: "4 Months"
    },
    {
      idremove: 566,
      name: "Sorghum",
      keywords: "Sorghum,whole grain,grain",
      life: "4 Months"
    },
    {
      idremove: 570,
      name: "Teff",
      keywords: "Teff,whole grain,grain",
      life: "4 Months"
    },
    {
      idremove: 125,
      name: "Cooked poultry dishes",
      keywords: "Cooked poultry dishes,poultry dishes,poultry",
      life: "4 Days"
    },
    {
      idremove: 165,
      name: "Cooked rice",
      keywords: "Cooked rice,rice",
      life: "6 Days"
    },
    {
      idremove: 172,
      name: "Meats",
      keywords: "Meats,gravy,broth,meat",
      life: "4 Days"
    },
    {
      idremove: 538,
      name: "Yeast",
      keywords: "Yeast,packaged",
      life: "6 Months"
    },
    {
      idremove: 555,
      name: "Barley",
      keywords: "Barley,flour, meal",
      life: "3 Months"
    },
    {
      idremove: 559,
      name: "Farro",
      keywords: "Farro,flour, meal",
      life: "3 Months"
    },
    {
      idremove: 565,
      name: "Rye",
      keywords: "Rye,flour, meal",
      life: "3 Months"
    },
    {
      idremove: 569,
      name: "Spelt",
      keywords: "Spelt,flour, meal",
      life: "3 Months"
    },
    {
      idremove: 609,
      name: "Chorizo",
      keywords:
        "smoked chorizo,chorizo,processed chorizo,smoked,processed,cooked,cooked processed chorizo,cooked smoked chorizo",
      life: "1 Years"
    },
    {
      idremove: 654,
      name: "Ham",
      keywords: "ham,uncured,fresh,uncooked,uncured ham,uncured ham uncooked",
      life: "5 Days"
    },
    {
      idremove: 660,
      name: "Bacon",
      keywords:
        "uncured bacon,nitrite-free bacon,natural bacon,uncured,nitrite-free,nitrite,natural,bacon",
      life: "7 Days"
    },
    {
      idremove: 122,
      name: "Raw kabobs with vegetables",
      keywords: "Raw kabobs,vegetables,kabobs,kabob,vegetable",
      life: "2 Days"
    },
    {
      idremove: 126,
      name: "Fried chicken",
      keywords: "Fried chicken,chicken",
      life: "4 Days"
    },
    {
      idremove: 142,
      name: "Crab meat",
      keywords: "Crab meat,meat,fresh,crab",
      life: "3 Days"
    },
    {
      idremove: 167,
      name: "Guacamole",
      keywords: "Guacamole",
      life: "4 Days"
    },
    {
      idremove: 356,
      name: "Crackers",
      keywords: "Crackers,cracker",
      life: "4 Months"
    },
    {
      idremove: 553,
      name: "Amaranth",
      keywords: "Amaranth,flour,meal",
      life: "2 Months"
    },
    {
      idremove: 556,
      name: "Buckwheat",
      keywords: "Buckwheat,whole grain,grain",
      life: "2 Months"
    },
    {
      idremove: 560,
      name: "Millet",
      keywords: "Millet,whole grain,grain",
      life: "2 Months"
    },
    {
      idremove: 563,
      name: "Oats",
      keywords: "Oats,Oat,flour, meal",
      life: "2 Months"
    },
    {
      idremove: 567,
      name: "Sorghum",
      keywords: "Sorghum,flour, meal",
      life: "2 Months"
    },
    {
      idremove: 571,
      name: "Teff",
      keywords: "Teff,flour, meal",
      life: "2 Months"
    },
    {
      idremove: 588,
      name: "Parsley",
      keywords: "parsley",
      life: "3 Days"
    },
    {
      idremove: 599,
      name: "Bison",
      keywords: "ground bison,bison,ground",
      life: "2 Days"
    },
    {
      idremove: 605,
      name: "Cheese Curds",
      keywords: "cheese curd,cheese,curd,curds,cheese curds",
      life: "2 Weeks"
    },
    {
      idremove: 653,
      name: "Ham",
      keywords:
        "ham,uncured,fresh,cooked,uncured ham,fully cooked,fully cooked uncured ham",
      life: "4 Days"
    },
    {
      idremove: 435,
      name: "Orange juice",
      keywords:
        "Orange juice,orange,juice,freshly squeezed,squeezed,freshly,fresh,sqeeze",
      life: "3 Days"
    },
    {
      idremove: 22,
      name: "Egg dishes",
      keywords: "Egg dishes,egg,dishes",
      life: "4 Days"
    },
    {
      idremove: 160,
      name: "Leftovers",
      keywords: "Leftovers,meat,fish,poultry,egg,leftover",
      life: "4 Days"
    },
    {
      idremove: 171,
      name: "Main dishes or meals",
      keywords: "Main dishes,meals,hot,refrigerated,dishes,dish,meal",
      life: "3 Months"
    },
    {
      idremove: 176,
      name: "Soup, stews",
      keywords: "Soup,stews,stew",
      life: "4 Days"
    },
    {
      idremove: 194,
      name: "Quiche",
      keywords: "Quiche",
      life: "2 Hours"
    },
    {
      idremove: 232,
      name: "Bananas",
      keywords: "Bananas,banana",
      life: "3 Days"
    },
    {
      idremove: 427,
      name: "Bagel",
      keywords: "Bagel,fresh baked,baked",
      life: "2 Days"
    },
    {
      idremove: 428,
      name: "Bagel",
      keywords: "Bagel,commercially frozen,frozen",
      life: "3 Months"
    },
    {
      idremove: 429,
      name: "Muffin",
      keywords:
        "Muffin,homemade including bran,homemade,bran,blueberry,banana,corn,chocolate chip,including bran,chocolate,chip",
      life: "7 Days"
    },
    {
      idremove: 430,
      name: "Muffin",
      keywords: "Muffin,commercially packaged,packaged",
      life: "7 Days"
    },
    {
      idremove: 438,
      name: "Whole wheat bread",
      keywords:
        "Whole wheat bread,Whole,wheat,bread,homemade,whole wheat,wheat bread",
      life: "5 Days"
    },
    {
      idremove: 439,
      name: "Whole wheat bread",
      keywords:
        "Whole wheat flour,Whole,wheat,flour,wheat flour,whole wheat,commercially baked,pre sliced,sliced,slice,baked,commercially,commercial",
      life: "5 Days"
    },
    {
      idremove: 461,
      name: "Broth",
      keywords: "Broth,homemade",
      life: "4 Days"
    },
    {
      idremove: 462,
      name: "Beef broth/stock/consommÃ©",
      keywords:
        "Beef broth, beef stock,beef consommÃ©,consommÃ©,commercially produced",
      life: "7 Days"
    },
    {
      idremove: 463,
      name: "Vegetable stock/broth",
      keywords:
        "Vegetable stock,Vegetable broth,broth,commercial vegetable stock,commercial vegetable broth,vegetable",
      life: "7 Days"
    },
    {
      idremove: 464,
      name: "Chicken broth/stock/consommÃ©",
      keywords: "Chicken broth,chicken stock,consommÃ©,commercially produced",
      life: "7 Days"
    },
    {
      idremove: 469,
      name: "Baby carrots",
      keywords: "Baby carrots, carrot,baby carrot",
      life: "3 Months"
    },
    {
      idremove: 479,
      name: "Tomato paste",
      keywords: "Tomato paste",
      life: "3 Months"
    },
    {
      idremove: 519,
      name: "Macaroons",
      keywords: "Macaroons,Macaroon,french",
      life: "2 Days"
    },
    {
      idremove: 578,
      name: "Coconut cream",
      keywords: "coconut cream,coconut,cream,canned,can",
      life: "3 Months"
    },
    {
      idremove: 579,
      name: "Coconut milk",
      keywords: "coconut milk,coconut,milk,canned,can",
      life: "3 Months"
    },
    {
      idremove: 606,
      name: "Vegetable soup",
      keywords: "vegetable soup,vegetable,soup",
      life: "4 Days"
    },
    {
      idremove: 612,
      name: "Cinnamon rolls",
      keywords: "cinnamon rolls,cinnamon roll,cinnamon,roll,rolls",
      life: "3 Days"
    },
    {
      idremove: 615,
      name: "Bratwurst",
      keywords: "fresh brautwurst,brautwurst,fresh",
      life: "3 Days"
    },
    {
      idremove: 616,
      name: "Bratwurst",
      keywords:
        "smoked brautwurst,processed brautwurst,bratwurst,smoked,processed",
      life: "7 Days"
    },
    {
      idremove: 241,
      name: "Dates",
      keywords: "Dates",
      life: "2 Years"
    },
    {
      idremove: 379,
      name: "Coffee",
      keywords: "Coffee,home ground,non vacuum,ground,home,vacuum",
      life: "2 Years"
    },
    {
      idremove: 437,
      name: "Whole wheat flour",
      keywords: "Whole wheat flour,Whole,wheat,flour,wheat flour,whole wheat",
      life: "12 Months"
    },
    {
      idremove: 632,
      name: "Pecans",
      keywords: "chopped pecans,pecan,pecans,chopped",
      life: "12 Months"
    },
    {
      idremove: 641,
      name: "Yuzu juice",
      keywords: "yuzu juice,yuzu,juice",
      life: "2 Years"
    },
    {
      idremove: 661,
      name: "Mustard",
      keywords: "mustard,dried mustard,ground mustard,dried ground mustard",
      life: "6 Months"
    },
    {
      idremove: 12,
      name: "Cream",
      keywords: "Cream,whipped, sweetened",
      life: "1 Days"
    },
    {
      idremove: 31,
      name: "Yogurt",
      keywords: "Yogurt",
      life: "2 Months"
    },
    {
      idremove: 128,
      name: "Poultry pieces",
      keywords: "Poultry pieces,gravy,broth,poultry,pieces,piece",
      life: "4 Days"
    },
    {
      idremove: 136,
      name: "Cooked fish",
      keywords: "Cooked fish,fish,all",
      life: "4 Days"
    },
    {
      idremove: 161,
      name: "Leftovers",
      keywords:
        "leftover,leftovers,without meat,fish,poultry,egg,cooked vegetables,rice,potatoes,meat,vegetables,potato,vegetable",
      life: "4 Days"
    },
    {
      idremove: 162,
      name: "Leftovers",
      keywords: "Leftovers,pizza",
      life: "4 Days"
    },
    {
      idremove: 164,
      name: "Cooked pasta",
      keywords: "Cooked pasta,pasta",
      life: "5 Days"
    },
    {
      idremove: 170,
      name: "Luncheon meat or poultry",
      keywords: "Luncheon meat,poultry,store sliced,meat,luncheon,store,sliced",
      life: "2 Months"
    },
    {
      idremove: 174,
      name: "Pate",
      keywords: "Pate",
      life: "2 Months"
    },
    {
      idremove: 192,
      name: "Pies",
      keywords: "Pies,Pie,pecan",
      life: "2 Hours"
    },
    {
      idremove: 193,
      name: "Pies",
      keywords: "Pies,Pie,pumpkin",
      life: "2 Hours"
    },
    {
      idremove: 247,
      name: "Peaches, nectarines, plums, pears, sapote",
      keywords:
        "Peaches,nectarines,plums,pears,sapote,peach,nectarine,plum,pear",
      life: "5 Days"
    },
    {
      idremove: 311,
      name: "Fresh pasta",
      keywords: "Fresh pasta,pasta",
      life: "2 Days"
    },
    {
      idremove: 496,
      name: "Canadian bacon",
      keywords: "Canadian bacon,bacon,whole",
      life: "2 Weeks"
    },
    {
      idremove: 529,
      name: "Pie crust",
      keywords: "Pie crust,crust,refrigerated,pie",
      life: "Package use-by date"
    },
    {
      idremove: 557,
      name: "Buckwheat",
      keywords: "Buckwheat,flour, meal,meal",
      life: "1 Months"
    },
    {
      idremove: 561,
      name: "Millet",
      keywords: "Millet,flour, meal",
      life: "1 Months"
    },
    {
      idremove: 607,
      name: "Chorizo",
      keywords: "fresh chorizo,chorizo",
      life: "2 Days"
    },
    {
      idremove: 608,
      name: "Chorizo",
      keywords:
        "smoked chorizo,chorizo,processed chorizo,smoked,processed,uncooked,uncooked processed chorizo,uncooked smoked chorizo",
      life: "1 Weeks"
    },
    {
      idremove: 650,
      name: "Anchovies",
      keywords: "anchovies,anchovy,canned anchovies",
      life: "2 Months"
    },
    {
      idremove: 238,
      name: "Coconut",
      keywords: "Coconut,shredded",
      life: "1 Years"
    },
    {
      idremove: 285,
      name: "Tamarind",
      keywords: "Tamarind",
      life: "1 Years"
    },
    {
      idremove: 643,
      name: "Kugel",
      keywords: "kugel,commercial,commercial kugel",
      life: "1 Years"
    },
    {
      idremove: 658,
      name: "Mung bean",
      keywords:
        "mung beans,mung bean,mung,bean,dry mung beans,dry,bag,bagged mung beans",
      life: "1 Years"
    },
    {
      idremove: 243,
      name: "Grapes",
      keywords: "Grapes,grape",
      life: "1 Months"
    },
    {
      idremove: 245,
      name: "Melons",
      keywords: "Melons,melon",
      life: "1 Months"
    },
    {
      idremove: 333,
      name: "Pesto",
      keywords: "Pesto,jarred,jar",
      life: "1 Months"
    },
    {
      idremove: 644,
      name: "Kugel",
      keywords: "kugel,homemade,homemade kugel",
      life: "4 Days"
    },
    {
      idremove: 652,
      name: "Prosciutto",
      keywords: "prosciutto",
      life: "3 Months"
    },
    {
      idremove: 21,
      name: "Eggs",
      keywords: "Eggs,egg,hard boiled cooked,boiled,hard boiled",
      life: "1 Weeks"
    },
    {
      idremove: 26,
      name: "Pudding",
      keywords: "Pudding",
      life: "Package use-by date"
    },
    {
      idremove: 27,
      name: "Sour cream",
      keywords: "Sour cream,cream,sour",
      life: "Package use-by date"
    },
    {
      idremove: 166,
      name: "Fruit, cut",
      keywords: "Fruit,cut",
      life: "Package use-by date"
    },
    {
      idremove: 169,
      name: "Hummus",
      keywords:
        "Hummus,traditional,no preservatives,not pasteurized,no preservative,preservatives,preservative,pasteurized",
      life: "7 Days"
    },
    {
      idremove: 226,
      name: "Tube cans",
      keywords:
        "Tube cans,biscuits,biscuit,rolls,roll,pizza,pizza dough,dough,tube can,can,tube",
      life: "Package use-by date"
    },
    {
      idremove: 230,
      name: "Apricots",
      keywords: "Apricots,Apricot",
      life: "5 Days"
    },
    {
      idremove: 231,
      name: "Avocados",
      keywords: "Avocados,Avocado",
      life: "4 Days"
    },
    {
      idremove: 242,
      name: "Guava",
      keywords: "Guava",
      life: "4 Days"
    },
    {
      idremove: 244,
      name: "Kiwi fruit",
      keywords: "Kiwi fruit,kiwi,fruit",
      life: "6 Days"
    },
    {
      idremove: 251,
      name: "Artichokes, whole",
      keywords: "Artichokes,artichoke,whole",
      life: "7 Days"
    },
    {
      idremove: 264,
      name: "Cucumbers",
      keywords: "Cucumbers,cucumber",
      life: "7 Days"
    },
    {
      idremove: 271,
      name: "Lettuce",
      keywords: "Lettuce,iceberg,romaine",
      life: "5 Days"
    },
    {
      idremove: 272,
      name: "Spinach",
      keywords: "Lettuce,leaf,spinach",
      life: "5 Days"
    },
    {
      idremove: 280,
      name: "Radishes",
      keywords: "Radishes,radish",
      life: "14 Days"
    },
    {
      idremove: 391,
      name: "Kumquats",
      keywords: "Kumquats",
      life: "When Ripe"
    },
    {
      idremove: 392,
      name: "Bagged greens",
      keywords: "Bagged greens,leaf,spinach,lettuce,bagged,greens,green",
      life: "5 Days"
    },
    {
      idremove: 394,
      name: "Egg salad",
      keywords: "Egg salad,egg,salad",
      life: "4 Days"
    },
    {
      idremove: 395,
      name: "Potato salad",
      keywords: "Potato salad,potato,salad",
      life: "5 Days"
    },
    {
      idremove: 396,
      name: "Seafood salads",
      keywords:
        "Seafood salads,tuna salad, shrimp salad, salmon salad, mixed seafood salad,seafood,salads,salad,tuna,shrimp,salmon,mixed,mixed seafood,seafood salad,",
      life: "4 Days"
    },
    {
      idremove: 397,
      name: "Chicken salad",
      keywords: "Chicken salad,chicken,salad",
      life: "4 Days"
    },
    {
      idremove: 398,
      name: "Ham salad",
      keywords: "Ham salad,ham,salad",
      life: "4 Days"
    },
    {
      idremove: 399,
      name: "Pasta salad",
      keywords: "Pasta salad,pasta,salad",
      life: "5 Days"
    },
    {
      idremove: 467,
      name: "Ricotta",
      keywords: "Ricotta",
      life: "2 Weeks"
    },
    {
      idremove: 518,
      name: "Milk",
      keywords: "Milk,lactose,lactose-free",
      life: "7 Days"
    },
    {
      idremove: 528,
      name: "Biscuits",
      keywords: "Biscuits,Biscuits,refrigerated",
      life: "Package use-by date"
    },
    {
      idremove: 633,
      name: "Polenta",
      keywords: "polenta,shelf stable,shelf stable polenta",
      life: "Package use-by date"
    },
    {
      idremove: 476,
      name: "Peanuts",
      keywords: "Peanuts,boiled, shelled,peanut",
      life: "Indefinitely"
    },
    {
      idremove: 639,
      name: "Apple cider",
      keywords: "apple cider,apple,cider",
      life: "3 Weeks"
    },
    {
      idremove: 640,
      name: "Yuzu",
      keywords: "yuzu,yuzu fruit",
      life: "7 Days"
    },
    {
      idremove: 13,
      name: "Half and Half",
      keywords: "Cream,half",
      life: "7 Days"
    },
    {
      idremove: 14,
      name: "Heavy Cream",
      keywords: "Cream,heavy",
      life: "1 Month"
    },
    {
      idremove: 25,
      name: "Milk",
      keywords: "Milk,plain,flavored,flavor",
      life: "Package use-by date"
    },
    {
      idremove: 102,
      name: "Jerky",
      keywords: "Jerky,homemade",
      life: "2 Months"
    },
    {
      idremove: 123,
      name: "Turducken",
      keywords: "Turducken"
    },
    {
      idremove: 135,
      name: "Surimi seafood",
      keywords: "Surimi seafood,surimi,sea,food",
      life: "Package use-by date"
    },
    {
      idremove: 149,
      name: "Cooked shellfish",
      keywords: "Cooked shellfish,shellfish,fish,cooked",
      life: "4 Days"
    },
    {
      idremove: 155,
      name: "Tofu",
      keywords: "Tofu",
      life: "4 Days"
    },
    {
      idremove: 159,
      name: "Re-hydrated textured soy protein",
      keywords:
        "Re hydrated textured soy protein,protein,TSP,soy,soy protein,textured soy protein,Re hydrated",
      life: "4 Days"
    },
    {
      idremove: 177,
      name: "Casseroles",
      keywords: "Casseroles,Casserole",
      life: "4 Days"
    },
    {
      idremove: 204,
      name: "Flour",
      keywords: "Flour,white",
      life: "1 Year"
    },
    {
      idremove: 221,
      name: "Sugar",
      keywords: "Sugar,brown",
      life: "Indefinitely"
    },
    {
      idremove: 222,
      name: "Sugar",
      keywords: "Sugar,granulated",
      life: "Indefinitely"
    },
    {
      idremove: 223,
      name: "Sugar",
      keywords: "Sugar,confectioners,confectioner",
      life: "Indefinitely"
    },
    {
      idremove: 227,
      name: "Ready-to-bake pie crust",
      keywords: "Ready to bake pie crust,pie,crust,bake,ready",
      life: "Package use-by date"
    },
    {
      idremove: 228,
      name: "Cookie dough",
      keywords: "Cookie dough,cookie,dough",
      life: "Package use-by date"
    },
    {
      idremove: 252,
      name: "Asparagus",
      keywords: "Asparagus",
      life: "4 Days"
    },
    {
      idremove: 255,
      name: "Beets",
      keywords: "Beets",
      life: "4 Days"
    },
    {
      idremove: 256,
      name: "Bok choy",
      keywords: "Bok choy",
      life: "4 Days"
    },
    {
      idremove: 257,
      name: "Broccoli and broccoli raab (rapini)",
      keywords: "Broccoli,broccoli raab,rapini,raab",
      life: "4 Days"
    },
    {
      idremove: 258,
      name: "Brussels sprouts",
      keywords: "Brussels sprouts,brussels,sprouts,sprout,brussel",
      life: "4 Days"
    },
    {
      idremove: 259,
      name: "Cabbage",
      keywords: "Cabbage",
      life: "2 Months"
    },
    {
      idremove: 260,
      name: "Carrots",
      keywords: "Carrots,carrot",
      life: "4 Weeks"
    },
    {
      idremove: 2600,
      name: "Parsnips",
      keywords: "parsnips,parsnip",
      life: "3 Weeks"
    },
    {
      idremove: 261,
      name: "Cauliflower",
      keywords: "Cauliflower",
      life: "2 Weeks"
    },
    {
      idremove: 262,
      name: "Celery",
      keywords: "Celery",
      life: "2 Weeks"
    },
    {
      idremove: 263,
      name: "Corn on the cob",
      keywords: "Corn,cob",
      life: "3 Days"
    },
    {
      idremove: 265,
      name: "Eggplant",
      keywords: "Eggplant,egg",
      life: "10 Days"
    },
    {
      idremove: 266,
      name: "Garlic",
      keywords: "Garlic",
      life: "6 Months"
    },
    {
      idremove: 267,
      name: "Ginger root",
      keywords: "Ginger root,ginger,root",
      life: "1 Month"
    },
    {
      idremove: 270,
      name: "Leeks",
      keywords: "Leeks,leek",
      life: "2 Weeks"
    },
    {
      idremove: 274,
      name: "Okra",
      keywords: "Okra",
      life: "3 Days"
    },
    {
      idremove: 275,
      name: "Onions",
      keywords: "Onions,yellow,white,red,onion",
      life: "3 Months"
    },
    {
      idremove: 276,
      name: "Green Onions",
      keywords: "Onions,spring,green,onion",
      life: "2 Weeks"
    },
    {
      idremove: 279,
      name: "Pumpkins",
      keywords: "Pumpkins,pumpkin",
      life: "12 Weeks"
    },
    {
      idremove: 281,
      name: "Rhubarb",
      keywords: "Rhubarb",
      life: "7 Days"
    },
    {
      idremove: 282,
      name: "Rutabagas",
      keywords: "Rutabagas",
      life: "4 Months"
    },
    {
      idremove: 283,
      name: "Zucchini",
      keywords: "Squash,summer,zucchini",
      life: "4 Days"
    },
    {
      idremove: 284,
      name: "Winter Squash",
      keywords: "Squash,winter",
      life: "5 Days"
    },
    {
      idremove: 287,
      name: "Tomatoes",
      keywords: "Tomatoes,tomato",
      life: "When Ripe"
    },
    {
      idremove: 288,
      name: "Turnips",
      keywords: "Turnips,turnip",
      life: "2 Weeks"
    },
    {
      idremove: 290,
      name: "Dough",
      keywords: "Dough,commercial,bread,cookie",
      life: "4 Days"
    },
    {
      idremove: 291,
      name: "Egg substitutes",
      keywords: "Egg substitutes,egg,substitute,Egg substitute",
      life: "4 Days"
    },
    {
      idremove: 292,
      name: "Fish",
      keywords: "Fish,breaded,bread"
    },
    {
      idremove: 293,
      name: "Fish",
      keywords: "Fish,raw,headed,gutted",
      life: "4 Days"
    },
    {
      idremove: 295,
      name: "Frozen pretzels",
      keywords: "Frozen pretzels,frozen,pretzels,pretzel",
      life: "4 Days"
    },
    {
      idremove: 300,
      name: "Lobster tails",
      keywords: "Lobster tails,tail,lobster,Lobster tail",
      life: "4 Days"
    },
    {
      idremove: 302,
      name: "Sausages",
      keywords: "Sausages,Sausage,uncooked,cooked",
      life: "4 Days"
    },
    {
      idremove: 303,
      name: "Sausages",
      keywords: "Sausages,Sausage,precooked,cooked",
      life: "4 Days"
    },
    {
      idremove: 305,
      name: "Shrimp, shellfish",
      keywords: "Shrimp,shellfish,fish",
      life: "4 Days"
    },
    {
      idremove: 306,
      name: "Soy crumbles and hot dogs",
      keywords: "Soy crumbles,hot dogs,hot dog,soy,soy crumble",
      life: "4 Days"
    },
    {
      idremove: 307,
      name: "Soy meat substitutes",
      keywords:
        "Soy meat substitutes,soy,meat,soy meat,meat substitutes,substitutes,substitute",
      life: "4 Days"
    },
    {
      idremove: 308,
      name: "Tempeh",
      keywords: "Tempeh",
      life: "4 Days"
    },
    {
      idremove: 310,
      name: "Vegetables",
      keywords: "Vegetables,vegetable",
      life: "4 Days"
    },
    {
      idremove: 322,
      name: "Dry gravy mixes",
      keywords: "Dry gravy mixes,gravy,mixes,mix,dry",
      life: "2 Days"
    },
    {
      idremove: 363,
      name: "Mushrooms",
      keywords: "Mushrooms,Mushroom,dried",
      life: "2 Weeks"
    },
    {
      idremove: 366,
      name: "Pectin",
      keywords: "Pectin",
      life: "Package use-by date"
    },
    {
      idremove: 370,
      name: "Potato chips",
      keywords: "Potato chips,potato,chips,chip,potatoes",
      life: "Package use-by date"
    },
    {
      idremove: 371,
      name: "Potatoes",
      keywords: "Potatoes,Potato,instant",
      life: "3 months"
    },
    {
      idremove: 383,
      name: "Juice, boxes",
      keywords: "Juice, boxes,box",
      life: "Package use-by date"
    },
    {
      idremove: 390,
      name: "Water",
      keywords:
        "Water,commercially bottled,bottled,commercially,bottle,commercial",
      life: "Indefinitely"
    },
    {
      idremove: 400,
      name: "Soy milk",
      keywords: "Soy milk,soy,milk",
      life: "Package use-by date"
    },
    {
      idremove: 401,
      name: "Yams/sweet potatoes",
      keywords: "Yams,sweet potatoes,potatoes,potato,yam",
      life: "7 Days"
    },
    {
      idremove: 402,
      name: "Kale",
      keywords: "Kale",
      life: "7 Days"
    },
    {
      idremove: 405,
      name: "Almond milk",
      keywords: "Almond milk,milk,almond",
      life: "Package use-by date"
    },
    {
      idremove: 406,
      name: "Rice milk",
      keywords: "Rice milk,rice,milk",
      life: "Package use-by date"
    },
    {
      idremove: 407,
      name: "Coconut milk",
      keywords: "Coconut milk,coconut,milk",
      life: "Package use-by date"
    },
    {
      idremove: 410,
      name: "Fruit cocktail",
      keywords: "Fruit cocktail,cocktail,fruit,canned,can",
      life: "18 Months"
    },
    {
      idremove: 414,
      name: "Pork roll",
      keywords: "Pork roll,Pork,roll",
      life: "Package use-by date"
    },
    {
      idremove: 431,
      name: "Muffin",
      keywords:
        "Muffin,mix,dry,commercially packaged,packaged,commercially,commercial",
      life: "9 Months"
    },
    {
      idremove: 433,
      name: "Coconut oil",
      keywords: "Coconut oil,coconut,oil",
      life: "3 Years"
    },
    {
      idremove: 436,
      name: "Roasted red peppers",
      keywords:
        "Roasted red peppers,roasted,red,peppers,jar,Roasted red,red peppers,pepper",
      life: "6 Months"
    },
    {
      idremove: 440,
      name: "Red wine",
      keywords: "Red wine,red,wine",
      life: "5 Years"
    },
    {
      idremove: 441,
      name: "White wine",
      keywords: "White wine,white,wine",
      life: "2 Years"
    },
    {
      idremove: 442,
      name: "Dry stuffing mix",
      keywords:
        "Dry stuffing mix,Dry stuffing,stuffing mix,Dry,stuffing,mix,commercially packaged,packaged,commercially,commercial,pack",
      life: "12 Months"
    },
    {
      idremove: 443,
      name: "Powdered milk",
      keywords: "Powdered milk,Powdered,milk,powder",
      life: "5 Years"
    },
    {
      idremove: 444,
      name: "Almond butter",
      keywords: "Almond butter,Almond,butter",
      life: "1 Years"
    },
    {
      idremove: 445,
      name: "Salt",
      keywords: "Salt,table,plain,iodized",
      life: "Indefinitely"
    },
    {
      idremove: 446,
      name: "Cashew butter",
      keywords: "Cashew butter,Cashew,butter",
      life: "3 Months"
    },
    {
      idremove: 484,
      name: "Cilantro",
      keywords: "Cilantro",
      life: "2 Weeks"
    },
    {
      idremove: 485,
      name: "Mint",
      keywords: "Mint",
      life: "2 Weeks"
    },
    {
      idremove: 486,
      name: "Basil",
      keywords: "Basil,dried",
      life: "12 Months"
    },
    {
      idremove: 487,
      name: "Basil",
      keywords: "Basil,fresh",
      life: "5 Days"
    },
    {
      idremove: 488,
      name: "Oregano",
      keywords: "Oregano",
      life: "2 Weeks"
    },
    {
      idremove: 489,
      name: "Rosemary",
      keywords: "Rosemary",
      life: "2 Weeks"
    },
    {
      idremove: 490,
      name: "Chives",
      keywords: "Chives",
      life: "2 Weeks"
    },
    {
      idremove: 491,
      name: "Thyme",
      keywords: "Thyme",
      life: "2 Weeks"
    },
    {
      idremove: 502,
      name: "Duck fat",
      keywords: "Duck fat,duck",
      life: "30 Days"
    },
    {
      idremove: 503,
      name: "Almond extract",
      keywords: "Almond extract",
      life: "2 Years"
    },
    {
      idremove: 505,
      name: "Cinnamon extract",
      keywords: "Cinnamon extract",
      life: "2 Years"
    },
    {
      idremove: 506,
      name: "Lemon extract",
      keywords: "Lemon extract,lemon",
      life: "2 Years"
    },
    {
      idremove: 507,
      name: "Pure vanilla extract",
      keywords: "vanilla,vanila extract",
      life: "2 Years"
    },
    {
      idremove: 508,
      name: "Butter flavor",
      keywords: "Butter flavor,butter",
      life: "2 Years"
    },
    {
      idremove: 509,
      name: "Coconut flavor",
      keywords: "Coconut flavor,coconut",
      life: "2 Years"
    },
    {
      idremove: 510,
      name: 'Genuine" Maple syrup',
      keywords: "Genuine Maple syrup,syrup,unopened, glass",
      life: "4 Years"
    },
    {
      idremove: 511,
      name: 'Genuine" Maple syrup',
      keywords: "Genuine Maple syrup,syrup,unopened, plastic",
      life: "2 Years"
    },
    {
      idremove: 515,
      name: "Hard liquors",
      keywords: "Hard liquors,liquor",
      life: "Indefinitely"
    },
    {
      idremove: 516,
      name: "Cream liquors",
      keywords: "Cream liquors,liquors,unopened,liquor",
      life: "8 Months"
    },
    {
      idremove: 522,
      name: "Quark",
      keywords: "Quark,fresh cheese,cheese",
      life: "10 Days"
    },
    {
      idremove: 526,
      name: "Swiss chard",
      keywords: "Swiss chard,chard",
      life: "10 Days"
    },
    {
      idremove: 530,
      name: "Granola",
      keywords: "Granola",
      life: "9 Months"
    },
    {
      idremove: 533,
      name: "Pork rinds",
      keywords: "Pork rinds,pork,rinds",
      life: "4 Months"
    },
    {
      idremove: 534,
      name: "Apple cider vinegar",
      keywords: "Apple cider vinegar,Apple cider, vinegar,cider,apple",
      life: "Indefinitely"
    },
    {
      idremove: 536,
      name: "Hot sauce",
      keywords: "Hot sauce,sauce",
      life: "6 Months"
    },
    {
      idremove: 540,
      name: "Pate",
      keywords: "Pate,meat",
      life: "7 Days"
    },
    {
      idremove: 541,
      name: "Pate",
      keywords: "Pate,poultry",
      life: "7 Days"
    },
    {
      idremove: 542,
      name: "Cranberry sauce",
      keywords: "Cranberry sauce,sauce,homemade",
      life: "10 Days"
    },
    {
      idremove: 545,
      name: "Vegetable juice",
      keywords: "Vegetable juice,commercial,refrigerated,vegetable",
      life: "1 Months"
    },
    {
      idremove: 547,
      name: "Marinated vegetables",
      keywords: "Marinated vegetables,vegetables,oil,vegetable",
      life: "4 Days"
    },
    {
      idremove: 549,
      name: "Salsa",
      keywords: "Salsa,fresh",
      life: "7 Days"
    },
    {
      idremove: 550,
      name: "Chia seeds",
      keywords: "Chia seeds,chia,seed,seeds",
      life: "18 Months"
    },
    {
      idremove: 552,
      name: "Bread",
      keywords: "Bread,Breads,homemade",
      life: "5 Days"
    },
    {
      idremove: 572,
      name: "Spaghetti squash",
      keywords: "Spaghetti squash,squash,whole",
      life: "2 Weeks"
    },
    {
      idremove: 574,
      name: "Spaghetti squash",
      keywords: "Spaghetti squash,squash,cut",
      life: "5 Days"
    },
    {
      idremove: 575,
      name: "Tomato sauce",
      keywords: "Tomato sauce,sauce,spaghetti, pizza",
      life: "Package use-by date"
    },
    {
      idremove: 576,
      name: "Garam masala",
      keywords: "Garam masala",
      life: "1 Years"
    },
    {
      idremove: 577,
      name: "Cherry tomatoes",
      keywords: "Cherry, tomatoes,tomato",
      life: "10 Days"
    },
    {
      idremove: 580,
      name: "Coleslaw",
      keywords:
        "coleslaw,homemade,homemade coleslaw,prepared,prepared coleslaw",
      life: "5 Days"
    },
    {
      idremove: 581,
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: "6 Months"
    },
    {
      idremove: 582,
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: "6 Months"
    },
    {
      idremove: 583,
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: "6 Months"
    },
    {
      idremove: 584,
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: "6 Months"
    },
    {
      idremove: 585,
      name: "Sunflower seeds",
      keywords: "sunflower,sunflower seed,sunflower seeds,seed,seeds",
      life: "12 Months"
    },
    {
      idremove: 590,
      name: "Sesame seeds",
      keywords: "sesame seeds,sesame,seeds,seed",
      life: "5 Years"
    },
    {
      idremove: 591,
      name: "Capers",
      keywords: "capers,caper,jar capers,in jar,jar",
      life: "Package use-by date"
    },
    {
      idremove: 592,
      name: "Chocolate hazlenut spread",
      keywords:
        "hazelnut spread, spread, hazelnut, chocolate spread, chocolate,Nutella,cocoa,cocoa spread",
      life: "Package use-by date"
    },
    {
      idremove: 594,
      name: "Tuna",
      keywords: "canned tuna,tuna,canned",
      life: "3 Years"
    },
    {
      idremove: 595,
      name: "Tuna",
      keywords: "tuna packet,tuna,packet,retort,retort packaging",
      life: "Package use-by date"
    },
    {
      idremove: 596,
      name: "Seafood",
      keywords: "canned seafood,seafood,canned",
      life: "1 Years"
    },
    {
      idremove: 601,
      name: "Salad dressing",
      keywords: "salad dressing,vinaigrette,salad,dressing,homemade",
      life: "3 Weeks"
    },
    {
      idremove: 610,
      name: "Beets",
      keywords: "pickled beets,beets,pickled",
      life: "1 Years"
    },
    {
      idremove: 614,
      name: "Bulgur",
      keywords: "bulgur",
      life: "12 Months"
    },
    {
      idremove: 617,
      name: "Edamame",
      keywords: "edamame,fresh,fresh edamame,soybeans,soybean",
      life: "5 Days"
    },
    {
      idremove: 619,
      name: "Edamame",
      keywords: "edamame,soybean,soybeans,salted,roasted,dry roasted",
      life: "12 Months"
    },
    {
      idremove: 620,
      name: "Breadcrumbs",
      keywords: "breadcrumbs,breadcrumb",
      life: "6 Months"
    },
    {
      idremove: 623,
      name: "Salsa",
      keywords: "homemade salsa,homemade,salsa",
      life: "12 Months"
    },
    {
      idremove: 624,
      name: "Barbecue Sauce",
      keywords:
        "homemade barbecue sauce,homemade sauce,homemade BBQ sauce,BBQ sauce,barbecue sauce",
      life: "12 Months"
    },
    {
      idremove: 625,
      name: "Tomato Sauce",
      keywords:
        "homemade tomato sauce,homemade sauce,homemade spaghetti sauce,spaghetti sauce,tomato sauce,homemade",
      life: "12 Months"
    },
    {
      idremove: 626,
      name: "Ghee",
      keywords: "ghee,clarified butter,clarified,butter",
      life: "8 Months"
    },
    {
      idremove: 627,
      name: "Corn syrup",
      keywords: "corn syrup,corn,syrup",
      life: "3 Years"
    },
    {
      idremove: 628,
      name: "Instant breakfast drinks",
      keywords:
        "instant breakfast drinks,instant,breakfast,drinks,instant breakfast,instant drink,carnation,bottled instant breakfast drink,bottled instant breakfast,bottled breakfast",
      life: "6 Months"
    },
    {
      idremove: 635,
      name: "Cereal or granola bars",
      keywords:
        "bars,bar,granola bars,granola bar,granola,cereal bars,cereal bar,nutrition bars,nutrition bar,energy bars,energy bar,health bars,health bar,fruit bars,fruit bar,snack bars,snack barsnack,,nut bars,nut bar,seed bars,seed bar,crunchy bars,crunchy bar,breakfast,breakfast bar,breakfast bars",
      life: "12 Months"
    },
    {
      idremove: 636,
      name: "Milk",
      keywords: "ultra pasteurized milk,milk,pasteurized,ultra",
      life: "3 Months"
    },
    {
      idremove: 638,
      name: "Celery root",
      keywords: "celeriac,celery root,celery",
      life: "1 Weeks"
    },
    {
      idremove: 642,
      name: "Pastrami",
      keywords: "pastrami",
      life: "40 Days"
    },
    {
      idremove: 647,
      name: "Aioli",
      keywords:
        "garlic aioli,aioli,garlic,mayonnaise,mayo,garlic mayo,garlic mayonnaise,mayo",
      life: "4 Days"
    },
    {
      idremove: 648,
      name: "Salad dressing",
      keywords: "homemade salad dressing,homemade,salad dressing,salad,dressing"
    },
    {
      idremove: 649,
      name: "Base",
      keywords: "beef base,vegetable base,base,beef,vegetable",
      life: "Package use-by date"
    },
    {
      idremove: 651,
      name: "Radicchio",
      keywords: "radicchio",
      life: "3 Weeks"
    },
    {
      idremove: 655,
      name: "Arugula",
      keywords: "arugula,greens,salad greens,salad",
      life: "7 Days"
    },
    {
      idremove: 656,
      name: "Mung bean",
      keywords:
        "sprouted mung beans,sprouted mung bean,sprout,mung beans,mung bean,mung,bean,mungbean,sprouts",
      life: "6 Weeks"
    },
    {
      idremove: 657,
      name: "Mung bean",
      keywords:
        "mung beans,mung bean,mung,bean,dry mung beans,dry,vacuum sealed,vacuum sealed mung beans",
      life: "10 Years"
    }
  ];

  await Promise.all(
    expirationDates.map(food => {
      return ExpirationDate.create(food);
    })
  );

  console.log(`seeded ${expirationDates.length} expiration dates`);

  await Promise.all(
    food.map(item => {
      return Food.create(item);
    })
  );

  console.log(`seeded ${food.length} foods`);

  await Promise.all(
    recipes.map(recipe => {
      return Recipe.create(recipe);
    })
  );

  console.log(`seeded ${recipes.length} recipes`);

  await Promise.all(
    users.map(user => {
      return User.create(user);
    })
  );

  console.log(`seeded ${users.length} users`);

  await Promise.all(
    user_foods.map(food => {
      return UserFood.create(food);
    })
  );

  await Promise.all(
    users_recipes.map(recipe => {
      return UserRecipe.create(recipe);
    })
  );

  console.log(`seeded ${users_recipes.length} users_recipes`);

  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
