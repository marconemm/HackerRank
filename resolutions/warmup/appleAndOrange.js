const countApplesAndOranges = (starHousePoint, endHousePoint, appleTree, orangeTree, applesList, orangesList) => {
    applesList = applesList.map(apple => appleTree + apple);
    orangesList = orangesList.map(orange => orangeTree + orange);

    const applesInRange = applesList.filter(apple => (apple >= starHousePoint && apple <= endHousePoint));
    const orangesInRange = orangesList.filter(orange => (orange <= endHousePoint && orange >= starHousePoint));

    console.log(applesInRange.length);
    console.log(orangesInRange.length);
}