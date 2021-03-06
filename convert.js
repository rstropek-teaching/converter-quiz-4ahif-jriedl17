var lengthTypes = ['mm', 'cm', 'm'];
var weightTypes = ['g', 'kg'];

proofArguments();
convert();

function proofArguments() {
    if (process.argv.length != 2 + 4) {
        handleError('Invalid Arguments!');
    } else {
        // Remember the rule: Don't repeat yourself. You have two calls to `handleError` here.
        // You could combine both `if` statements into a single one combining it with a boolean operator.
        if (!parseFloat(process.argv[2 + 0])) {
            handleError();
        } else if (!checkTypes()) {
            handleError();
        }
        // Generally prefer `!==` over `!=`
        else if (process.argv[2 + 2] != 'to') {
            handleError();
        }
    }
}

function handleError() {
    console.log('Invalid parameters');
    process.exit(-1);
}

// Avoid typos (Length instead of Lenght). Nearly all editors (including VSCode) have spell checking plugins.
function isLenghtType(s) {
    // Array has a `find` function (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
    // You could simplify your code by using this function instead of your own loop.
    for (let i = 0; i < lengthTypes.length; i++) {
        if (s === lengthTypes[i]) return true;
    }
    return false;
}

function isWeightType(s) {
    for (let i = 0; i < weightTypes.length; i++) {
        if (s === weightTypes[i]) return true;
    }
    return false;
}

function checkTypes() {
    if (isLenghtType(process.argv[2 + 1]) && isLenghtType(process.argv[2 + 3])) return true;
    else if (isWeightType(process.argv[2 + 1]) && isWeightType(process.argv[2 + 3])) return true;


    return false;
}

function convert() {
    var firstTerm = process.argv[2 + 1];
    var secondTerm = process.argv[2 + 3];
    var index;

    // Your solution works but requires quite a lot of code. You could try to create a solution
    // that requires less code.
    switch (firstTerm) {
        case 'm':
            index = lengthTypes.indexOf(secondTerm);
            // Remember: Don't repeat yourself. The following `console.log` statements are 
            // very similar. Try to avoid copying code and prefer solutions where logic, constants, etc.
            // are not repeated over and over again.
            if (index == 0) {
                console.log(process.argv[2 + 0] +' m are '+process.argv[2 + 0] * 1000 + ' mm');
            } else if (index == 1) {
                console.log(process.argv[2 + 0] +' m are '+process.argv[2 + 0] * 100 + ' cm');
            } else if (index == 2) {
                console.log(process.argv[2 + 0] +' m are '+process.argv[2 + 0] + ' m');
            }
            break;

        case 'cm':
            index = lengthTypes.indexOf(secondTerm);
            if (index == 0) {
                console.log(process.argv[2 + 0] +' cm are '+process.argv[2 + 0] * 10 + ' mm');
            } else if (index == 1) {
                console.log(process.argv[2 + 0] +' cm are '+process.argv[2 + 0] + ' cm');
            } else if (index == 2) {
                console.log(process.argv[2 + 0] +' cm are '+process.argv[2 + 0] / 100 + ' m');
            }
            break;

        case 'mm':
            index = lengthTypes.indexOf(secondTerm);
            if (index == 0) {
                console.log(process.argv[2 + 0] +' mm are '+process.argv[2 + 0] + ' mm');
            } else if (index == 2) {
                console.log(proprocess.argv[2 + 0] +' mm are '+cess.argv[2 + 0] / 1000 + ' m');
            } else if (index == 1) {
                console.log(process.argv[2 + 0] +' mm are '+process.argv[2 + 0] / 10 + ' cm');
            }
            break;

        case 'kg':
            index = weightTypes.indexOf(secondTerm);
            if (index == 0) {
                console.log(process.argv[2 + 0] +' kg are '+process.argv[2 + 0] * 1000 + ' g');
            } else if (index == 1) {
                console.log(process.argv[2 + 0] +' kg are '+process.argv[2 + 0] + ' kg');
            }
            break;

        case 'g':
            index = weightTypes.indexOf(secondTerm);
            if (index == 0) {
                console.log(process.argv[2 + 0] +' g are '+process.argv[2 + 0] + ' g');
            } else if (index == 1) {
                console.log(process.argv[2 + 0] +' g are '+process.argv[2 + 0] / 1000 + ' kg');
            }
            break;
    }
}


