class DiceSet {    
    constructor() {
        this.rollNum = 0;
        this.d1 = 0;
        this.d2 = 0;
        this.d3 = 0;
        this.d4 = 0;
        this.d5 = 0;
    }

    get rollNumGet() {
        return this.rollNum;
    }

    rollDie(d1set, d2set, d3set, d4set, d5set) {
        this.rollNum+=1;
        if (d1set == true) {
            this.d1 = Math.floor(Math.random() * 6)+1;
        } 
        if (d2set == true) {
            this.d2 = Math.floor(Math.random() * 6)+1;
        }
        if (d3set == true) {
            this.d3 = Math.floor(Math.random() * 6)+1;
        }
        if (d4set == true) {
            this.d4 = Math.floor(Math.random() * 6)+1;
        }
        if (d5set == true) {
            this.d5 = Math.floor(Math.random() * 6)+1;
        }
    }

    setQ() {
        $("#d1").attr("src", "images/q.png");
        $("#d2").attr("src", "images/q.png");
        $("#d3").attr("src", "images/q.png");
        $("#d4").attr("src", "images/q.png");
        $("#d5").attr("src", "images/q.png");
    }

    setFaces(selectedDie) {
        if (selectedDie[0] == true) {
            $("#d1").attr("src", "images/" + this.d1 + ".png");
        }
        if (selectedDie[1] == true) {
            $("#d2").attr("src", "images/" + this.d2 + ".png");
        }
        if (selectedDie[2] == true) {
            $("#d3").attr("src", "images/" + this.d3 + ".png");
        }
        if (selectedDie[3] == true) {
            $("#d4").attr("src", "images/" + this.d4 + ".png");
        }
        if (selectedDie[4] == true) {
            $("#d5").attr("src", "images/" + this.d5 + ".png");
        }
    }
}

class Yahtzee {
    
    #ones;
    #twos;
    #threes;
    #fours;
    #fives;
    #six;
    #threeOfAKind;
    #fourOfAKind;
    #fullHouse;
    #smallStraight;
    #largeStraight;
    #chance;
    #yahtzee;
    #oneSet;
    #twoSet;
    #threesSet;
    #fourSet;
    #fiveSet;
    #sixSet;   
    #fourOfAKindSet;
    #fullHouseSet;
    #smallStraightSet;
    #largeStraightSet;
    #chanceSet;
    #yahtzeeSet;
    #threeOfAKindSets;

    constructor(ones) {
        this.round = 0;
        this.#ones = 0;
        this.#twos = 0;
        this.#threes = 0;
        this.#fours = 0;
        this.#fives = 0;
        this.#six = 0;
        this.#threeOfAKind = 0;
        this.#fourOfAKind = 0;
        this.#fullHouse = 0;
        this.#smallStraight = 0;
        this.#largeStraight = 0;
        this.#chance = 0;
        this.#yahtzee = 0;
        this.#oneSet = false;
        this.#twoSet = false;
        this.#threesSet = false;
        this.#fourSet = false;
        this.#fiveSet = false;
        this.#sixSet = false;
        this.#threeOfAKindSets = false;
        this.#fourOfAKindSet = false;
        this.#fullHouseSet = false;
        this.#smallStraightSet = false;
        this.#largeStraightSet = false;
        this.#chanceSet = false;
        this.#yahtzeeSet = false;
    }

    // Ones
    get oneBool() {
        return this.#oneSet;
    }
    get GetOnes() {
        return this.#ones;
    }
    SetOneSet(oneSet) {
        this.#oneSet = oneSet;
    }
    SetOnes(ones) {
        this.#ones = ones;
    }

    // Twos
    get twoBool() {
        return this.#twoSet;
    }
    get GetTwos() {
        return this.#twos;
    }
    SetTwosSet(twoSet) {
        this.#twoSet = twoSet;
    }
    SetTwos(twos) {
        this.#twos = twos;
    }

    // Threes
    get threeBool() {
        return this.#threesSet;
    }
    get GetThrees() {
        return this.#threes;
    }
    SetThreeSet(threeSet) {
        this.#threesSet = threeSet;
    }
    SetThrees(threes) {
        this.#threes = threes;
    }

    // Fours
    get fourBool() {
        return this.#fourSet;
    }
    get GetFours() {
        return this.#fours;
    }
    SetFoursSet(fourSet) {
        this.#fourSet = fourSet;
    }
    SetFours(fours) {
        this.#fours = fours;
    }

    // Fives
    get fiveBool() {
        return this.#fiveSet;
    }
    get GetFives() {
        return this.#fives;
    }
    SetFivesSet(fivesSet) {
        this.#fiveSet = fivesSet;
    }
    SetFives(fives) {
        this.#fives = fives;
    }

    // Sixes
    get sixBool() {
        return this.#sixSet;
    }
    get GetSixes() {
        return this.#six;
    }
    SetSixSet(sixSet) {
        this.#sixSet = sixSet;
    }
    SetSixes(six) {
        this.#six = six;
    }

    // Three of a kind
    get threeOfAKindBool() {
        return this.#threeOfAKindSets;
    }
    get GetThreeOfAKind() {
        return this.#threeOfAKind;
    }
    SetThreeOfAKindSet(threeOfAKindSets) {
        this.#threeOfAKindSets = threeOfAKindSets;
    }
    SetThreeOfAKind(threeOfAKind) {
        this.#threeOfAKind = threeOfAKind;
    }

    // Four of a kind
    get fourOfAKindBool() {
        return this.#fourOfAKindSet;
    }
    get GetFourOfAKind() {
        return this.#fourOfAKind;
    }
    SetFourOfAKindSet(fourOfAKindSet) {
        this.#fourOfAKindSet = fourOfAKindSet;
    }
    SetFourOfAKind(fourOfAKind) {
        this.#fourOfAKind = fourOfAKind;
    }

    // Full House
    get fullHouseBool() {
        return this.#fullHouseSet;
    }
    get GetFullHouse() {
        return this.#fullHouse;
    }
    SetFullHouseSet(fullHouseSet) {
        this.#fullHouseSet = fullHouseSet;
    }
    SetFullHouse(fullHouse) {
        this.#fullHouse = fullHouse;
    }

    // Small Straight
    get smallStraightBool() {
        return this.#smallStraightSet;
    }
    get GetSmallStraight() {
        return this.#smallStraight;
    }
    SetSmallStraightSet(smallStraightSet) {
        this.#smallStraightSet = smallStraightSet;
    }
    SetSmallStraight(smallStraight) {
        this.#smallStraight = smallStraight;
    }

    // Large Straight
    get largeStraightBool() {
        return this.#largeStraightSet;
    }
    get GetLargeStraight() {
        return this.#largeStraight;
    }
    SetLargeStraightSet(largeStraightSet) {
        this.#largeStraightSet = largeStraightSet;
    }
    SetLargeStraight(largeStraight) {
        this.#largeStraight = largeStraight;
    }




    CalculateUpperPoints(diceSet, rollNum) {
        var diceArr = [diceSet.d1, diceSet.d2, diceSet.d3, diceSet.d4, diceSet.d5];
        var score = 0;

        for (var i = 0; i < 5; i++) {
            if (diceArr[i] == rollNum) {
                score += rollNum;
            }
        }

        return score;
    }

    CalculateThreeOfKind(diceSet) {
        var diceArr = [diceSet.d1, diceSet.d2, diceSet.d3, diceSet.d4, diceSet.d5];
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

    CalculateFourOfAKind(diceSet) {
        var diceArry = [diceSet.d1, diceSet.d2, diceSet.d3, diceSet.d4, diceSet.d5];
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

    CalculateFullHouse(diceSet) {
        var diceArry = [diceSet.d1, diceSet.d2, diceSet.d3, diceSet.d4, diceSet.d5];
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


    BubbleSort(arr, n) {
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



    CalculateSmallStraight(diceSet) {
        var diceArry = [diceSet.d1, diceSet.d2, diceSet.d3, diceSet.d4, diceSet.d5];
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

    CalculateLargeStraight(diceSet) {
        var diceArry = [diceSet.d1, diceSet.d2, diceSet.d3, diceSet.d4, diceSet.d5];
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


    SetScores(scoresArr) {
        if (this.oneBool == false) {
            $('#onePointsDisplay').text(scoresArr[0]);
        }
        if (this.twoBool == false) {
            $('#twoPointsDisplay').text(scoresArr[1]);
        }
        if (this.threeBool == false) {
            $('#threePointsDisplay').text(scoresArr[2]);
        }
        if (this.fourBool == false) {
            $('#fourPointsDisplay').text(scoresArr[3]);
        }
        if (this.fiveBool == false) {
            $('#fivePointsDisplay').text(scoresArr[4]);
        }
        if (this.sixBool == false) {
            $('#sixPointsDisplay').text(scoresArr[5]);
        }
        if (this.threeOfAKindBool == false) {
            $('#threeOfAKindDisplay').text(scoresArr[6]);
        }
        if (this.fourOfAKindBool == false) {
            $('#fourOfAKindDisplay').text(scoresArr[7]);
        }
        if (this.fullHouseBool == false) {
            $("#fullHouseDisplay").text(scoresArr[8]);
        }
        if (this.smallStraightBool == false) {
            $("#smallStraightDisplay").text(scoresArr[9]);
        }
        if (this.largeStraightBool == false) {
            $("#largeStraightDisplay").text(scoresArr[10]);
        }
    }

    SetZeros() {
        if (this.oneBool == false) {
            $('#onePointsDisplay').text(0);
        }
        if (this.twoBool == false) {
            $('#twoPointsDisplay').text(0);
        }
        if (this.threeBool == false) {
            $('#threePointsDisplay').text(0);
        }
        if (this.fourBool == false) {
            $('#fourPointsDisplay').text(0);
        }
        if (this.fiveSet == false) {
            $('#fivePointsDisplay').text(0);
        }
        if (this.sixBool == false) {
            $('#sixPointsDisplay').text(0);
        }
        if (this.threeOfAKindBool == false) {
            $('#threeOfAKindDisplay').text(0);
        }
        if (this.fourOfAKindBool == false) {
            $('#fourOfAKindDisplay').text(0);
        }
        if (this.fullHouseBool == false) {
            $("#fullHouseDisplay").text(0);
        }
        if (this.smallStraightBool == false) {
            $("#smallStraightDisplay").text(0);
        }
        if (this.largeStraightBool == false) {
            $("#largeStraightDisplay").text(0);
        }
    }



    CalculateScores(diceSet) {
        const oneScore = this.CalculateUpperPoints(diceSet, 1);      
        const twoScore = this.CalculateUpperPoints(diceSet, 2);
        const threeScore = this.CalculateUpperPoints(diceSet, 3);
        const fourScore = this.CalculateUpperPoints(diceSet, 4);
        const fiveScore = this.CalculateUpperPoints(diceSet, 5);
        const sixScore = this.CalculateUpperPoints(diceSet, 6);
        const threeOfAKind = this.CalculateThreeOfKind(diceSet);
        const fourOfAKind = this.CalculateFourOfAKind(diceSet);
        const fullHouse = this.CalculateFullHouse(diceSet);
        const smallStraight = this.CalculateSmallStraight(diceSet);
        const largeStraight = this.CalculateLargeStraight(diceSet);


        const scoreArr = [oneScore, twoScore, threeScore, fourScore, fiveScore,
                         sixScore, threeOfAKind, fourOfAKind, fullHouse,
                         smallStraight, largeStraight];
        return scoreArr;
    }
}

let scores = new Yahtzee();
let roll = new DiceSet();
let selectedDie = [true, true, true, true, true];
$("#roll").addClass("btnAvailable");


$("#roll").click(function() {
    if (roll.rollNumGet < 3) {

        var rollLeft = 2 - roll.rollNumGet;

        if (roll.rollNumGet == 2) {
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


// Dice One

$("#d1").click(function() {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {
        if (selectedDie[0] == true) {
            selectedDie[0] = false;
            $("#d1").attr("src", "images/" + roll.d1 + "x.png");
        }
        else if (selectedDie[0] == false) {
            $("#d1").attr("src", "images/" + roll.d1 + ".png");
            selectedDie[0] = true;
        }
    } else {
        alert("Please roll the dices");
    }
});

$("#d2").click(function() {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {
        if (selectedDie[1] == true) {
            selectedDie[1] = false;
            $("#d2").attr("src", "images/" + roll.d2 + "x.png");
        }
        else if (selectedDie[1] == false) {
            $("#d2").attr("src", "images/" + roll.d2 + ".png");
            selectedDie[1] = true;
        }
    } else {
        alert("Please Roll The Dices");
    } 
});

$("#d3").click(function() {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {
        if (selectedDie[2] == true) {
            selectedDie[2] = false;
            $("#d3").attr("src", "images/" + roll.d3 + "x.png");
        }
        else if (selectedDie[2] == false) {
            $("#d3").attr("src", "images/" + roll.d3 + ".png");
            selectedDie[2] = true;
        }
    } else {
        alert("Please Roll The Dices");
    } 
});

$("#d4").click(function() {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {
        if (selectedDie[3] == true) {
            selectedDie[3] = false;
            $("#d4").attr("src", "images/" + roll.d4 + "x.png");
        }
        else if (selectedDie[3] == false) {
            $("#d4").attr("src", "images/" + roll.d4 + ".png");
            selectedDie[3] = true;
        }
    } else {
        alert("Please Roll The Dices");
    } 
});


$("#d5").click(function() {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {
        if (selectedDie[4] == true) {
            selectedDie[4] = false;
            $("#d5").attr("src", "images/" + roll.d5 + "x.png");
        }
        else if (selectedDie[4] == false) {
            $("#d5").attr("src", "images/" + roll.d5 + ".png");
            selectedDie[4] = true;
        }
    } else {
        alert("Please Roll The Dices");
    } 
});

$("#btnOnes").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var ones = scores.CalculateScores(roll);
        scores.SetOnes(ones[0]);
        scores.SetOneSet(true);


        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnOnes").addClass("selectedBtn");
        $("#btnOnes").attr("disabled", "true");
    }
});

$("#btnTwos").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var twos = scores.CalculateScores(roll);
        scores.SetTwos(twos[1]);
        scores.SetTwosSet(true);


        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnTwos").addClass("selectedBtn");
        $("#btnTwos").attr("disabled", "true");
    }
});

$("#btnThrees").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var threes = scores.CalculateScores(roll);
        scores.SetThrees(threes[2]);
        scores.SetThreeSet(true);


        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnThrees").addClass("selectedBtn");
        $("#btnThrees").attr("disabled", "true");
    }
});

$("#btnFours").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var fours = scores.CalculateScores(roll);
        scores.SetFours(fours[3]);
        scores.SetFoursSet(true);

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnFours").addClass("selectedBtn");
        $("#btnFours").attr("disabled", "true");
    }
});



$("#btnFives").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var fives = scores.CalculateScores(roll);
        scores.SetFives(fives[4]);
        scores.SetFivesSet(true);

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnFives").addClass("selectedBtn");
        $("#btnFives").attr("disabled", "true");
    }
});



$("#btnSixes").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var sixes = scores.CalculateScores(roll);
        scores.SetSixes(sixes[5]);
        scores.SetSixSet(true);

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnSixes").addClass("selectedBtn");
        $("#btnSixes").attr("disabled", "true");
    }
});


$("#btnThreeOfAKind").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var threeOfAKind = scores.CalculateScores(roll);
        scores.SetThreeOfAKind(threeOfAKind[6]);
        scores.SetThreeOfAKindSet(true);

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnThreeOfAKind").addClass("selectedBtn");
        $("#btnThreeOfAKind").attr("disabled", "true");
    }
});


$("#btnFourOfAKind").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var fourOfAKind = scores.CalculateScores(roll);
        scores.SetFourOfAKind(fourOfAKind[7]);
        scores.SetFourOfAKindSet(true);
            
        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnFourOfAKind").addClass("selectedBtn");
        $("#btnFourOfAKind").attr("disabled", "true");
    }
});


$("#btnFullHouse").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var fullHouse = scores.CalculateScores(roll);
        scores.SetFullHouse(fullHouse[8]);
        scores.SetFullHouseSet(true);

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnFullHouse").addClass("selectedBtn");
        $("#btnFullHouse").attr("disabled", "true");
    }
});


$("#btnSmallStraight").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var smallStraight = scores.CalculateScores(roll);
        scores.SetSmallStraight(smallStraight[9]);
        scores.SetSmallStraightSet(true);

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnSmallStraight").addClass("selectedBtn");
        $("#btnSmallStraight").attr("disabled", "true");
    }
});

$("#btnLargeStraight").click(function () {
    if (roll.rollNumGet != 0 && roll.rollNumGet < 4) {

        var largeStraight = scores.CalculateScores(roll);
        scores.SetLargeStraight(largeStraight[10]);
        scores.SetLargeStraightSet(true);

        roll = new DiceSet();
        roll.setQ();
        scores.SetZeros();
        selectedDie = [true, true, true, true, true];
        $("#roll").addClass("btnAvailable");
        $("#prompt").text("Please roll the dices to continue");
        $("#btnLargeStraight").addClass("selectedBtn");
        $("#btnLargeStraight").attr("disabled", "true");
    }
});

