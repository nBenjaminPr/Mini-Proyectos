let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : './asset/img/Stan.jpg',
        name : 'Stan Long',
        artist : 'Eminem ft Dido',
        music : 'music/Stan Long.mp3'
    },
    {
        img : './asset/img/SeeYouAgain.jpg',
        name : 'See You Again',
        artist : 'Wiz Khalifa ft Charlie Puth',
        music : 'music/SeeYouAgain.mp3'
    },{
        img : './asset/img/7Year.jpg',
        name : '7 Year',
        artist : 'Lukas Graham',
        music : 'music/7Year.mp3'
    },{
        img : './asset/img/Criminal.jpg',
        name : 'Smooth Criminal',
        artist : 'Michael Jackson',
        music : 'music/Criminal.mp3'
    }
];

