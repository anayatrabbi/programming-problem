//kilometer to meter
function kilometerToMeter(kilometer){
    var meter= kilometer*1000;
    if (kilometer<0) {
        var negativeMeter = "distance cannot be negetive"
        return negativeMeter;        
    }
    else{
        return meter;
    }
}
var finalMeter = kilometerToMeter(8);
console.log(finalMeter);

//Budget calculator
function budgetCalculator(laptop, watch, phone) {
    var totalPrice = 0;
    if (watch * laptop * phone < 0) {
        var ifNegetive = "element number can not be negetive";
        return ifNegetive;
    }
    else {
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var watchPrice = watch * 50;

        var totalPrice = phonePrice + laptopPrice + watchPrice;
        return totalPrice;
    }
}
var finalPrice = budgetCalculator(1,2,2);
console.log(finalPrice);

//Hotel cost

function hotelCost(day){
    totalCost = 0;
    if(day < 0){
        negetiveDay = "day can not be negetive";
        return negetiveDay;
    }
    else if (day <= 10){
        var first10= day*100;
        var totalCost= totalCost + first10;
    }
    else if (day <= 20){
        var first10= 10 * 100;
        var next10Days= day - 10;
        var secondprice = next10Days * 80;
        var totalCost = secondprice + first10;
    }
    else{
        first10= 100*10;
        next10Days=100*80;
        var remainingDay= day - 20;
        lastPrice = remainingDay * 50;
        totalCost = first10 + next10Days + remainingDay;
    }
    return totalCost;
}
var finalRent = hotelCost(20);
console.log(finalRent);

//Large name

function megaFriend(nameList){
    var nameLarge = 0;

    for(var i= 0; i < nameList.length ; i++){
        if(nameList[i].length > nameLarge){
            var nameLarge = nameList[i].length;
            var largest = nameList[i];
        }
    }
    return largest;
}
var largeName = megaFriend(["abdullah al masud", "nahid hasan","mrinmoy ghosh","momitul islam jubo"]);
console.log(largeName);