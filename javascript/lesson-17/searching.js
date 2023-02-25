var array1 = [1, 2, 6, 3, 9, 2, 7, 5, 0];
// linear
for (var i = 0; i < array1.length; i++) {
    var element = array1[i];
}
// binary
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 9
// 1 => 5 => right
// 1 => 7 => right
// 8
// 9
function binary(array, search) {
    if (array.length === 0) {
        return null;
    }
    var medium = Math.round(array.length / 2);
    console.log({ array: array });
    if (search === array[medium]) {
        return medium;
    }
    else if (search > array[medium]) {
        return binary(array.slice(medium + 1), search);
    }
    else {
        return binary(array.slice(0, medium), search);
    }
}
binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
