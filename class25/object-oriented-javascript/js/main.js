// //Factory Function
// function createCircle(radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     };
// }
// const circle = createCircle(1);
// // circle.draw()



// //Constructor Function

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log(draw);
//     }
// }

// const another = new Circle(1);





// Primitive vs objects and how they behave differently

// let x = 10;
// let y = x;

// x = 20;

// console.log(x); //20
// console.log(y); //10


// let x = {value: 10};
// let y = x;

// x.value = 20;

// console.log(x); //20
// console.log(y); //20




//Another example:

// let number = 10;

// function increase(number){
//     number.value++;
// }

// increase(number);
// console.log(number);//10

// //vs.

// let obj = { value: 10};

// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj);//10










//Adding/Removing Properties

//Constructor Function

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log(draw);
//     }
// }

// const circle = new Circle(10);

// circle.location = { x: 1};

// //alternate way to do the same thing as above
// circle['location'] = { x: 1};










//Enumerating(iterating) Properties

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log(draw);
//     }
// }

// const circle = new Circle(10);

// for(let key in circle){
//     if(typeof circle[key] !== 'function'){
//         console.log(key, circle[key]);
//     }
// }

// const keys = Object.keys(circle);

// console.log(keys);


// if('radius' in circle){
//     console.log('Circle has a radius');
// }










//Abstraction

// function Circle(radius){
//     this.radius = radius;

//     this.defaultLocation = { x: 0, y: 0};

//     this.computeOptimumLocation = function(factor){
//         //...
//     }

//     this.draw = function(){
//         this.computeOptimumLocation(0.1);
//         console.log(draw);
//     }
// }

// const circle = new Circle(10);
// circle.computeOptimumLocation();
// circle.draw();










//Private Properties and Methods

// function Circle(radius){
//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0};

//     let computeOptimumLocation = function(factor){
//         //...
//     }

//     this.draw = function(){
//       computeOptimumLocation(0.1);
//       //defaultLocation
//       // this.radius 

//       console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.
// circle.draw();











//Getters and Setters

function Circle(radius){
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};

    let computeOptimumLocation = function(factor){
        //...
    }

    this.draw = function(){
      computeOptimumLocation(0.1);

      console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();