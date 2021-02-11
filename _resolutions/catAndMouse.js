// Complete the catAndMouse function below.
const catAndMouse = (x, y, z) => {
    while (x !== z && y !== z) {
        if (x < z)
            x++;
        else
            x--;

        if (y < z)
            y++;
        else
            y--;
    }

    let result = '';

    if (x === z && y !== z)
        result = 'Cat A';
    else if (x !== z && y === z)
        result = 'Cat B';
    else
        result = 'Mouse C';
        
    return result;
}
