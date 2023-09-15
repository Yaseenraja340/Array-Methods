// indexOf()
// let array= ['a','b','c','d'];
// console.log(array.indexOf('c')!== -1);

// lastIindexOf()
// let number:string [] =[];
// console.log("Last Index Of 5 before: ", number.lastIndexOf('5'));
// number=['1','2','3','4']
// console.log("Last Index Of 5 after: ", number.lastIndexOf('5'));

// concat()
// const days:string[]=["mon","tue","wed","thur"]
// let month:string[]= ["jan","feb","mar","apr"]
// console.log("result :",days.concat(month))

// join()
// let colours=["red","black","blue"]
// console.log("result :", colours.join("1"));

// push()
// let mobiles=["iphone","itel","samsung"]
// mobiles.push("tecno")
// console.log("pushed tecno mobile: ", mobiles);
// mobiles.push("nokia")
// console.log("pushed nokia mobile: ", mobiles);

// pop()
// let cars=["civic","alto","mehran","GLI"]
// cars.pop()
// console.log("popped car: ", cars);
// cars.pop()
// console.log("popped car: ", cars);

// reverse()
//  let bikes=["CD70","125","union","ghani"]
// console.log("reverse array: ", bikes.reverse());

//shift()
// let cricketitems=["bat","bowl","wickets"]
// const shifteditems=cricketitems.shift()
// console.log("result array: ", cricketitems);
// console.log("shifted items: ", shifteditems);

//unshift()
// let stationary=["pencils","books","copies"]
// stationary.unshift("sheets")
// console.log("unshifted sheets: ", stationary);

//slice()
// let Electricitems=["fans","chargers","computers","Digital camera","electric drill"]
// console.log("result: ", Electricitems.slice(1,4));


//splice()
// let citynames=["islamabad","karachi","multan","rawalpindi"]
// citynames.splice(4,1,'queta')//added cityname
// console.log("added city name: ", citynames);
// citynames.splice(2,1,"cbk")//replace cityname
// console.log("replace city name: ", citynames);
// citynames.splice(2)//removed cityname
// console.log("removed city name: ", citynames);

//tostring()
// let countrynames=['pakistan','india','china','iran']
// console.log("string from country names: ", countrynames.toString());

//filter()
// let myfriends=['rafay','rasheed','shehzad','haider','ramzan','haseeb']
// let myczns=['haseeb','saad','ahsan','waheed','ali','haseeb','waheed','saad']
// let result=myfriends.filter(f=> myczns.indexOf(f)!== -1)
// console.log("common between two arrays: ", result);
// let result1=myczns.filter((item, index) => myczns.indexOf(item)== index)
// console.log("duplicated items removed: ", result1);

//map()
// let number=[2.1, 0.3, 4.1]
// let result=number.map(Math.ceil)
// console.log("result: ", result);

//every()
// function evennumber(item:any) {
//     return item % 1 == 0;
// }
// let numbers=[1,3,7,9]
// console.log("result: ", numbers.every(evennumber));

//reduceRight()
// let numbers=[3,6,7]
// let result=numbers.reduceRight( function(a,b) {return a-b} )
// console.log("result: ", result);

//reduce()
// let number=[20,5,10]
// let result=number.reduce( function (a,b) { return a*b} )
// console.log("result: ", result);

//some()
// let number = [1,2,6]
// console.log("atleast one number is even in given array", number.some(item => item % 1 == 0));

//sort()
// let numbers=[1,4,3,6,5,8,2]
// console.log("sorted array: ", numbers.sort((a,b) => a-b));

//fill()
// const emojis=['a','b','c','d']
// console.log("result1: ", emojis.fill('e',2,3));
// console.log("result2: ", emojis.fill('f',1));
// console.log("result3: ", emojis.fill('y'));





    


    













