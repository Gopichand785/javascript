//create arrays
let a=[]
let b=[10,20,30,40,50]

//how to accrss items from arrays in javascript
let c=[10,20,30,40,50]
console.log(c[0])
console.log(c[1])
console.log(c[2])
console.log(c[3])
console.log(c[4])

//how to access the last item form array in javascript
let x=[10,20,30,40,50,60]
let ram=x[5]               // length=x[x.length-1]
console.log(ram)

//how to access all items from array using for loop in javascript
let names=['santosh','gopi','abhi','pravi','barath']
for (i=0;i<=4;i=i+1){
    console.log(i)
}

//array of objects

//how to create of objects javascript
let emp={}
let emp1={id:202,
          name:"rahul" }

//how to access array of objects item in a javascript
let details={
    id:202,
    name:'santhu',
    email:'santhu@gmail.com'
}
console.log(details.id)
console.log(details.name)
console.log(details.email)

//how to create 2d array in javascript
var array2d=[[1,2,3],[4,5,6],[7,8,9]]
 console.log(array2d)

 //simple program to sum of 2d array in javascript
 var array=[[10,20],[30,40],[50,60]]
 console.log(array[0][1]);
 array[0][1]=30
 console.log(array)
 array[2][3]=15 //checking purpose
 console.log(array)

 //how to access 2d array item in javascript
 var D=[[10,20,30],[40,50,60],[70,80,90]]
 D[0][1]=25
 console.log(D);
 D[1][2]=100
 console.log(D)
 D[2][3]=15 //checking purpose
 console.log(D)
 console.log(D[0][1])

 //javascript array push mehtod
 let m=[10,20,30,40,50,60,70]
 m.push(80)
console.log(m)

//javascript array pop method
let n=[10,20,30,40,50,60,70]
n.pop()
console.log(n)

//javascript array shift method
let p=[10,20,30,40,50,60,70]
p.shift()
console.log(p)

//javascript array unshift method
let q=[10,20,30,40,50,60,70]
q.unshift(5,6)
console.log(q)

//slicing/array slicing

//java script arrray splice metho explanation
let santh=['gopi','pravi','santhu','abhi']
santh.splice(3,1,'vijay')
console.log(santh)
/*  splice() method add new elements and remove number of elements*/ 

//java script arrray slice metho explanation
let pravi=[10,20,30,40,50,60,70]
console.log(pravi.slice(1,4))
/* The slice() method cuts the array and returns a shallow copy of a portion of an array into a new array object. It takes in two parameters: begin and end. The array is sliced from the index specified as begin till the end index (end index excluded).*/

//how to copy data from array in javascript
let r=[1,2,3]
let s=[4,5,6]
let t=[...r,...s]
console.log(t)

//17 balance

//javascript use of indexof method
let u=[1,2,3,4,5,6]
console.log(u.indexOf(1))

//how to find the index of item in array in javascript
let w=[1,2,3,4,5,6]
console.log(w.indexOf(1))
let y=[1,2,3,4,5,6]
console.log(y.indexOf(0))
let z=[1,2,3,4,5,6]
console.log(z.indexOf(4))

//how to find the object from array of object in a javscript


