class InvalidArgumentError extends Error {}

const sum = (a, b) => {
    if (validateArgument(a,b)) {
        return a + b;
    }
    throw new InvalidArgumentError('Argument should be number');
}

const validateArgument = (a,b) => {
    return (parseInt(a) && parseInt(b));
}

const subtract = (a,b) => {
    return a-b;
}

module.exports = {sum, subtract, InvalidArgumentError}
