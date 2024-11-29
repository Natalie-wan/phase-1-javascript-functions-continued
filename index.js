// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`; //defaults to roller-skate
};
saturdayFun("bathe my dog"); //returns the answer with the new argument

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`; // defaults to go to the office
};
mondayWork("work from home"); //returns the answer with the new argument

function wrapAdjective(wrap = '*') {
    return function(adjective) {
        return `You are ${wrap}${adjective}${wrap}!`;
    }
};
wrapAdjective(wrap = '||'); //returns answer with the adjective wrapped with || instead
