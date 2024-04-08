function statTooModifier(stat) {
    const modifierValue = Math.floor((parseInt(stat) - 10) / 2);
    return modifierValue;
}

export default statTooModifier;