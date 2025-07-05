function topKFrequestElements(nums, k) {
	// bucket sort algorithm optimal approach

	const frequency = Array.from({ length: nums.length + 1 }, () => []);
	const map = {};
	for (element of nums) {
		map[element] = (map[element] || 0) + 1;
	}
	for (element of Object.keys(map)) {
		frequency[map[element]].push(element);
	}
	const res = [];
	for (let i = frequency.length - 1; i > 0; i--) {
		for (const number of frequency[i]) {
			if (res.length == k) break;
			res.push(number);
		}
	}
	return res;
}
console.log("The autocomplete is finally working");
console.log(topKFrequestElements([1, 1, 2, 3, 3, 3], 2));
