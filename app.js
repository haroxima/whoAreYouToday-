let image = document.getElementById('img');
let srcPath = [];

// srcPath.push('./img/meme1.jpg');
srcPath.push('./img/meme2.jpg');
// srcPath.push('./img/meme3.jpg');
srcPath.push('./img/meme4.jpg');
// srcPath.push('./img/meme5.jpg');
srcPath.push('./img/meme6.jpg');
srcPath.push('./img/meme7.jpg');
srcPath.push('./img/meme8.jpg');
srcPath.push('./img/meme9.jpg');
srcPath.push('./img/meme10.jpg');
srcPath.push('./img/meme12.jpg');
srcPath.push('./img/meme13.jpg');
srcPath.push('./img/meme14.jpg');
srcPath.push('./img/meme15.jpg');
srcPath.push('./img/meme16.jpg');
srcPath.push('./img/meme17.jpg');
srcPath.push('./img/meme18.jpg');
srcPath.push('./img/meme19.jpg');
srcPath.push('./img/meme20.jpg');
srcPath.push('./img/meme21.jpg');
srcPath.push('./img/meme22.jpg');
srcPath.push('./img/meme23.jpg');
srcPath.push('./img/meme24.jpg');
srcPath.push('./img/meme25.jpg');
srcPath.push('./img/meme26.jpg');
srcPath.push('./img/meme27.jpg');
srcPath.push('./img/meme28.jpg');
srcPath.push('./img/meme29.jpg');
srcPath.push('./img/meme30.jpg');
srcPath.push('./img/meme31.jpg');
srcPath.push('./img/meme32.jpg');
srcPath.push('./img/meme33.jpg');
srcPath.push('./img/meme34.jpg');
srcPath.push('./img/meme35.jpg');
srcPath.push('./img/meme36.jpg');
srcPath.push('./img/meme37.jpg');
srcPath.push('./img/meme38.jpg');
srcPath.push('./img/meme39.jpg');
srcPath.push('./img/meme40.jpg');

image.src = srcPath[Math.floor(Math.random() * srcPath.length)];

function changeImg() {
    image.src = srcPath[Math.floor(Math.random() * srcPath.length)];
}

// setInterval(changeImg, 5000);



