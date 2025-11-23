function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value;
    }
}




function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}




class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return (`Name: ${this.name}, Age: ${this.age}`);
    }
}
const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);



function filterByRating(items: {title: string; rating: number} []): {title: string; rating: number} [] {

    const result:{title: string; rating: number} [] = [];

    for(const item of items) {
        if(item.rating >= 4){
            result.push(item);
        }
    }

    return result;
}





function filterActiveUsers(users: { id: number; name: string; email: string; isActive: boolean }[]):
            { id: number; name: string; email: string; isActive: boolean }[] {

    const result: { id: number; name: string; email: string; isActive: boolean }[] = [];


    for (const user of users) {
        if (user.isActive) {
            result.push(user);
        }
    }
    return result;

}





interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book) {
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
    );
}





function getUniqueValues(
    arr1: (number | string)[],
    arr2: (number | string)[]
): (number | string)[] {

    const result: (number | string)[] = [];

    for (let i = 0; i < arr1.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (arr1[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(arr1[i]);
        }
    }


    for (let i = 0; i < arr2.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (arr2[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(arr2[i]);
        }
    }

    return result;
}








