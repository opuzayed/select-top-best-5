document.getElementById('btn-calculate').addEventListener('click', function(){
   /*  const budgetField = document.getElementById('budget-field');
    const playerBudgetString = budgetField.value;
    const perPlayerBudget = parseFloat(playerBudgetString);
    const playerBudget = perPlayerBudget * 5;

    const playerCostElement = document.getElementById('player-cost-element');
    playerCostElement.innerText = playerBudget; */
    const perPlayerBudget = getInputFieldValueById('budget-field');
    const playerTotalExpenses = perPlayerBudget * 5;
    setElementValueById('player-cost-element', playerTotalExpenses);
});