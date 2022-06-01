function CheckPrimeNumber(number){
    if(number <= 1){
        return false;
    }
    if(number%2 == 0 && number > 2){
        return false;
    }
    const sq = Math.sqrt(number);
    let i = 3;
    for(i; i<=sq; i += 2){
        if(number%i === 0)
            return false;
    }
    return true;
}

module.exports = CheckPrimeNumber;
