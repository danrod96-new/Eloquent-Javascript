
function promptDirection(question) {
  let result = "leftaa";
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid question: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch(error) {
  console.log("Something went wrong:" + error);
}

const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount() {
  let accountName = "";

  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such accounts: ${accountName}`)
  }

  return accountName;
}

// This version of the function tracks its progress, and if, when leaving, 
// it notices that it was aborted at a point where it had created an inconsistent 
// program state, it repairs the damage it did.
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;

  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}

transfer("a", 100);