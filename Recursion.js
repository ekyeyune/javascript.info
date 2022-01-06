let company = {sales: [{name: 'John', salary: 1000}, {name: 'Eric', salary: 3000}], development:{ sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}], internals: [{name: 'JACK', salary: 1400}]}};
function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce((prev, current) => prev + current.salary, 0);
    }else{
        let sum = 0;
        for(let subdep of Object.values(department)){
            sum+=sumSalaries(subdep);
        }
        return sum;
    }
} alert(sumSalaries(company));