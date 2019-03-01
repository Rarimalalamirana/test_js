
num = prompt('De quel nombre veux-tu calculler l actoriel!');
var mots = "Le resultat est "
function rFact(nu)
{
    if (nu === 0)
      { return 1; }
    else if (nu > 0)
      { return nu * rFact( nu - 1 ); }
else{
	return "null puissque vous venez de entre un nombre negetif"
}
}
console.log(mots + rFact(num))