console.log('person 1 :show ticket');
console.log('person 2 :show ticket');

const promiseWifeBringingTIcks = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('ticket');
    },3000)
});
const preMOvie =async() => {    
    const promiseWifeBringingTicks = new Promise((resolve,reject)=> {
        setTimeout(() => resolve('ticket'),3000);
    });
    const getPopcorn =new Promise((resolve,reject) => resolve(`popcorn`));
    const addButter =new Promise((resolve,reject) => resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject) => resolve(`cold drinks`))    

    let ticket =await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: i got some ${butter}on popcorn`);
    console.log('husband: we should go in');
    console.log('wife: no i need some cold drinks');
    

    let coke = await getColdDrinks;
    console.log(`husband : here i got some ${coke}`)
    console.log(`husband: anything else darling?`);
    console.log(`wife: lets go we are getting late`);
    console.log(`husband : thank you for the remainder *grins*`);
   
    return ticket;
} 
preMOvie().then ((m) => console.log(`person 3 shows ${m}`));




console.log('person 4 :show ticket');
console.log('person 5 :show ticket');   