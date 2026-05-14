document.addEventListener('DOMContentLoaded', () => {
            audioPlayer.pause();
        }
    }

    function updateProgress() {

        if (!audioPlayer.duration) return;

        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;

        progress.style.width = `${percent}%`;

        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    }

    function seek(event) {

        const rect = progressBar.getBoundingClientRect();

        const percent = (event.clientX - rect.left) / rect.width;

        audioPlayer.currentTime = percent * audioPlayer.duration;
    }

    playPauseBtn.addEventListener('click', togglePlayPause);

    nextBtn.addEventListener('click', () => {

        if (currentTrackIndex === -1) return;

        const next = (currentTrackIndex + 1) % availableTracks.length;

        loadTrack(availableTracks[next]);
    });

    prevBtn.addEventListener('click', () => {

        if (currentTrackIndex === -1) return;

        const prev = (currentTrackIndex - 1 + availableTracks.length) % availableTracks.length;

        loadTrack(availableTracks[prev]);
    });

    volumeSlider.addEventListener('input', e => {
        audioPlayer.volume = e.target.value / 100;
    });

    muteBtn.addEventListener('click', () => {

        audioPlayer.muted = !audioPlayer.muted;

        muteBtn.innerHTML = audioPlayer.muted
            ? '<i class="fas fa-volume-mute"></i>'
            : '<i class="fas fa-volume-up"></i>';
    });

    progressBar.addEventListener('click', seek);

    audioPlayer.addEventListener('timeupdate', updateProgress);

    audioPlayer.addEventListener('play', () => updatePlaybackUI(true));

    audioPlayer.addEventListener('pause', () => updatePlaybackUI(false));

    audioPlayer.addEventListener('ended', () => {
        nextBtn.click();
    });

    trackButtons.forEach(button => {

        button.addEventListener('click', () => {

            const trackId = parseInt(
                button.closest('.track').dataset.trackId
            );

            loadTrack(trackId);
        });
    });

});
