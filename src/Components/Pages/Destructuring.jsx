import React from "react";

function Destructuring() {
  const obj1 = { name: "jishnu", age: "21", place: "Clt" };
  // let name=obj1.name;
  // let age= obj1.age;
  // let place=obj1.place;
  // console.log(name)
  // console.log(age)
  // console.log(place)

  const { name, age, place } = obj1;
  console.log(name);
  console.log(age);
  console.log(place);

  const arr1 = [1, 2, 3, 4, 5];

  const [one, two, three, four, five] = arr1;
  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);
  console.log(five);

  return <div>Destructuring</div>;
}

export default Destructuring;
