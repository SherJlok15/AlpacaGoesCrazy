export function addNewContinent(n, m) {
	function generateRandomName(title) {
		return `New ${title} ${Math.random().toString().split('.')[1]}`
	}
	let randomContinentName = generateRandomName('continent')

	let continent = {
		code: randomContinentName,
		name: randomContinentName,
		countries: [],
	}
	let depthTree = n > 2 ? 2 : n
	let numberOfchildren = m
	if (depthTree === 0) {
		return continent
	}
	for (let i = 0; i < numberOfchildren; i++) {
		let randomCountryName = generateRandomName('country')
		continent.countries.push(
			{
				code: randomCountryName,
				name: randomCountryName,
				languages: []
			}
		)
	}
	if (depthTree === 2) {
		continent.countries.map(c => {
			for (let i = 0; i < numberOfchildren; i++) {
				let randomLanguageName = generateRandomName('language')
				c.languages.push({
					code: randomLanguageName,
					name: randomLanguageName,
				})
			}
			return c
		})
	}
	return continent
}