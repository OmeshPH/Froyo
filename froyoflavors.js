// This function counts how many times each froyo flavor is chosen.
function countFroyoFlavors() {

  // Ask user for flavors (comma separated, with a suggestion)
  const flavors = prompt("List your froyo flavors (comma separated)", "matcha,matcha,ube,ube,ube,ube,vanilla,vanilla,vanilla,strawberry,coffee,coffee");

  // Exit if user cancels
  if (flavors === null) {
    console.log("No flavors provided.");
    return;
  }

  // Split flavors into separate items
  const flavorsList = flavors.split(",");

  // Track flavor counts (object)
  const flavorCounts = {};

  // Loop through each flavor chosen
  for (let i = 0; i < flavorsList.length; i++) {
    const flavor = flavorsList[i];

    // Increase count for existing flavor, or set to 1 for new ones
    flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
  }

  console.log("\nFroyo Flavor Counts:");

  // Print flavor and its count
  for (const flavor in flavorCounts) {
    const count = flavorCounts[flavor];
    console.log(flavor + ": " + count);
  }
}

// Call the function to count flavors!
countFroyoFlavors();