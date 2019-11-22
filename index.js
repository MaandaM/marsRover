$(document).ready(function () {
    //alert("hello");
});

function move(val) {
    document.getElementById("commands").value += val;
}

function rotateLeft(val) {
    document.getElementById("commands").value += val;
}

function rotateRight(val) {
    document.getElementById("commands").value += val;
}

function clearCommands() {
    $("#commands").val("");
}

function traverseGrid(numOfBlocks, finalPosition, direction) {

    if (direction == 'N' || direction == 'E') {
        finalPosition = +finalPosition + +1;

        if (finalPosition >= numOfBlocks) {
            finalPosition = numOfBlocks;
        } else if (finalPosition < 1) {
            finalPosition = 1;
        }
    } else if (direction == 'S' || direction == 'W') {
        finalPosition = +finalPosition - +1;

        if (finalPosition >= numOfBlocks) {
            finalPosition = numOfBlocks;
        } else if (finalPosition < 1) {
            finalPosition = 1;
        }
    }

    return finalPosition;
}

function executeCommands() {

    var numHorBlocks = $("#numHorBlocks").val();
    var numVerBlocks = $("#numVerBlocks").val();
    var startPosHor = $("#startPosHor").val();
    var startPosVer = $("#startPosVer").val();
    var directionFacing = $("#directionFacing").val();

    var finalPosHor = startPosHor;
    var finalPosVer = startPosVer;

    var commands = $("#commands").val();
    var commandsArray = commands.split('');

    $.each(commandsArray, function (i, val) {
        switch (val) {
            case 'M':
                if (directionFacing == 'N') {
                    finalPosVer = traverseGrid(numVerBlocks, finalPosVer, directionFacing);
                } else if (directionFacing == 'S') {
                    finalPosVer = traverseGrid(numVerBlocks, finalPosVer, directionFacing);
                } else if (directionFacing == 'W') {
                    finalPosHor = traverseGrid(numHorBlocks, finalPosHor, directionFacing);
                } else {
                    finalPosHor = traverseGrid(numHorBlocks, finalPosHor, directionFacing);
                }
                break;
            case 'L':
                if (directionFacing == 'N') {
                    directionFacing = 'W';
                } else if (directionFacing == 'S') {
                    directionFacing = 'E';
                } else if (directionFacing == 'W') {
                    directionFacing = 'S';
                } else {
                    directionFacing = 'N';
                }
                break;
            case 'R':
                if (directionFacing == 'N') {
                    directionFacing = 'E';
                } else if (directionFacing == 'S') {
                    directionFacing = 'W';
                } else if (directionFacing == 'W') {
                    directionFacing = 'N';
                } else {
                    directionFacing = 'S';
                }
                break;
            default:
                alert('default');
        }
    });

    $("#landingPos").text(finalPosHor + ' ' + finalPosVer + ' ' + directionFacing);

}