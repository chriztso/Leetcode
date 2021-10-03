var deepestLeavesSum = function (root) {
    let levels = {}
    function traverse(node, level) {
        if (levels[level]) {
            levels[level].push(node.val)
        } else {
            levels[level] = [node.val]
        }
        if (node.right) {
            traverse(node.right, level + 1)
        }
        if (node.left) {
            traverse(node.left, level + 1)
        }
    }
    traverse(root, 0)
    const deepestLevel = Object.entries(levels).sort((a, b) => Number(b[0]) - Number(a[0]))[0]
    const deepestLevelSum = deepestLevel[1].reduce((a, b) => a + b)
    return deepestLevelSum

};