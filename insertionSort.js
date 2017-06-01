function insertionSort(array){
    if(array.length <= 1){
        return 0;
    }
    var cont = 0;
    var j = 1;
    var tempIndex;
    var tempValue;

    while (j < array.length){
        tempIndex = j - 1;
        tempValue = parseInt(array[j]);

        if(!(tempValue > 0 && tempValue <= 10000000)){
            return 0;
        }

        while (tempValue < parseInt(array[tempIndex]) && tempIndex >= 0){
            array[tempIndex + 1] = array[tempIndex];
            cont++;
            tempIndex--;
        }
        array[tempIndex + 1] = tempValue;

        j++;
    }
    return cont;
}

function print(array){
    var output = "";
    for(i = 0; i < array.length; i++){
        output += array[i] + " ";
    }
    console.log(output);
}

function processData(input) {
    //Enter your code here
    var inputLines = input.split('\n');
    var arraysQtt = parseInt(inputLines[0]);

    if(arraysQtt > 0 && arraysQtt <= 15){
        var i = 2;
        var max = arraysQtt * 2;
        var temp = parseInt(inputLines[i - 1]);

        while(i <= max){
            if(temp > 0 && temp <= 100000){
              console.log(insertionSort(inputLines[i].split(' ')));
            }else{
              console.log(0);
              return;
            }

            i += 2;
        }
    }else{
      console.log(0);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
