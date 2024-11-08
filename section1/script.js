 
 let x=5;
  x=+15
  x*= 5; // x= x*5
  console.log( x); // Output: 75
let y="7" -3
  console.log(typeof y)



  // concatenation with number
  let n ="1"+ 1 //string concatenation "11"
  n-=1 // n= n-1 n=10
  console.log(typeof n) // Output: "10"


  let concatenation= "15"- "5" +1 // concatenation is performed first, then subtraction
  console.log(concatenation) // Output: 11

  let concatenation2= "10" - "4" - "3" -2 + '5' // operations are performed from left to right and string concatenation is performed after all other operations
  console.log(concatenation2) // Output: 12



  // truly and falsey values

  // falsey values: false, 0, "", null, undefined, NaN
  // truthy values: true, any number that is not falsey, any array, any object, any function



  //Swtich statement

  let day ="Sunday"

  switch(day){
    case "Sunday": // day === "Sunday"
      console.log("Today is Sunday")
      break;
    case "Monday":
      console.log("Today is Monday")
      break;
    case "Tuesday":
      console.log("Today is Tuesday")
      break;
    case "Wednesday":
      console.log("Today is Wednesday")
      break;
    case "Thursday":
      console.log("Today is Thursday")
      break;
    case "Friday":
      console.log("Today is Friday")
      break;
    case "Saturday":
      console.log("Today is Saturday")
      break;
    default:
      console.log("Invalid day")
  }
