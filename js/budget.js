let playerTotalExpenses;

document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerBudget = getInputFieldValueById("budget-field");
  if (
    perPlayerBudget > 0 &&
    perPlayerBudget != null &&
    typeof perPlayerBudget == "number"
  ) {
    playerTotalExpenses = perPlayerBudget * 5;
    setElementValueById("player-cost-element", playerTotalExpenses);
  } else {
    alert("Please Input Per Player Value In Integer");
  }
});

document.getElementById("btn-total").addEventListener("click", function () {
  if (playerTotalExpenses > 0 && typeof playerTotalExpenses == "number") {
    const managerEpenses = getInputFieldValueById("manager-inputfield");
    const coachExpenses = getInputFieldValueById("coach-inputfield");
    if (
      managerEpenses > 0 &&
      managerEpenses != null &&
      typeof managerEpenses == "number" &&
      coachExpenses > 0 &&
      coachExpenses != null &&
      typeof coachExpenses == "number"
    ) {
      const totalExpenses =
        playerTotalExpenses + managerEpenses + coachExpenses;
      setElementValueById("total-inputfield", totalExpenses);
    } else {
      alert("Please Input Valid Number");
    }
  } else {
    alert("Expenses Not Calculated");
  }
});
