//-------------------------------------------------------
// Bridger!
//-------------------------------------------------------

var aSuits = ["S", "H", "D", "C"];		// Spades, Hearts, Diamonds and Clubs
var aRank = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

//-------------------------------------------------------
// Class Card ...
//-------------------------------------------------------
var oCard = {
	suit: '',
	rank: '',
	get_Suit: function() {
		return this.suit;
	},
	set_Suit: function(s) {
		this.suit = s;
	},
	get_Rank: function() {
		return this.rank;
	},
	set_Rank: function(r) {
		this.rank = r;
	}
};

/*
var oTest = {
	nom: '',
	edat: 36,
	met_A: function(a,b)
	{
		return a+b;
	}
	,
	met_b: function()
	{
		console.log("Hola");
	}
}

function diego()
{
	return 67;
}

oTest.met_C = diego;


oTest.met_C();
*/
 my_card = oCard;
 my_card.set_Suit('S');
 my_card.set_Rank('J');

console.log(my_card);

console.log(my_card.get_Suit());
