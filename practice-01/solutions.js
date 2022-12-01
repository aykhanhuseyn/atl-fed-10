function defangIPaddr(address) {
	let i = 0,
		res = '';
	while (i < address.length) {
		if (address[i] == '.') {
			res += '[.]';
		} else {
			res += address[i];
		}
		i++;
	}
	return res;
}
