function evaluateTreeLeafs(tree) {
    const keys = Object.keys(tree);
    if (keys.length === 0) return undefined;

    let leafValue;
    let leafsAreEqual = true;

    keys.forEach((key) => {
        itemValue = tree[key];

        if (typeof (itemValue) === "object" && itemValue !== null) {
            const branchResult = evaluateTreeLeafs(itemValue);

            if (branchResult === undefined) return true; // ignore branch & continue

            if (branchResult.leafsAreEqual) {
                if (leafValue === undefined) {
                    leafValue = branchResult.leafValue;
                } else {
                    if (leafValue !== branchResult.leafValue) {
                        leafsAreEqual = false;
                        return false;
                    }
                }
            } else {
                leafsAreEqual = false;
                return false;
            }

        } else {
            if (leafValue === undefined) {
                leafValue = itemValue;
            } else {
                if (itemValue !== leafValue) {
                    leafsAreEqual = false;
                    return false;
                }
            }
        }
    });

    return {
        leafsAreEqual,
        leafValue
    };
}

module.exports = evaluateTreeLeafs;