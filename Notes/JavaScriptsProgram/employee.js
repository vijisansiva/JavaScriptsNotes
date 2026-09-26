export class Employee 
{

  constructor (empname, salary)
  {

   this.name = empname;
  this.salary = salary;
}

getEmpDetail(){

  if(this.salary>=10000)

  {

    return"Tier 4";


  }


  else 
    {


    return "Tier2";

  }

}

}