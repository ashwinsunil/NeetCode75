function isPalindrome(s) {
	s = s.replace(/[^a-zA-Z0-9]/g, "");
	s = s.toLowerCase();
	console.log(s);
	let i = 0;
	let j = s.length - 1;
	while (i < j) {
		if (s.charAt(i) !== s.charAt(j))
			return false;
		i++;
		j--;
	}
	return true;
}
console.log(isPalindrome("was is taasdf sdfas. asdfasdf?"));
