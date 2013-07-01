//document.write('<p>If you can see this, your quiz script is set up!</p>');
//console.log("Hello, welcome to Quizzical");
var name = prompt ("Name?");
    email = prompt ("Email?");
    budget_in_dollars = prompt ("Budget?");
    timeline_in_months = prompt ("Timeline?");

budget_in_dollars = Number(budget_in_dollars);
timeline_in_months = Number(timeline_in_months);

monthly_budget = 0;

incomes = [];

while(income = prompt("Source?")) {
  incomes.push(income);
}

for(i=0; i<incomes.length; i++) {
  console.log(incomes[i]);
}


