document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerBudget = getInputFieldValueById('budget-field');
    const playerTotalExpenses = perPlayerBudget * 5;
    setElementValueById('player-cost-element', playerTotalExpenses);

    document.getElementById('btn-total').addEventListener('click', function(){
        const managerEpenses = getInputFieldValueById('manager-inputfield');
        const coachExpenses = getInputFieldValueById('coach-inputfield');
    
        const totalExpenses = playerTotalExpenses + managerEpenses + coachExpenses;
        setElementValueById('total-inputfield', totalExpenses);
    });
});

 