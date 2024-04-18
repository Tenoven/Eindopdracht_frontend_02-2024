function alphabetizeInverseArray(apiData) {
    const sortedArray = apiData.slice().sort((a, b) => {
        const itemA = a.name.toLowerCase();
        const itemB = b.name.toLowerCase();
        if (itemA < itemB) {
            return 1;
        }
        if (itemA > itemB) {
            return -1;
        }
        return 0;
    });
    return sortedArray;
}

export default alphabetizeInverseArray