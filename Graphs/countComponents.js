function countComponents(n, edges) {
    const graph = Array.from({length: n}, () => []);
    for( let [x,y] of edges) {
        graph[x].push(y);
        graph[y].push(x);
    }
    const visited = Array(n).fill(false);
    // function bfs(node){
    //     const queue = new Queue([node]);
    //     visited[node] = true;
    //     while(!queue.isEmpty()){
    //         const ele = queue.pop();
    //         for(const neigh of graph[ele]){
    //             if(!visited[neigh]){
    //                 visited[neigh] = true;
    //                 queue.push(neigh);
    //             }
    //         }
    //     }
    // }
    function dfs(node){
        if(visited[node]) return;
        visited[node] = true;
        for(let nei of graph[node]) {
                dfs(nei);  
        }
            
    }
    let res = 0;
    for(let i = 0; i< n; i++){
        if(!visited[i]){
            dfs(i);
            res++;
        }
    }
    return res;
}
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4],[4,0]]));
console.log(countComponents(5, [[0,1],[1,2],[3,4]]));
