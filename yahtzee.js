function DiceSet() {   
    var rollNum = 0;
    var d1 = 0;
    var d2 = 0;
    var d3 = 0;
    var d4 = 0;
    var d5 = 0;

    this.appendRoll = function () {
        rollNum++;
    }
    
    this.rollNumGet = function () {
        return rollNum;
    }

    this.getd1 = function () {
        return d1;
    }

    this.getd2 = function () {
        return d2;
    }

    this.getd3 = function () {
        return d3;
    }

    this.getd4 = function () {
        return d4;
    }

    this.getd5 = function () {
        return d5;
    }

    this.setd1 = function (d1Set) {
        d1 = d1Set;
    }

    this.setd2 = function (d2Set) {
        d2 = d2Set;
    }

    this.setd3 = function (d3Set) {
        d3 = d3Set;
    }

    this.setd4 = function (d4Set) {
        d4 = d4Set;
    }

    this.setd5 = function (d5Set) {
        d5 = d5Set;
    }
}

function Yahtzee() {

    var round = 0;
    var ones = 0;
    var twos = 0;
    var threes = 0;
    var fours = 0;
    var fives = 0;
    var six = 0;
    var threeOfAKind = 0;
    var fourOfAKind = 0;
    var fullHouse = 0;
    var smallStraight = 0;
    var largeStraight = 0;
    var chance = 0;
    var yahtzee = 0;
    var oneSet = false;
    var twoSet = false;
    var threesSet = false;
    var fourSet = false;
    var fiveSet = false;
    var sixSet = false;
    var threeOfAKindSets = false;
    var fourOfAKindSet = false;
    var fullHouseSet = false;
    var smallStraightSet = false;
    var largeStraightSet = false;
    var chanceSet = false;
    var yahtzeeSet = false;
  

    // Ones
    this.oneBool = function() {
        return oneSet;
    }
    this.GetOnes = function() {
        return ones;
    }
    this.SetOneSet = function (oneSets) {
        oneSet = oneSets;
    }
    this.SetOnes = function (oness) {
        ones = oness;
    }

    // Twos
    this.twoBool = function () {
        return twoSet;
    }
    this.GetTwos = function () {
        return twos;
    }
    this.SetTwosSet = function(twoSets) {
        twoSet = twoSets;
    }
    this.SetTwos = function (twoz) {
        twos = twoz;
    }

    // Threes
    this.threeBool = function () {
        return threesSet;
    }
    this.GetThrees = function () {
        return threes;
    }
    this.SetThreeSet = function(threeSets) {
        threesSet = threeSets;
    }
    this.SetThrees = function(threez) {
        threes = threez;
    }

    // Fours
    this.fourBool = function() {
        return fourSet;
    }
    this.GetFours = function() {
        return fours;
    }
    this.SetFoursSet = function (fourSets) {
        fourSet = fourSets;
    }
    this.SetFours = function (fourss) {
        fours = fourss;
    }
        
    // Fives
    this.fiveBool = function() {
        return fiveSet;
    }
    this.GetFives = function() {
        return fives;
    }
    this.SetFivesSet = function (fivesSets) {
        fiveSet = fivesSets;
    }
    this.SetFives = function (fiverr) {
        fives = fiverr;
    }

    // Sixes
    this.sixBool = function () {
        return sixSet;
    }
    this.GetSixes = function () {
        return six;
    }
    this.SetSixSet = function (sixSets) {
        sixSet = sixSets;
    }
    this.SetSixes = function (sixs) {
        six = sixs;
    }

    // Three of a kind
    this.threeOfAKindBool = function () {
        return threeOfAKindSets;
    }
    this.GetThreeOfAKind = function () {
        return threeOfAKind;
    }
    this.SetThreeOfAKindSet = function (threeOfAKindSetss) {
        threeOfAKindSets = threeOfAKindSetss;
    }
    this.SetThreeOfAKind = function (threeOfAKindVal) {
        threeOfAKind = threeOfAKindVal;
    }

    // Four of a kind
    this.fourOfAKindBool = function () {
        return fourOfAKindSet;
    }
    this.GetFourOfAKind = function () {
        return fourOfAKind;
    }
    this.SetFourOfAKindSet = function (fourOfAKindSets) {
        fourOfAKindSet = fourOfAKindSets;
    }
    this.SetFourOfAKind = function (fourOfAKinds) {
        fourOfAKind = fourOfAKinds;
    }

    // Full House
    this.fullHouseBool = function () {
        return fullHouseSet;
    }
    this.GetFullHouse = function () {
        return fullHouse;
    }
    this.SetFullHouseSet = function (fullHouseSets) {
        fullHouseSet = fullHouseSets;
    }
    this.SetFullHouse = function (fullHouses) {
        fullHouse = fullHouses;
    }

    // Small Straight
    this.smallStraightBool = function () {
        return smallStraightSet;
    }
    this.GetSmallStraight = function () {
        return smallStraight;
    }
    this.SetSmallStraightSet = function (smallStraightSets) {
        smallStraightSet = smallStraightSets;
    }
    this.SetSmallStraight = function (smallStraights) {
        smallStraight = smallStraights;
    }

    // Large Straight
    this.largeStraightBool = function () {
        return largeStraightSet;
    }
    this.GetLargeStraight = function () {
        return largeStraight;
    }
    this.SetLargeStraightSet = function (largeStraightSets) {
        largeStraightSet = largeStraightSets;
    }
    this.SetLargeStraight = function (largeStraightVal) {
        largeStraight = largeStraightVal;
    }

    // Chance
    this.chanceBool = function () {
        return chanceSet;
    }
    this.GetChance = function () {
        return chance;
    }
    this.SetChanceBool = function (chanceSetVal) {
        chanceSet = chanceSetVal;
    }
    this.SetChance = function (chanceVal) {
        chance = chanceVal;
    }

    // Yahtzee
    this.yahtzeeBool = function () {
        return yahtzeeSet;
    }
    this.GetYahtzee = function () {
        return yahtzee;
    }
    this.SetYahtzeeBool = function (yahtzeeBool) {
        yahtzeeSet = yahtzeeBool;
    }
    this.SetYahtzee = function (yahtzeeVal) {
        yahtzee = yahtzeeVal;
    }
}


Yahtzee.prototype.CalculateUpperPoints = function (diceSet, rollNum) {
    var diceArr = [diceSet.getd1(), diceSet.getd2(), diceSet.getd3(), diceSet.getd4(), diceSet.getd5()];
    var score = 0;

    for (var i = 0; i < 5; i++) {
        if (diceArr[i] == rollNum) {
            score += rollNum;
        }
    }

    return score;
}

DiceSet.prototype.rollDie = function (d1set, d2set, d3set, d4set, d5set) {
    this.appendRoll();
    if (d1set == true) {
        this.setd1(Math.floor(Math.random() * 6) + 1);
    }
    if (d2set == true) {
        this.setd2(Math.floor(Math.random() * 6) + 1);
    }
    if (d3set == true) {
        this.setd3(Math.floor(Math.random() * 6) + 1);
    }
    if (d4set == true) {
        this.setd4(Math.floor(Math.random() * 6) + 1);
    }
    if (d5set == true) {
        this.setd5(Math.floor(Math.random() * 6) + 1);
    }
}

DiceSet.prototype.setQ = function () {
    $("#d1").attr("src", "images/q.png");
    $("#d2").attr("src", "images/q.png");
    $("#d3").attr("src", "images/q.png");
    $("#d4").attr("src", "images/q.png");
    $("#d5").attr("src", "images/q.png");
}


DiceSet.prototype.setFaces = function (selectedDie) {
    if (selectedDie[0] == true) {
        $("#d1").attr("src", "images/" + this.getd1() + ".png");
    }
    if (selectedDie[1] == true) {
        $("#d2").attr("src", "images/" + this.getd2() + ".png");
    }
    if (selectedDie[2] == true) {
        $("#d3").attr("src", "images/" + this.getd3() + ".png");
    }
    if (selectedDie[3] == true) {
        $("#d4").attr("src", "images/" + this.getd4() + ".png");
    }
    if (selectedDie[4] == true) {
        $("#d5").attr("src", "images/" + this.getd5() + ".png");
    }
}

Yahtzee.prototype.CalculateChance = function (diceSet) {
    var diceArr = [diceSet.getd1(), diceSet.getd2(), diceSet.getd3(), diceSet.getd4(), diceSet.getd5()];
    var total = 0;

    for (var i = 0; i < diceArr.length; i++) {
        total += diceArr[i];
    }
    return total;
}

Yahtzee.prototype.YahtzeeScore = function (diceSet) {
    var diceArr = [diceSet.getd1(), diceSet.getd2(), diceSet.getd3(), diceSet.getd4(), diceSet.getd5()];
    var counter = 0;

    for (var i = 0; i < diceArr.length; i++) {
        if (diceArr[0] == diceArr[i]) {
            counter++;
        }
    }

    if (counter == 5) {
        return 50;
    } else {
        return 0;
    }
}




Yahtzee.prototype.CalculateScores = function (diceSet) {
    var oneScore = this.CalculateUpperPoints(diceSet, 1);
    console.log(oneScore);
    var twoScore = this.CalculateUpperPoints(diceSet, 2);
    var threeScore = this.CalculateUpperPoints(diceSet, 3);
    const fourScore = this.CalculateUpperPoints(diceSet, 4);
    const fiveScore = this.CalculateUpperPoints(diceSet, 5);
    const sixScore = this.CalculateUpperPoints(diceSet, 6);
    const threeOfAKind = this.CalculateThreeOfKind(diceSet);
    const fourOfAKind = this.CalculateFourOfAKind(diceSet);
    const fullHouse = this.CalculateFullHouse(diceSet);
    const smallStraight = this.CalculateSmallStraight(diceSet);
    const largeStraight = this.CalculateLargeStraight(diceSet);
    const chanceScore = this.CalculateChance(diceSet);
    const yahtzeeScore = this.YahtzeeScore(diceSet);



    var scoreArr = [oneScore, twoScore, threeScore, fourScore, fiveScore,
        sixScore, threeOfAKind, fourOfAKind, fullHouse,
        smallStraight, largeStraight, chanceScore, yahtzeeScore];
    return scoreArr;
}

Yahtzee.prototype.SetZeros = function () {
    if (this.oneBool() == false) {
        $('#onePointsDisplay').text(0);
    }
    if (this.twoBool() == false) {
        $('#twoPointsDisplay').text(0);
    }
    if (this.threeBool() == false) {
        $('#threePointsDisplay').text(0);
    }
    if (this.fourBool() == false) {
        $('#fourPointsDisplay').text(0);
    }
    if (this.fiveBool() == false) {
        $('#fivePointsDisplay').text(0);
    }
    if (this.sixBool() == false) {
        $('#sixPointsDisplay').text(0);
    }
    if (this.threeOfAKindBool() == false) {
        $('#threeOfAKindDisplay').text(0);
    }
    if (this.fourOfAKindBool() == false) {
        $('#fourOfAKindDisplay').text(0);
    }
    if (this.fullHouseBool() == false) {
        $("#fullHouseDisplay").text(0);
    }
    if (this.smallStraightBool() == false) {
        $("#smallStraightDisplay").text(0);
    }
    if (this.largeStraightBool() == false) {
        $("#largeStraightDisplay").text(0);
    }
    if (this.chanceBool() == false) {
        $("#chanceDisplay").text(0);
    }
    if(this.yahtzeeBool() == false) {
        $("#yahtzeeDisplay").text(0);
    }
}


Yahtzee.prototype.CalculateFullHouse = function (diceSet) {
    var diceArry = [diceSet.getd1(), diceSet.getd2(), diceSet.getd3(), diceSet.getd4(), diceSet.getd5()];
    var score = 0;
    var threeOfAKinds = false;
    var counter = 0;
    var threeOfKindValue = 0;


    for (var i = 1; i <= 6; i++) {
        counter = 0;
        for (var j = 0; j < 5; j++) {
            if (diceArry[j] == i) {
                counter++;
            }
            if (counter == 3) {
                threeOfKindValue = diceArry[j];
                threeOfAKinds = true;
                break;
            }
        }
        if (counter >= 4) {
            threeOfAKinds = true;
            break;
        }
    }

    counter = 0;
    var otherval = 0;
    if (threeOfAKinds == true) {
        for (var i = 0; i < 5; i++) {
            if (diceArry[i] != threeOfKindValue) {
                otherval = diceArry[i]
            }
        }
        for (var i = 0; i < 5; i++) {
            if (diceArry[i] == otherval) {
                counter++;
            }
        }
        if (counter == 2) {
            return 25;
        } else {
            return 0;
        }
    }
    return 0;
}


Yahtzee.prototype.CalculateUpperSum = function () {
    //ones //twos //threes //fours //fives // six
    var upperArray = [this.GetOnes(), this.GetTwos(), this.GetThrees(), this.GetFours(), this.GetFives(), this.GetSixes()];
    var sum = 0;

    for (var i = 0; i < upperArray.length; i++) {
        sum += upperArray[i];
    }

    return sum;

}

Yahtzee.prototype.CalcTotalScore = function () {
    var lowerArray = [this.GetThreeOfAKind(), this.GetFourOfAKind(), this.GetFullHouse(), this.GetSmallStraight(),
        this.GetLargeStraight(), this.GetChance(), this.GetYahtzee()];
    var upperSum = this.CalculateUpperSum();
    var total = 0;

    for (var i = 0; i < lowerArray.length; i++) {
        total += lowerArray[i];
    }
    var final = total + upperSum;
    return(final);
}

Yahtzee.prototype.CalculateLargeStraight = function (diceSet) {
    var diceArry = [diceSet.getd1(), diceSet.getd2(), diceSet.getd3(), diceSet.getd4(), diceSet.getd5()];
    var sortedDiceSet = this.BubbleSort(diceArry, diceArry.length);
    var counter = 0;

    var start = sortedDiceSet[0]

    // Check from first value
    for (var i = 0; i < 5; i++) {
        if (i == 0) {
            counter++;
            continue;
        }
        if (sortedDiceSet[i] == sortedDiceSet[i - 1] + 1) {
            counter++
            continue;
        }
        else if (sortedDiceSet[i] == sortedDiceSet[i - 1] + 1) {
            break;
        }
    }

    if (counter >= 5) {
        return 40;
    } else {
        return 0;
    }
}


Yahtzee.prototype.CalculateFourOfAKind = function (diceSet) {
    var diceArry = [diceSet.getd1(), diceSet.getd2(), diceSet.getd3(), diceSet.getd4(), diceSet.getd5()];
    var score = 0;
    var fourOfAKind = false;
    var counter = 0;

    for (var i = 1; i <= 6; i++) {
        counter = 0;
        for (var j = 0; j < 5; j++) {
            if (diceArry[j] == i) {
                counter++;
            }
            if (counter == 4) {
                fourOfAKind = true;
                break;
            }
        }
        if (counter >= 4) {
            fourOfAKind = true;
            break;
        }
    }

    if (fourOfAKind == true) {
        for (var i = 0; i < 5; i++) {
            score += diceArry[i];
        }
    }

    return score;
}

Yahtzee.prototype.SetScores = function (scoresArr) {
    if (this.oneBool() == false) {
        $('#onePointsDisplay').text(scoresArr[0]);
    }
    if (this.twoBool() == false) {
        $('#twoPointsDisplay').text(scoresArr[1]);
    }
    if (this.threeBool() == false) {
        $('#threePointsDisplay').text(scoresArr[2]);
    }
    if (this.fourBool() == false) {
        $('#fourPointsDisplay').text(scoresArr[3]);
    }
    if (this.fiveBool() == false) {
        $('#fivePointsDisplay').text(scoresArr[4]);
    }
    if (this.sixBool() == false) {
        $('#sixPointsDisplay').text(scoresArr[5]);
    }
    if (this.threeOfAKindBool() == false) {
        $('#threeOfAKindDisplay').text(scoresArr[6]);
    }
    if (this.fourOfAKindBool() == false) {
        $('#fourOfAKindDisplay').text(scoresArr[7]);
    }
    if (this.fullHouseBool() == false) {
        $("#fullHouseDisplay").text(scoresArr[8]);
    }
    if (this.smallStraightBool() == false) {
        $("#smallStraightDisplay").text(scoresArr[9]);
    }
    if (this.largeStraightBool() == false) {
        $("#largeStraightDisplay").text(scoresArr[10]);
    }
    if (this.chanceBool() == false) {
        $("#chanceDisplay").text(scoresArr[11]);
    }
    if (this.yahtzeeBool() == false) {
        $("#yahtzeeDisplay").text(scoresArr[12]);
    }
}


Yahtzee.prototype.CalculateThreeOfKind = function (diceSet) {
    var diceArr = [diceSet.getd1(), diceSet.getd2(), diceSet.getd3(), diceSet.getd4(), diceSet.getd5()];
    var score = 0;
    var threeOfAKind = false;
    var counter = 0;

    for (var i = 1; i <= 6; i++) {
        counter = 0;
        for (var j = 0; j < 5; j++) {
            if (diceArr[j] == i) {
                counter++;
            }
            if (counter == 3) {
                threeOfAKind = true;
                break;
            }
        }
        if (counter >= 3) {
            threeOfAKind = true;
            break;
        }
    }

    if (threeOfAKind == true) {
        for (var i = 0; i < 5; i++) {
            score += diceArr[i];
        }
    }

    return score;
}


Yahtzee.prototype.CalculateSmallStraight = function (diceSet) {
    var diceArry = [diceSet.getd1(), diceSet.getd2(), diceSet.getd3(), diceSet.getd4(), diceSet.getd5()];
    var sortedDiceSet = this.BubbleSort(diceArry, diceArry.length);
    var smallStraight = false;
    var counter = 0;

    var start = sortedDiceSet[0]

    // Check from first value
    for (var i = 0; i < 5; i++) {
        if (i == 0) {
            counter++;
            continue;
        }
        if (sortedDiceSet[i] == sortedDiceSet[i - 1] + 1) {
            counter++
            continue;
        }
        else if (sortedDiceSet[i] == sortedDiceSet[i - 1]) {
            continue;
        }
    }

    if (counter >= 4) {
        return 30;
    } else {
        return 0;
    }
}

Yahtzee.prototype.BubbleSort = function (arr, n) {
    var i, j;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let scores = new Yahtzee();
var roll = new DiceSet();
let selectedDie = [true, true, true, true, true];
$("#roll").addClass("btnAvailable");




$("#roll").click(function () {
    if (roll.rollNumGet() < 3) {
        var rollLeft = 2 - roll.rollNumGet();

        if (roll.rollNumGet() == 2) {
            $("#roll").removeClass("btnAvailable");
            $("#prompt").text("You have no more rolls.");
        } else {
            $("#prompt").text("You have " + rollLeft + " rolls left.");
        }


        roll.rollDie(selectedDie[0], selectedDie[1], selectedDie[2], selectedDie[3], selectedDie[4]);
        var rolledScores = scores.CalculateScores(roll);
        scores.SetScores(rolledScores);
        roll.setFaces(selectedDie);

    } else {
        alert("You have reached the maximum roles for this round.");
    }
});

$("#reset").click(function () {
    // Dice Reset
    roll = new DiceSet();
    roll.setQ();
    scores.SetZeros();
    selectedDie = [true, true, true, true, true];
    $("#roll").addClass("btnAvailable");

    // Reinstantiate 
    scores = new Yahtzee();

    // Clear Points
    $('#onePointsDisplay').text("");
    $('#twoPointsDisplay').text("");
    $('#threePointsDisplay').text("");
    $('#fourPointsDisplay').text("");
    $('#fivePointsDisplay').text("");
    $('#sixPointsDisplay').text("");
    $('#threeOfAKindDisplay').text("");        
    $('#fourOfAKindDisplay').text("");
    $("#fullHouseDisplay").text("");
    $("#smallStraightDisplay").text("");
    $("#largeStraightDisplay").text("");
    $("#chanceDisplay").text("");
    $("#yahtzeeDisplay").text("");
    $("#sumDisplay").text("");
    $("#totalScore").text("");

    // Reset Buttons
    $("#btnOnes").removeClass("selectedBtn");
    $("#btnOnes").removeAttr("disabled");
    $("#btnTwos").removeClass("selectedBtn");
    $("#btnTwos").removeAttr("disabled");
    $("#btnThrees").removeClass("selectedBtn");
    $("#btnThrees").removeAttr("disabled");
    $("#btnFours").removeClass("selectedBtn");
    $("#btnFours").removeAttr("disabled");
    $("#btnFives").removeClass("selectedBtn");
    $("#btnFives").removeAttr("disabled");
    $("#btnSixes").removeClass("selectedBtn");
    $("#btnSixes").removeAttr("disabled");
    $("#btnThreeOfAKind").removeClass("selectedBtn");
    $("#btnThreeOfAKind").removeAttr("disabled");
    $("#btnFourOfAKind").removeClass("selectedBtn");
    $("#btnFourOfAKind").removeAttr("disabled");
    $("#btnFullHouse").removeClass("selectedBtn");
    $("#btnFullHouse").removeAttr("disabled");
    $("#btnSmallStraight").removeClass("selectedBtn");
    $("#btnSmallStraight").removeAttr("disabled");
    $("#btnLargeStraight").removeClass("selectedBtn");
    $("#btnLargeStraight").removeAttr("disabled");
    $("#btnChance").removeClass("selectedBtn");
    $("#btnChance").removeAttr("disabled");
    $("#btnYahtzee").removeClass("selectedBtn");
    $("#btnYahtzee").removeAttr("disabled");

    $("#prompt").text("Please roll the dices to continue");
});

// Dice One
$("#d1").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4) {
        if (selectedDie[0] == true) {
            selectedDie[0] = false;
            $("#d1").attr("src", "images/" + roll.getd1() + "x.png");
        }
        else if (selectedDie[0] == false) {
            $("#d1").attr("src", "images/" + roll.getd1() + ".png");
            selectedDie[0] = true;
        }
    } else {
        alert("Please roll the dices");
    }
});

$("#d2").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4) {
        if (selectedDie[1] == true) {
            selectedDie[1] = false;
            $("#d2").attr("src", "images/" + roll.getd2() + "x.png");
        }
        else if (selectedDie[1] == false) {
            $("#d2").attr("src", "images/" + roll.getd2() + ".png");
            selectedDie[1] = true;
        }
    } else {
        alert("Please Roll The Dices");
    }
});

$("#d3").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4) {
        if (selectedDie[2] == true) {
            selectedDie[2] = false;
            $("#d3").attr("src", "images/" + roll.getd3() + "x.png");
        }
        else if (selectedDie[2] == false) {
            $("#d3").attr("src", "images/" + roll.getd3() + ".png");
            selectedDie[2] = true;
        }
    } else {
        alert("Please Roll The Dices");
    }
});

$("#d4").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4) {
        if (selectedDie[3] == true) {
            selectedDie[3] = false;
            $("#d4").attr("src", "images/" + roll.getd4() + "x.png");
        }
        else if (selectedDie[3] == false) {
            $("#d4").attr("src", "images/" + roll.getd4() + ".png");
            selectedDie[3] = true;
        }
    } else {
        alert("Please Roll The Dices");
    }
});


$("#d5").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4) {
        if (selectedDie[4] == true) {
            selectedDie[4] = false;
            $("#d5").attr("src", "images/" + roll.getd5() + "x.png");
        }
        else if (selectedDie[4] == false) {
            $("#d5").attr("src", "images/" + roll.getd5() + ".png");
            selectedDie[4] = true;
        }
    } else {
        alert("Please Roll The Dices");
    }
});

$("#btnOnes").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.oneBool() == false) {

        var ones = scores.CalculateScores(roll);
        scores.SetOnes(ones[0]);
        scores.SetOneSet(true);
        var sum = scores.CalculateUpperSum();
        var total = scores.CalcTotalScore();


        roll = new DiceSet();
        roll.setQ();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnOnes").addClass("selectedBtn");
        $("#btnOnes").attr("disabled", "true");
        $("#sumDisplay").text(sum);
        $("#totalScore").text(total);
        scores.SetZeros();
        

    }
});

$("#btnTwos").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.twoBool() == false) {

        var twos = scores.CalculateScores(roll);
        scores.SetTwos(twos[1]);
        scores.SetTwosSet(true);
        var sum = scores.CalculateUpperSum();
        var total = scores.CalcTotalScore();


        roll = new DiceSet();
        roll.setQ();      
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnTwos").addClass("selectedBtn");
        $("#btnTwos").attr("disabled", "true");
        scores.SetZeros();
        $("#sumDisplay").text(sum);
        $("#totalScore").text(total);
    }
});

$("#btnThrees").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.threeBool() == false) {

        var threes = scores.CalculateScores(roll);
        scores.SetThrees(threes[2]);
        scores.SetThreeSet(true);
        var sum = scores.CalculateUpperSum();
        var total = scores.CalcTotalScore();



        roll = new DiceSet();
        roll.setQ();        
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnThrees").addClass("selectedBtn");
        $("#btnThrees").attr("disabled", "true");
        scores.SetZeros();
        $("#sumDisplay").text(sum);
        $("#totalScore").text(total);
    }
});

$("#btnFours").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.fourBool() == false) {

        var fours = scores.CalculateScores(roll);
        scores.SetFours(fours[3]);
        scores.SetFoursSet(true);
        var sum = scores.CalculateUpperSum();
        var total = scores.CalcTotalScore();


        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnFours").addClass("selectedBtn");
        $("#btnFours").attr("disabled", "true");
        $("#sumDisplay").text(sum);
        $("#totalScore").text(total);
    }
});



$("#btnFives").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.fiveBool() == false) {

        var fives = scores.CalculateScores(roll);
        scores.SetFives(fives[4]);
        scores.SetFivesSet(true);
        var sum = scores.CalculateUpperSum();
        var total = scores.CalcTotalScore();

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnFives").addClass("selectedBtn");
        $("#btnFives").attr("disabled", "true");
        $("#sumDisplay").text(sum);
        $("#totalScore").text(total);

    }
});



$("#btnSixes").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.sixBool() == false) {

        var sixes = scores.CalculateScores(roll);
        scores.SetSixes(sixes[5]);
        scores.SetSixSet(true);
        var sum = scores.CalculateUpperSum();
        var total = scores.CalcTotalScore();


        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];


        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnSixes").addClass("selectedBtn");
        $("#btnSixes").attr("disabled", "true");
        $("#sumDisplay").text(sum);
        $("#totalScore").text(total);
               
    }
});


$("#btnThreeOfAKind").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.threeOfAKindBool() == false) {

        var threeOfAKind = scores.CalculateScores(roll);
        scores.SetThreeOfAKind(threeOfAKind[6]);
        scores.SetThreeOfAKindSet(true);
        var total = scores.CalcTotalScore();


        roll = new DiceSet();
        scores.SetZeros();
        roll.setQ();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnThreeOfAKind").addClass("selectedBtn");
        $("#btnThreeOfAKind").attr("disabled", "true");
        $("#totalScore").text(total);
    }
});


$("#btnFourOfAKind").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.fourOfAKindBool() == false) {

        var fourOfAKind = scores.CalculateScores(roll);
        scores.SetFourOfAKind(fourOfAKind[7]);
        scores.SetFourOfAKindSet(true);
        var total = scores.CalcTotalScore();


        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnFourOfAKind").addClass("selectedBtn");
        $("#btnFourOfAKind").attr("disabled", "true");
        $("#totalScore").text(total);
    }
});


$("#btnFullHouse").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.fullHouseBool() == false) {

        var fullHouse = scores.CalculateScores(roll);
        scores.SetFullHouse(fullHouse[8]);
        scores.SetFullHouseSet(true);
        var total = scores.CalcTotalScore();


        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnFullHouse").addClass("selectedBtn");
        $("#btnFullHouse").attr("disabled", "true");
        $("#totalScore").text(total);
    }
});


$("#btnSmallStraight").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.smallStraightBool() == false) {

        var smallStraight = scores.CalculateScores(roll);
        scores.SetSmallStraight(smallStraight[9]);
        scores.SetSmallStraightSet(true);
        var total = scores.CalcTotalScore();

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnSmallStraight").addClass("selectedBtn");
        $("#btnSmallStraight").attr("disabled", "true");
        $("#totalScore").text(total);
    }
});

$("#btnLargeStraight").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.largeStraightBool() == false) {

        var largeStraight = scores.CalculateScores(roll);
        scores.SetLargeStraight(largeStraight[10]);
        scores.SetLargeStraightSet(true);
        var total = scores.CalcTotalScore();

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnLargeStraight").addClass("selectedBtn");
        $("#btnLargeStraight").attr("disabled", "true");
        $("#totalScore").text(total);
    }
});

$("#btnChance").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.chanceBool() == false) {
        var chance = scores.CalculateScores(roll);
        scores.SetChance(chance[11]);
        scores.SetChanceBool(true);
        
        var totalScore = scores.CalcTotalScore();
        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];

        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnChance").addClass("selectedBtn");
        $("#btnChance").attr("disabled", "true");

        $("#totalScore").text(totalScore);
    }
});

$("#btnYahtzee").click(function () {
    if (roll.rollNumGet() != 0 && roll.rollNumGet() < 4 && scores.yahtzeeBool() == false) {
        var yahtzee = scores.CalculateScores(roll);
        scores.SetYahtzee(yahtzee[12]);
        scores.SetYahtzeeBool(true);
        var total = scores.CalcTotalScore();
        

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];

        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnYahtzee").addClass("selectedBtn");
        $("#btnYahtzee").attr("disabled", "true");
        $("#totalScore").text(total);
    }
});




