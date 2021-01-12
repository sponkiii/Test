var quotes = [
    '"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself."',
    '"If you can visualize it, if you can dream it, there\'s some way to do it."',
    '"Learning never exhausts the mind."',
    '"The journey of a thousand miles begins with one step."',
    '"If you cannot do great things, do small things in a great way."'
]
var authorsVar = [
    '~ Henry James','~ Walt Disney','~ Leonardo da Vinci','~ Lao Tzu','~ Napoleon Hill'
]
 
function generate() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
    document.getElementById('author-here').innerHTML = authorsVar[randomNumber];
}