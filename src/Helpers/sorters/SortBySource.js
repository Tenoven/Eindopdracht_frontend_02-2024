function sortBySource(apiData) {
    const sortedArray = apiData.slice().sort((a, b) => {
        const itemA = a.document__slug.toLowerCase();
        const itemB = b.document__slug.toLowerCase();
        if (itemA < itemB) {
            return -1;
        }
        if (itemA > itemB) {
            return 1;
        }
        return 0;
    });
    return sortedArray;
}

export default sortBySource