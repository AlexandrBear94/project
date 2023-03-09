const arr = [1, 2, 3];

arr[10] = '1234';

console.log(arr);






//const obj = {a: 1, b: 2 };

const obj = {
    Anna: 500, 
    Alice: 800,
    abc: {
        df:[{}, {}],
        def: {

        }
    }
};

//obj.Ivan = 1000;
//obj['Ivan'] = 1000;

//console.log(obj['Ivan']);
//console.log(obj.Ivan);



//const answers = [];

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша фамилия?', '');
//answers[2] = prompt('Скалько вам лет?', '');

//document.write(answers)

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`   

//const user = 'Alex';

//alert(`Привет, ${user}`)


let incr = 10,
    decr = 10;
      
++incr;
--decr;

console.log(++incr);
console.log(--decr);
console.log(incr++);

console.log(5%2);
console.log(5%2 == 1 )

console.log(2*4 == '8'); 


const isChecked = true,
      isClose = false,
      isHead = false,
      isFood = false;

console.log(isChecked && !isClose && !isHead && !isFood);