const hurdleRace = (k, height) => {
    const maxHeight = Math.max(...height);

    if (maxHeight <= k)
        return 0;

    return (maxHeight - k);
};// hurdleRace(k, height)
