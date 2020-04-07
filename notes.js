const people = [
  { 
    name: 'Dom',
    age: 55
  },
  {
    name: 'Jane',
    age: 25
  },
  
  {
    name: 'Sophie',
    age: 96
   }
 ];
 
 const sortedByAge = people.sort(function(a, b)) {

//NEGATIVE VALUE = ASCENDING ORDER (when this function returns a negative value that means that a is going to be before b in the finalised sorted array)
//POSITIVE VALUE = DESCENDING ORDER (when it returns a positive value it means that b will be above a in the finalised sorted array)
// 0 = UNCHANGED (leaves a and b unchanged with respect to each other)                                 
   
                                 return a.age - b.age; //ascending order, to sort it in a descending order we would have written (b.age - a.age)                               
 
                                 });
   
