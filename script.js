document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
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
    const tracks = document.querySelectorAll('.track:not(.disabled)');
    const trackPlayButtons = document.querySelectorAll('.play-btn:not(:disabled)');

    // Player state
    let currentTrackIndex = -1;
    let isPlaying = false;
    let isMuted = false;
    let previousVolume = 1;
    const availableTracks = [3, 10, 12]; // Track IDs that are available

    // Initialize player
    audioPlayer.volume = volumeSlider.value / 100;

    // Functions
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function updateProgressBar() {
        if (audioPlayer.duration) {
            const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progress.style.width = `${percentage}%`;
            currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
            durationDisplay.textContent = formatTime(audioPlayer.duration);
        }
    }

    function loadTrack(trackId) {
        const trackIndex = availableTracks.indexOf(trackId);
        if (trackIndex === -1) return;

        currentTrackIndex = trackIndex;
        audioSource.src = `/static/audio/tracks/track${trackId}.mp3`;
        audioPlayer.load();

        // Update UI
        updateTrackInfo(trackId);
        resetPlayerUI();

        // Highlight current track in list
        highlightPlayingTrack(trackId);

        // Auto play when loading a new track
        playTrack();
    }

    function updateTrackInfo(trackId) {
        const trackElement = document.querySelector(`.track[data-track-id="${trackId}"]`);
        if (trackElement) {
            currentTrackNumber.textContent = trackId;
            currentTrackTitle.textContent = `Pista ${trackId}`;
            currentTrackDuration.textContent = trackElement.querySelector('.track-duration').textContent;
        }
    }

    function resetPlayerUI() {
        progress.style.width = '0%';
        currentTimeDisplay.textContent = '0:00';
        durationDisplay.textContent = '0:00';
    }

    function highlightPlayingTrack(trackId) {
        // Remove playing class from all tracks
        document.querySelectorAll('.track').forEach(track => {
            track.classList.remove('playing');
        });

        // Add playing class to current track
        const currentTrack = document.querySelector(`.track[data-track-id="${trackId}"]`);
        if (currentTrack) {
            currentTrack.classList.add('playing');
        }
    }

    function playTrack() {
        audioPlayer.play().then(() => {
            isPlaying = true;
            playPauseBtn.classList.add('playing');
            
            // Cambiar el fondo según el track actual
            changeBgColorForTrack(availableTracks[currentTrackIndex]);
        }).catch(error => {
            console.error('Playback failed:', error);
        });
    }

    function pauseTrack() {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.classList.remove('playing');
        
        // Transición suave al fondo gris
        document.body.classList.add('fade-out-bg');
        
        // Después de la transición, eliminar todas las clases excepto fade-out-bg
        setTimeout(() => {
            document.body.className = '';
        }, 800);
    }
    
    function changeBgColorForTrack(trackId) {
        // Añadir clase de transición para efecto fade
        document.body.classList.add('fade-transition');
        
        // Limpiar todas las clases no necesarias primero
        document.body.classList.remove('mesh-blue-purple', 'mesh-green-aqua', 'mesh-red-purple', 'fade-out-bg');
        
        // Aplicar la clase según la canción
        switch(trackId) {
            case 3:
                document.body.classList.add('mesh-blue-purple');
                break;
            case 10:
                document.body.classList.add('mesh-green-aqua');
                break;
            case 12:
                document.body.classList.add('mesh-red-purple');
                break;
            default:
                // No hacer nada, se mantiene el fondo por defecto
                break;
        }
    }

    function togglePlayPause() {
        if (currentTrackIndex === -1 && availableTracks.length > 0) {
            // If no track is selected, load the first available track
            loadTrack(availableTracks[0]);
            return;
        }

        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    }

    function playNextTrack() {
        if (currentTrackIndex === -1) return;
        
        const nextIndex = (currentTrackIndex + 1) % availableTracks.length;
        loadTrack(availableTracks[nextIndex]);
    }

    function playPreviousTrack() {
        if (currentTrackIndex === -1) return;
        
        const prevIndex = (currentTrackIndex - 1 + availableTracks.length) % availableTracks.length;
        loadTrack(availableTracks[prevIndex]);
    }

    function toggleMute() {
        if (isMuted) {
            audioPlayer.volume = previousVolume;
            volumeSlider.value = previousVolume * 100;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            previousVolume = audioPlayer.volume;
            audioPlayer.volume = 0;
            volumeSlider.value = 0;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
        isMuted = !isMuted;
    }

    function setProgressBarPosition(event) {
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = event.clientX - rect.left;
        const percentage = clickPosition / rect.width;
        
        // Set current time based on click position
        if (audioPlayer.duration) {
            audioPlayer.currentTime = percentage * audioPlayer.duration;
        }
    }

    // Event Listeners
    playPauseBtn.addEventListener('click', togglePlayPause);
    nextBtn.addEventListener('click', playNextTrack);
    prevBtn.addEventListener('click', playPreviousTrack);
    muteBtn.addEventListener('click', toggleMute);

    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = this.value / 100;
        if (this.value > 0 && isMuted) {
            isMuted = false;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else if (this.value == 0) {
            isMuted = true;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    progressBar.addEventListener('click', setProgressBarPosition);

    // Track playback events
    audioPlayer.addEventListener('timeupdate', updateProgressBar);
    
    audioPlayer.addEventListener('ended', function() {
        playNextTrack();
    });

    audioPlayer.addEventListener('play', function() {
        isPlaying = true;
        playPauseBtn.classList.add('playing');
        
        // Asegurar que el fondo cambie cuando se usa el evento play
        if (currentTrackIndex !== -1) {
            changeBgColorForTrack(availableTracks[currentTrackIndex]);
        }
    });

    audioPlayer.addEventListener('pause', function() {
        isPlaying = false;
        playPauseBtn.classList.remove('playing');
        
        // Transición suave al fondo gris
        document.body.classList.add('fade-out-bg');
        
        // Después de la transición, eliminar todas las clases excepto fade-out-bg
        setTimeout(() => {
            document.body.className = '';
        }, 800);
    });

    // Track list click handlers
    trackPlayButtons.forEach(button => {
        button.addEventListener('click', function() {
            const trackId = parseInt(this.closest('.track').dataset.trackId);
            
            if (currentTrackIndex !== -1 && trackId === availableTracks[currentTrackIndex] && isPlaying) {
                // If it's the current track and playing, just pause
                pauseTrack();
            } else {
                // Otherwise load and play the new track
                loadTrack(trackId);
            }
        });
    });

    // Handle keyboard controls
    document.addEventListener('keydown', function(event) {
        switch(event.code) {
            case 'Space':
                event.preventDefault();
                togglePlayPause();
                break;
            case 'ArrowRight':
                playNextTrack();
                break;
            case 'ArrowLeft':
                playPreviousTrack();
                break;
            case 'ArrowUp':
                volumeSlider.value = Math.min(parseInt(volumeSlider.value) + 10, 100);
                audioPlayer.volume = volumeSlider.value / 100;
                break;
            case 'ArrowDown':
                volumeSlider.value = Math.max(parseInt(volumeSlider.value) - 10, 0);
                audioPlayer.volume = volumeSlider.value / 100;
                break;
        }
    });

    // Initialize tooltip for mobile
    tracks.forEach(track => {
        if (track.classList.contains('disabled')) {
            track.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Esta canción estará disponible próximamente.');
            });
        }
    });
});
