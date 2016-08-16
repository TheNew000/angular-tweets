var tweets = [];

function Tweet (title, userName, postContent, img, postTime){
    this.title = title;
    this.userName = userName;
    this.postContent = postContent;
    this.img = img;
    this.postTime = postTime;
}

Tweet.prototype.getTimeSince = function(theDate) {
    // var timeSince = (theDate - this.postTime) / 1000;
    // if(timeSince > secondsInAYear){
    //     var textToPost = Math.floor(timeSince/secondsInAYear);
    // }
    return (theDate - this.postTime) / 1000;
};

Tweet.prototype.company = 'twitter';

var tweet1 = new Tweet('title', 'dc4lyfe', 'I LOVE HAM!!!', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', '1471355826');
var tweet2 = new Tweet('title2', 'harambe4lyfe', 'I TOO LOVE HAM!!!', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', '1471355726');
// console.log(tweet1.getTimeSince(Date.now()));
// console.log(tweet2.getTimeSince(Date.now()));

tweets.push(tweet1);
tweets.push(tweet2);

console.log(tweets);
