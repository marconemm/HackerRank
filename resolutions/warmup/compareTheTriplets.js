const compareTriplets = (aliceRatingsList, bobRatingRatingsList) => {

    const result = [0, 0];
    for (let i = 0; i < aliceRatingsList.length; i++) {
        const aliceRating = aliceRatingsList[i];
        const bobRating = bobRatingRatingsList[i];

        if (aliceRating > bobRating)
            result[0] += 1;
        else if (aliceRating < bobRating)
            result[1] += 1;
    }

    return result;
}
