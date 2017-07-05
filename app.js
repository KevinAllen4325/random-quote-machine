var anchorman = [
	{
		quote: "Baxter, is that you? Baxter! Bark twice if you’re in Milwaukee!"
		, author: "Ron Burgundy"
	}
	, {
		quote: "There were horses, and a man on fire, and I killed a guy with a trident."
		, author: "Brick Tamland"
	}
	, {
		quote: "You look like a blueberry."
		, author: "Veronica Corningstone"
	}
	, {
		quote: "It’s so damn hot. Milk was a bad choice."
		, author: "Ron Burgundy"
	}
	, {
		quote: "They’ve done studies, you know. 60 percent of the time, it works every time."
		, author: "Brian Fantana"
	}
	, {
		quote: "..That doesn't make sense..."
		, author: "Ron Burgundy"
	}
	, {
		quote: "It doesn't matter whose fault the break-up was, I was stubborn, you were like a mentally ill whore from the 1800's."
		, author: "Ron Burgundy"
	}
	, {
		quote: "What? You pooped in the refrigerator? And you ate the whole wheel of cheese? How’d you do that? Heck, I’m not even mad; that’s amazing."
		, author: "Ron Burgundy"
	}
	, {
		quote: "I’m laughing like a ventriloquist dummy!"
		, author: "Ron Burgundy"
	}
	, {
		quote: "I paid a hobo to spoon me."
		, author: "Ron Burgundy"
	}
	, {
		quote: "I gave her a whole Brady Bunch of crabs."
		, author: "Brian Fantana"
	}
	, {
		quote: "If you've got an ass like the North Star, wise men are gonna want to follow it."
		, author: "Ron Burgundy"
	}
		, {
		quote: "I’m fucking miserable. I had to get up at 10 o’clock this morning."
		, author: "Dale Doback"
	}
			, {
		quote: "My mom is being eaten by a dog and there’s nothing I can do!"
		, author: "Brennan Huff"
	}
			, {
		quote: "Brennan, that is the voice of an angel. Brennan I can’t even make eye contact with you right now. Your voice is like a combination of Fergie and Jesus."
		, author: "Dale Doback"
	}
				, {
		quote: "You and your mom are hillbillies. This is a house of learned doctors."
		, author: "Dale Doback"
	}
				, {
		quote: "This is going to sound weird, but for a second, I think you took on the shape of a unicorn."
		, author: "Dale Doback"
	}
				, {
		quote: "Maybe someday we could become friends. Friends who ride majestic, translucent steeds, shooting flaming arrows across the bridge of Hemdale."
		, author: "Brennan Huff"
	}
				, {
		quote: "Don't let the turkeys get ya down. You gotta fly like an eagle, not be like a turkey. It's your health, for your health."
		, author: "Cool Steve Brule"
	}
				, {
		quote: "One of paper equals 4 of coin."
		, author: "Dr. Steve Brule"
	}
];
var fa = "<i class='fa fa-quote-left' aria-hidden='true''></i>";
var count;
document.getElementById('btn').addEventListener("click", function () {
	count = Math.floor(Math.random() * 20) + 1;
	$('.qt').empty();
	$('.qt').append("<p class='quotes fade'>" + fa + anchorman[count].quote + "</p><p class='author fade'>- " + anchorman[count].author);;
})

function tweet() {
window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='   + encodeURIComponent(anchorman[count].quote));
}