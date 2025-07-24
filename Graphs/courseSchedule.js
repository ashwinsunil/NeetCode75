function canFinish(numCourses, prerequisites) {
    const preMap = new Map();
    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }
    for (let i = 0; i < prerequisites.length; i++) {
        preMap.get(prerequisites[i][0]).push(prerequisites[i][1]);
    }
    function dfs(i, visited) {
        if (preMap.get(i).length === 0) {
            return true;
        }
        if (visited.has(i)) {
            return false;
        }
        visited.add(i);
        for (let j = 0; j < preMap.get(i).length; j++) {
            if (!dfs(preMap.get(i)[j], visited)) return false;
        }
        visited.delete(i);
        preMap.set(i, []);
        return true;
    }
    const visited = new Set();
    for (let key of preMap.keys()) {
        if (!dfs(key, visited)) return false;
    }
    return true;
}
console.log(
    canFinish(2, [
        [0, 1],
        [1, 0]
    ])
);
console.log(
    canFinish(4, [
        [0, 1],
        [0, 2],
        [0, 3],
        [2, 3],
        [3, 1]
    ])
);
