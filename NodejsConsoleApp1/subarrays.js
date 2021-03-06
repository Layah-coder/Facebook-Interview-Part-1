


function countSubarrays(arr) {
    // Write your code here
    let countArray = [];
    for (let i = 0; i < arr.length; i++) {
        let counter = 1;

        let nextRight = i + 1;
        let nextLeft = i - 1;
       
        while (arr[i] > arr[nextRight]) {
            nextRight++;
            counter++;
        }
        

        while (arr[i] > arr[nextLeft]) {
            nextLeft--;
            counter++;
        }
        

        countArray.push(counter);
        }

    return countArray;
    }
    














// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
    var size = array.length;
    var res = '';
    res += '[';
    var i = 0;
    for (i = 0; i < size; i++) {
        if (i !== 0) {
            res += ', ';
        }
        res += array[i];
    }
    res += ']';
    return res;
}

var test_case_number = 1;

function check(expected, output) {
    var expected_size = expected.length;
    var output_size = output.length;
    var result = true;
    if (expected_size != output_size) {
        result = false;
    }
    for (var i = 0; i < Math.min(expected_size, output_size); i++) {
        result &= (output[i] == expected[i]);
    }
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
        var out = rightTick + ' Test #' + test_case_number;
        console.log(out);
    }
    else {
        var out = '';
        out += wrongTick + ' Test #' + test_case_number + ': Expected ';
        out += printintegerArray(expected);
        out += ' Your output: ';
        out += printintegerArray(output);
        console.log(out);
    }
    test_case_number++;
}

var test_1 = [3, 4, 1, 6, 2];
var expected_1 = [1, 3, 1, 5, 1];
var output_1 = countSubarrays(test_1);
check(expected_1, output_1);

var test_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [1, 2, 6, 1, 3, 1];
var output_2 = countSubarrays(test_2);
check(expected_2, output_2);
