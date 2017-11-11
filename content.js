var profanityList = ["fuck", "shit", "Ass", "cunt", "bitch", "Tits", "pussy", "hobknocker", "fag", "faggot", "fucker", "fucking", "asshole", "dicks", "dick", "slut", "Hoes", "skank", "dick", "bitchass", "Wanker", "Bloody", "clit", "cock", " cum ", "douchbag", "dike", "douche", "dumbass", "motherfucker"];

$("p, dl, dd, dt").each(function()
{
	var replaced = $(this).text();
	
	for (var i = 0; i < profanityList.length; i++)
	{
		replaced = replaced.replace(profanityList[i].toLowerCase(), "HARASSMENT IS NEVER OKAY.");
		replaced = replaced.replace(profanityList[i].substring(0, 1).toUpperCase() + profanityList[i].toLowerCase().substring(1), "HARASSMENT IS NEVER OKAY.");
	}
	$(this).text(replaced);
});