function calculateMinCost(event) {
  event.preventDefault();

  const ropesInput = document.getElementById("ropes").value;
  const ropes = ropesInput.split(",").map(Number);

  const minCost = findMinimumCost(ropes);
  document.getElementById("result").textContent =
    "Minimum cost: " + minCost;
}

function findMinimumCost(ropes) {
  // Sort the ropes in ascending order
  ropes.sort((a, b) => a - b);

  let totalCost = 0;

  // Keep connecting the two smallest ropes until only one rope remains
  while (ropes.length > 1) {
    const sum = ropes[0] + ropes[1];
    totalCost += sum;

    // Replace the two smallest ropes with their sum
    ropes.splice(0, 2, sum);

    // Re-sort the ropes array
    ropes.sort((a, b) => a - b);
  }

  return totalCost;
}
