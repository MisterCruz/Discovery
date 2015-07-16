function randomizeYoutubeVideo() {

    var videos = [
    'fjvNMhRt4NI',
    'JC2egrdAVYs',
    '8AoRmlAZVTs',
    'HOfll06X16c'
    ];
    
    var index = Math.floor(Math.random() * videos.length);
    var html='<div id="video"><iframe width="560" height="315"   src="https://www.youtube.com/embed/' + videos[index] + '?autoplay=0" frameborder="0" allowfullscreen></iframe></div>';
    
    // we need to append the text inside the html variable in the page
    $('#videoPlayer').append(html);

}

function randomizeSongs(){
    
    var songs = [
    'songs/spooky-scary-skeletons.mp3',
    'songs/SAINT PEPSI - Hit Vibes - 01 Hit Vibes.mp3',
    'songs/SAINT PEPSI - Hit Vibes - 04 Cherry Pepsi.mp3',
    'songs/SAINT PEPSI - LUXURY ELITE - LATE NIGHT DELIGHT (Remastered) - 19 SAINT PEPSI - ANGELS.mp3'
    ];
    
    var orange = Math.floor(Math.random() * songs.length);
    var grape ='<div id="song"><audio controls><source src="' + songs[orange] + '"></audio></div>';
    
    $('#musicPlayer').append(grape);

}

$(document).ready(function() {
    randomizeYoutubeVideo();
    randomizeSongs();
});