//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer

  // 3) What is the difference between call and apply?

      //Answer

  // 4) What does .bind do?

      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
function getUsername () {
    return this.username;
}


var user = {
    username: 'jboucher',
    email: 'jboucher@email.com',
    getUsername: getUsername //MAKE sure you add the function to the object so you can invoke it
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here
function Car (make, model, year, miles) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.miles = miles;
}

var prius = new Car('Toyota', 'Prius', 2011, 0);
var mustang = new Car('Ford', 'Mustang', 2013, 0);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will 
//increment the move property by 10. The move property will be added to every object that is being returned from 
//the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking 
//moveCar on the right object (prius vs mustang).

function move (num) {
    return this.miles += num;
}

Car.prototype.moveCar = move;

prius.moveCar(10); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(10); //increments mustang' move property by 10. Returns the new move property.
// prius.miles;



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
prius.year;
mustang.year;

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com',
 getMyUsername: getMyUsername
};

// var getMyUsername = function() {
//  return this.username;
// };

function getMyUsername () {
 return this.username;
};

var userName = myUser.getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here - iliketurtles

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here - its bound to the myUser object


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

