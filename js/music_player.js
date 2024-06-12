document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("audio");
    const nowPlayingElement = document.getElementById("now-playing");

    const songs = [
        { src: 'sounds/music1.mp3', name: '"I Dont Care" by VIOLENT VIRA' },
        { src: 'sounds/music2.mp3', name: '"God Complex" by VIOLENT VIRA, Prod. Anticøn' },
        { src: 'sounds/music3.mp3', name: '"Tarantula Girl" by VIOLENT VIRA' },
        { src: 'sounds/music4.mp3', name: 'Youre Not Gone, Youre Just Dead! by VIOLENT VIRA'}
    ];

    let currentSongIndex = 0;

    function playNextSong() {
        const song = songs[currentSongIndex];
        audioElement.src = song.src;
        nowPlayingElement.textContent = `Now playing: ${song.name}`;
        audioElement.play();
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }

    audioElement.addEventListener('ended', playNextSong);
    playNextSong();
});
