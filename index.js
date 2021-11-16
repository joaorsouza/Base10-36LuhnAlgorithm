"use strict";
exports.__esModule = true;
var codePoints = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var codePointFromCharacter = function (character) {
    return codePoints.indexOf(character);
};
var checkIfStringHasOnlyDigits = function (value) {
    if (value.match(/^[0-9]+$/) != null) {
        return true;
    }
    return false;
};
var validateCheckCharacter = function (input) {
    var factor = 1;
    var sum = 0;
    var n = checkIfStringHasOnlyDigits(input) ? 10 : 36;
    // Starting from the right, work  leftwards
    // Now, the initial "factor" will always be "1"
    // since the last character is the check character.
    for (var i = input.length - 1; i >= 0; i--) {
        var codePoint = codePointFromCharacter(input.charAt(i));
        var addend = factor * codePoint;
        // Alternate the "factor" that each "codePoint" is multiplied by
        factor = factor === 2 ? 1 : 2;
        // Sum the digits of the "addend" as expressed in base "n"
        addend = Math.floor(addend / n) + (addend % n);
        sum += addend;
    }
    var remainder = sum % n;
    return remainder === 0;
};
exports["default"] = validateCheckCharacter;
