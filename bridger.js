//-------------------------------------------------------
// Bridger!
//-------------------------------------------------------

var aSuits = ["S", "H", "D", "C"];		// Spades, Hearts, Diamonds and Clubs
var aRank = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

//-------------------------------------------------------
// Class Card ...
//-------------------------------------------------------
var oCard = {
	sSuit: '',
	sRank: '',
	GetSuit: function() {
		return this.sSuit;
	},
	SetSuit: function(s) {
		aux = s.toUpperCase();
		if(aSuits.indexOf(aux) >= 0) {
			this.sSuit = aux;
		}
	},
	GetRank: function() {
		return this.sRank;
	},
	SetRank: function(r) {
		aux = r.toUpperCase();
		if(aRank.indexOf(aux) >= 0){
			this.sRank = aux;
		}
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
