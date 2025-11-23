Blog Post:



## What are some differences between interfaces and types in TypeScript?



TypeScript এ Interface আর Type এর মধ্যে কিছু পার্থক্য :

Interface ও Type দুটোই অবজেক্ট এর শেপ বুঝায়। কিন্তু সব জায়গায় একইভাবে কাজ করে না। তাই আজকে এই ব্লগ পোস্টে আমি এই দুটো সম্পর্কে যা যা বুঝতে পারছি তা আমার আলোকে শেয়ার করছি। 

১. Interface এর সবচে ভালো দিক হলো আমরা চাইলে একে আবার declare করতে পারি। এবং একই নামের interface বারবার লিখলে সেটা merge হয়ে যায়। যেমন:

interface User {
  name: string;
}

interface User {
  age: number;
}
এখানে User interface দুইবার লেখা হলেও TypeScript এগুলো একসাথে জুড়ে দিচ্ছে।
মানে User = { name, age }।

কিন্তু type এ এটা করলে error দেয়।


২. Extends vs Intersection

interface extend করা যায়।
type এ extend নেই, সেখানে intersection (&) ব্যবহার করতে হয়। যেমন:

interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}

type দিয়ে করলে:

type Animal = { name: string };
type Dog = Animal & { bark(): void };

৩. Type আরও flexible

এইটা আমার কাছে সবচেয়ে clear হয় যখন use করি।

type দিয়ে union, primitive, function, tuple সব define করা যায়। but
interface শুধু object এর structure এর জন্য। 

৪. Class implement করতে interface বেশ সুন্দর লাগে

যখন OOP এর style এ code করা হয়, interface ব্যবহার করা clean লাগে। 

তো এগুলোই হলো মূলত TypeScript এ Interface আর Type এর মধ্যে কিছু পার্থক্য | 





## Provide an example of using union and intersection types in TypeScript.

Typescript এ আমরা কখনো কখনো একটা variable  একাধিক type নিতে পারে। বা একাধিক type কে আমরা চাইলে একসাথে কম্বাইন্ড করতে পারি। এই কাজের জন্য আমরা Union(|) এবং intersection টাইপ ব্যবহার করে থাকি। এই ব্লগ পোস্টে এ বিষয়ে আলোচনা করা হবে।

1. Union Type (|):

   Union type দিয়ে variable কে একাধিক type থেকে যে কোনো একটি type নিতে পারা যায়। যেমন:

   let value: string | number;

   value = "Hello"; //  ok
   value = 42;      //  ok
   value = true; //  Error, boolean allowed নয়


2. Intersection Type (&):

Intersection type দিয়ে দুই বা ততোধিক type কে combine করে নতুন type বানানো যায়।
যেটা হয় সেটার সব property থাকতে হবে। যেমন:

interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

const user: EmployeePerson = {
  name: "Sakib",
  employeeId: 101,
};

তো এগুলোই হলো মূলত union  and intersection Type নিয়ে আমার সহজ সরল আলোচনা | 

   
