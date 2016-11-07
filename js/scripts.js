var ZygZak = new Character('Auta', 'ZygZak McQueen', 'Złomek', 'holownik', 'male');
var Arielka = new Character('Mała Syrenka', 'Ariel', 'Florek', 'rybka', 'female');
var Blaze = new Character('Blaze i megamaszyny', 'Blaze', 'AJ', 'chłopiec', 'male');
var Elsa = new Character('Kraina Lodu', 'Elsa', 'Olaf', 'bałwanek', 'female');

function Character(story, name, bestFriend, type, sex) {
	this.story = story;
	this.name = name;
	this.bestFriend = bestFriend;
	this.type = type;
	this.sex = sex;
}

Character.prototype.printHero = function() {
	if (this.sex === 'male') {
		console.log(this.name + ' to bohater bajki "' + this.story + '". Jego najlepszy przyjaciel ' + this.bestFriend + ' to ' + this.type + '.');
	};
	if (this.sex === 'female') {
		console.log(this.name + ' to bohaterka bajki "' + this.story + '". Jej najlepszy przyjaciel ' + this.bestFriend + ' to ' + this.type + '.');
	}; 
}

ZygZak.printHero();
Arielka.printHero();
Blaze.printHero();
Elsa.printHero();