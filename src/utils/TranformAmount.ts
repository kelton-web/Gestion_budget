import Date from '../../src/assets/data/data.json'

const arrayIcomes = Date[0].incomes.filter(user => user);
const arrayExpenses = Date[0].expenses.filter(user => user);
console.log(arrayIcomes);

let totalIcomes: number;
let totalExpenses: number;
let sumIcomes: any;
let sumExpenses: any;

const newArrayIcomes: number[] = [];
arrayIcomes.map((el) => {
    let list = el.amount
     list = list.substring(1).replace(',', '')
     totalIcomes = Number(list)
     newArrayIcomes.push(totalIcomes)
    console.log('ma liste icomes  = ' + newArrayIcomes);
    const initialValue: number = 0;
    sumIcomes = newArrayIcomes.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    console.log(sumIcomes);

     /* fonction qui change chaque element en nombre et ensuite je fais la somme total de icomes - expenses pour avoir la solde de mon compte  */
   
     /* function that changes each item to a number and then I add the total sum of icomes - expenses to get the balance of my account */
})

const newArrayExpenses: number[] = [];
arrayExpenses.map((el) => {
    let listExpenses = el.amount
    listExpenses = listExpenses.substring(1).replace(',', '')
     totalExpenses = Number(listExpenses)
     newArrayExpenses.push(totalExpenses)
    console.log('ma liste expenses  = ' + newArrayExpenses);
    const initialValue = 0;
    sumExpenses = newArrayExpenses.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    console.log(sumExpenses); 
})
export const resultatTotal = (sumIcomes - sumExpenses).toFixed(2);

