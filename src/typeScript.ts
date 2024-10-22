const add = (a: number , b: number)=>{
    return a + b;
};
const run = add(7 , 8)
console.log(run)

const addd = (a: number, b: number): number=>{
    return a + b 
}

console.log(addd(2, 9));
console.log("hello");

class me {
    name(question: string): string{
        return question;
    }
};

const data = new me();
console.log(data.name("suliwerey"));

interface Human {
    name: string;
    dob: string;
    age: number;
    isHuman: boolean;
};

type Humans = {
    name: string;
    dob: string;
    age: number;
    isHuman: boolean;
};


const humanBeings : Human= {
name: 'hammed',
dob:'08-07-2024',
age: 2,
isHuman: true
};

console.log(humanBeings);

interface animal{
    name: string;
    type: string;
    isRuminant: boolean;
    catigory: string;
    isDomestic: boolean
}

const creature: animal ={
    name:'paris',
    type: 'dog',
    isRuminant: false,
    catigory: 'domestic',
    isDomestic: true
}
console.log(creature);

class person{
    women(question:string):string{
        return question
    }
}
const girl = new person()
console.log(girl.women('peace grace'));
console.log(girl.women('hammed ibrahim').split(' ')[1]);
console.log(girl.women('bro code aint playing').split(' ').pop());

interface music{
    artist: string,
    gender: string,
    award: number,
    gener?: string
}

const beat :music ={
    artist: 'omahLay',
    gender: 'male',
    award: 90,
    gener: 'afrobeat'
}
console.log(beat);

type state = {
    name: string;
    postalCode: number;
    region: {
        busStop: string;
        landMark: string;
        location: string;
    };
    isExisting: boolean
}

const place : state={
    name: 'nigeria',
    postalCode: 12365,
    region:{
        busStop: 'boundry',
        landMark: 'big mosque',
        location: 'ajegunle'
    },
    isExisting: true
}
console.log(place);

let lost : string | number | boolean = true
console.log(lost)

interface lost{
    name: string | boolean;
    address: number | string;
    phone: string | number;
}
const describe: lost = {
    name:true,
    address: '12 nigeria',
    phone: '080976543'
}
console.log(describe);


type gardget = {
    phone:{
        name: string;
        model: string;
        DOM : number | string;
        COM: string | boolean;
        network?: string
    }
    color: Array<string>;
}

const buy:gardget= {
    phone:{
        name:'samsung',
        model: 'S23 ultra',
        DOM: 2024,
        COM: 'Nigeria',
    },
    color:['black', 'titanium', 'purple', 'blue', 'orange']
}
console.log(buy.phone);
console.log(buy.color[2]);

interface signUP{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    password: string
}

function info(user:signUP):string{
    const{firstName, lastName , email}=user;
    if(!firstName || !lastName|| !email){
        return 'all fields are required thank you';
    }
    return `user ${user.firstName} is registered`;
}

const userInfo:signUP ={
firstName: 'muhammed',
lastName:'ibrahim',
email:'hammedlanre71@gmail.com',
phoneNumber:"08059230915",
password: 'qwerty'
}

console.log(userInfo)

type login = {
email: string;
password: string
}

function details(userInfo: login): string{
    const {email, password}=userInfo;
    if(!email || password){
    return 'incorrect email or password'
    }
    return 'login successfully'
}
const signIn :login ={
    email: "hammedlanre71@gmail.com",
    password: "qwerty"
}

console.log(signIn)
console.log(signIn.email)
console.log(signIn.password)

class school{
    nameOfSchool(institute:string):string{
        return institute
    }
}
const allSchools = new school()
console.log('sacred heart');
console.log('rolex college');
console.log('caro favored');


