//Function determines if the user's RegExp matches their input
function TestInput() {
    //gets the RegExp that the user wants to use
    const regExp = RegExp(document.querySelector("#regExp").value);

    //get the text that the user wants to test
    const userInput = document.querySelector("#userInput").value;
    
    //helps me debug, prints in f12 console
    console.log(userInput);
    console.log(regExp);
    
    
    //testing user text agaist the RegExp search, returns true or false
    document.querySelector("#showResults").value = regExp.test(userInput);
}