document.addEventListener('DOMContentLoaded', () => {

    const audioPlayer = document.getElementById('audio');
    const audioSource = document.getElementById('audio-source');

    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const muteBtn = document.getElementById('mute-btn');

    const volumeSlider = document.getElementById('volume-slider');

    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress');

    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    const currentTrackNumber = document.getElementById('current-track-number');
    const currentTrackTitle = document.getElementById('current-track-title');
    const currentTrackDuration = document.getElementById('current-track-duration');

    const trackButtons = document.querySelectorAll('.play-btn:not(:disabled)');

    const availableTracks = [3, 10, 12];

    let currentTrackIndex = -1;
    let isPlaying = false;

    audioPlayer.volume = 1;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);

        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updatePlaybackUI(state) {

        isPlaying = state;

        playPauseBtn.classList.toggle('playing', state);

        document.body.classList.remove('is-idle');

        if (state && currentTrackIndex !== -1) {
            changeTheme(availableTracks[currentTrackIndex]);
        } else {
            document.body.className = 'is-idle';
        }
    }

    function loadTrack(trackId) {

        currentTrackIndex = availableTracks.indexOf(trackId);

        audioSource.src = `/preview/${trackId}.wav`;

        audioPlayer.load();

        const trackElement = document.querySelector(`.track[data-track-id="${trackId}"]`);

        currentTrackNumber.textContent = trackId;
        currentTrackTitle.textContent = trackElement.querySelector('.track-title').textContent;
        currentTrackDuration.textContent = trackElement.querySelector('.track-duration').textContent;

        highlightTrack(trackId);

        audioPlayer.play();
    }

    function highlightTrack(trackId) {

        document.querySelectorAll('.track').forEach(track => {
});
