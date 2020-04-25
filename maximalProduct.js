maximalProduct = function(input) {
    if(input < 0) {
        return 0;
    }

    if(input == 2 || input == 3) {
        return input - 1;
    }

    let maxProduct = 1;
    while(input > 4) {
        input -= 3;
        maxProduct *= 3;
    }
    return input * maxProduct;
}

