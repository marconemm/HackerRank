const plusMinus = arr => {
    let negativeCount = 0;
    let zeroCount = 0;
    let positiveCount = 0;

    arr.forEach(number => {
        if (number < 0)
            negativeCount++;
        else if (number === 0)
            zeroCount++;
        else
            positiveCount++;
    });

    const negativeProportion = Number.parseFloat(negativeCount / arr.length).toFixed(6);
    const zeroProportion = Number.parseFloat(zeroCount / arr.length).toFixed(6);
    const positiveProportion = Number.parseFloat(positiveCount / arr.length).toFixed(6);

    console.log(positiveProportion);
    console.log(negativeProportion);
    console.log(zeroProportion);
    
}
