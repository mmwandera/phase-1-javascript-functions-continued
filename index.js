// code your solution here
function saturdayFun(string = 'roller-skate'){
    return `This Saturday, I want to ${string}!`
}

const mondayWork = function(task = 'go to the office'){
    return `This Monday, I will ${task}.`
}

function wrapAdjective(str = "*"){
    return function(what = "special"){
        return `You are ${str}${what}${str}!`
    }
}

wrapAdjective("%")("a dedicated programmer")
