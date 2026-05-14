# Rework moderno y optimizado para tu reproductor

Tu sitio ya tiene una vibra muy buena: minimalista, oscura, medio experimental y con estética de álbum exclusivo. Lo que le falta no es identidad, sino refinamiento visual y optimización.

## Lo que ya funciona bien

* Fondos dinámicos animados por canción.
* UI oscura estilo streaming/app premium.
* Layout limpio.
* Uso de `Archivo` (muy buena elección).
* Sticky player.
* Animaciones suaves.

El problema es que ahora mismo el diseño se siente un poco “Bootstrap 2021”.

La idea es llevarlo más hacia:

* estética glassmorphism suave
* iluminación ambiental
* motion design moderno
* spacing más elegante
* menos bloques cuadrados
* más profundidad visual
* menos gris plano

---

# 1. ELIMINA BOOTSTRAP

No lo estás usando realmente.

Quita esto:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
```

Eso reduce peso y hace el sitio más limpio.

---

# 2. HAZ EL BACKGROUND MÁS CINEMÁTICO

Tu gradiente está cool, pero todavía parece “CSS gradient”.

Haz esto:

```css
body::before {
    content: "";
    position: fixed;
    inset: 0;
    background:
        radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 30%),
        radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 30%);
    pointer-events: none;
    z-index: -1;
}
```

Eso agrega iluminación ambiental real.

---

# 3. HAZ EL PLAYER MÁS PREMIUM

Tu player actual:

```css
background-color: #333;
```

Eso hace que parezca una app vieja.

Reemplázalo por:

```css
.player-container {
    position: sticky;
    top: 20px;

    background: rgba(20,20,20,0.45);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);

    border: 1px solid rgba(255,255,255,0.08);

    border-radius: 28px;

    box-shadow:
        0 10px 40px rgba(0,0,0,0.35),
        inset 0 1px 0 rgba(255,255,255,0.05);

    padding: 1.8rem;
}
```

Eso inmediatamente hace que parezca una app moderna tipo:

* Apple Music
* Nothing
* Arc Browser
* Teenage Engineering
* Spotify experimental UI

---

# 4. AGREGA GLOW DINÁMICO SEGÚN LA CANCIÓN

Tu fondo cambia.

Ahora haz que TODO el sitio respire el color.

Por ejemplo:

```css
.mesh-blue-purple .player-container {
    box-shadow:
        0 0 80px rgba(80,120,255,0.18),
        0 10px 40px rgba(0,0,0,0.35);
}

.mesh-green-aqua .player-container {
    box-shadow:
        0 0 80px rgba(60,255,180,0.18),
        0 10px 40px rgba(0,0,0,0.35);
}

.mesh-red-purple .player-container {
    box-shadow:
        0 0 80px rgba(255,80,180,0.16),
        0 10px 40px rgba(0,0,0,0.35);
}
```

Eso hace que el reproductor “reaccione” a la música.

---

# 5. MODERNIZA LOS BOTONES

Tus botones todavía se sienten muy normales.

Haz esto:

```css
.control-btn {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);

    backdrop-filter: blur(10px);

    transition:
        transform .25s ease,
        background .25s ease,
        border-color .25s ease;
}

.control-btn:hover {
    transform: translateY(-2px) scale(1.04);
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.18);
}
```

---

# 6. HAZ EL PLAY BUTTON MÁS IMPORTANTE

Actualmente el botón principal no domina visualmente.

Usa:

```css
.play-pause {
    width: 64px;
    height: 64px;

    border-radius: 50%;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.95),
            rgba(220,220,220,0.85)
        );

    color: black;

    box-shadow:
        0 8px 30px rgba(255,255,255,0.15);
}
```

---

# 7. TRACKLIST MÁS MODERNA

Ahorita parece lista HTML.

Convierte cada track en “card”.

```css
.track {
    background: rgba(255,255,255,0.03);

    border: 1px solid rgba(255,255,255,0.05);

    border-radius: 18px;

    padding: 1rem 1.2rem;

    margin-bottom: 12px;

    transition:
        transform .25s ease,
        background .25s ease,
        border-color .25s ease;
}

.track:hover {
    transform: translateX(6px);

    background: rgba(255,255,255,0.06);

    border-color: rgba(255,255,255,0.1);
}
```

---

# 8. AGREGA MINI VISUALIZER

Esto le daría MUCHÍSIMA vida.

HTML:

```html
<div class="visualizer">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

CSS:

```css
.visualizer {
    display: flex;
    align-items: end;
    gap: 4px;
    height: 20px;
}

.visualizer span {
    width: 3px;
    border-radius: 999px;
    background: white;
    animation: bounce 1s infinite ease-in-out;
}

.visualizer span:nth-child(1) { height: 8px; animation-delay: .1s; }
.visualizer span:nth-child(2) { height: 16px; animation-delay: .2s; }
.visualizer span:nth-child(3) { height: 10px; animation-delay: .3s; }
.visualizer span:nth-child(4) { height: 18px; animation-delay: .4s; }

@keyframes bounce {
    0%,100% { transform: scaleY(.5); opacity: .5; }
    50% { transform: scaleY(1.2); opacity: 1; }
}
```

---

# 9. AGREGA ANIMACIÓN DE ENTRADA

Esto cambia TODO el feel del sitio.

```css
.container {
    animation: fadeUp .8s ease;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

# 10. USA MEJOR ESPACIADO

Ahora mismo hay demasiado padding uniforme.

Usa:

```css
.container {
    width: min(920px, calc(100% - 32px));
}
```

Eso hace que el layout respire mejor.

---

# 11. AGREGA TEXTURA SUTIL

Muy importante para que no se vea “flat”.

```css
body::after {
    content: "";
    position: fixed;
    inset: 0;

    background-image:
        url("https://www.transparenttextures.com/patterns/noise.png");

    opacity: 0.04;

    pointer-events: none;
}
```

---

# 12. OPTIMIZA TU JS

Hay duplicación.

Tienes:

* lógica de pause duplicada
* lógica de play duplicada
* cambio de fondo duplicado

Centraliza.

Por ejemplo:

```js
function updatePlaybackUI(playing) {
    isPlaying = playing;
    playPauseBtn.classList.toggle('playing', playing);

    if (playing && currentTrackIndex !== -1) {
        changeBgColorForTrack(availableTracks[currentTrackIndex]);
    } else {
        document.body.classList.add('fade-out-bg');

        setTimeout(() => {
            document.body.className = '';
        }, 800);
    }
}
```

Y luego:

```js
audioPlayer.addEventListener('play', () => updatePlaybackUI(true));
audioPlayer.addEventListener('pause', () => updatePlaybackUI(false));
```

---

# 13. AGREGA BLUR AL TRACK ACTIVO

```css
.track.playing {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(12px);

    border: 1px solid rgba(255,255,255,0.12);
}
```

---

# 14. QUITA LOS BORDES DUROS

Muchos elementos tienen:

```css
border-bottom: 1px solid #444;
```

Eso envejece mucho el diseño.

Reemplázalo por separación usando:

* spacing
* transparencia
* cards
* blur

No líneas.

---

# 15. HAZ EL SITIO MÁS “ÁLBUM”

Puedes agregar:

* año del álbum
* duración total
* créditos
* visual cover art
* tagline misteriosa
* contador de tracks desbloqueados

Eso haría que se sienta como una experiencia artística y no solo un reproductor.

---

# EL CAMBIO MÁS IMPORTANTE

Si tuviera que resumir todo:

Tu sitio necesita pasar de:

“reproductor funcional con CSS bonito”

A:

“experiencia audiovisual minimalista”.

Y honestamente ya estás MUY cerca.

La base que hiciste ya tiene personalidad. Lo difícil era eso.

---

# IMPORTANTE ANTES DE PEGAR LOS CÓDIGOS

No te funcionó porque los 3 archivos estaban rehechos completamente y había varias clases/estructuras nuevas que no existían en tu proyecto original.

La forma MÁS segura es:

* mantener tu HTML original
* mantener tu lógica original
* solamente modernizar estilos y algunas partes visuales

Así no se rompe nada.

---

# QUÉ ESTABA ROMPIENDO TODO

## 1. El HTML nuevo cambió nombres de clases

Por ejemplo:

```html
.track-title
```

Pero tu HTML original NO tenía eso.

Entonces el JS daba:

```js
Cannot read properties of null
```

---

## 2. Tu Flask/Jinja depende de la estructura original

Tu loop:

```html
{% for track in tracks %}
```

ya estaba funcionando.

Cambiar demasiada estructura puede romper:

* estilos
* selectores
* JS
* renderizado

---

## 3. El body.className = 'is-idle'

Eso borraba clases importantes del body.

Entonces se destruían:

* fondos
* transiciones
* estilos

---

# LO MEJOR: MODERNIZAR SIN ROMPER

NO reemplaces todo.

Haz solamente estos cambios.

---

# HTML ACTUALIZADO

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>2676</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
</head>
<body>

<div class="ambient-glow"></div>

<div class="container">

    <header>
        <span class="album-label">TEMPORARY ARCHIVE</span>
        <h1>2676</h1>
        <p>Álbum temporal</p>
    </header>

    <div id="player-container" class="player-container">

        <div class="now-playing">

            <div class="track-id-wrap">
                <span id="current-track-number" class="track-number">--</span>
            </div>

            <div class="track-info">
                <span id="current-track-title">Selecciona una canción</span>
                <span id="current-track-duration">--:--</span>
            </div>

            <div class="visualizer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>

        <div class="audio-player">

            <audio id="audio" preload="auto">
                <source id="audio-source" src="" type="audio/mp3">
            </audio>

            <div class="progress-container">

                <div id="progress-bar" class="progress-bar">
                    <div id="progress" class="progress"></div>
                </div>

                <div class="time-info">
                    <span id="current-time">0:00</span>
                    <span id="duration">0:00</span>
                </div>

            </div>

            <div class="controls">

                <button id="prev-btn" class="control-btn">
                    <i class="fas fa-step-backward"></i>
                </button>

                <button id="play-pause-btn" class="control-btn play-pause">
                    <i class="fas fa-play play-icon"></i>
                    <i class="fas fa-pause pause-icon"></i>
                </button>

                <button id="next-btn" class="control-btn">
                    <i class="fas fa-step-forward"></i>
                </button>

                <div class="volume-container">

                    <button id="mute-btn" class="control-btn">
                        <i class="fas fa-volume-up"></i>
                    </button>

                    <input
                        type="range"
                        id="volume-slider"
                        min="0"
                        max="100"
                        value="100"
                        class="volume-slider"
                    >

                </div>

            </div>

        </div>

    </div>

    <div class="track-list-container">

        <div class="track-list-header">
            <h2>Tracklist</h2>
            <span>{{ tracks|length }} pistas</span>
        </div>

        <div class="track-list">

            {% for track in tracks %}

            <div class="track {% if not track.available %}disabled{% endif %}" data-track-id="{{ track.id }}">

                <div class="track-left">

                    <span class="track-number">
                        {{ "%02d"|format(track.id) }}
                    </span>

                    <div class="track-meta">
                        <span class="track-title">{{ track.title }}</span>
                        <span class="track-duration">{{ track.duration }}</span>
                    </div>

                </div>

                <button
                    class="play-btn"
                    {% if not track.available %}disabled{% endif %}
                    data-track="track{{ track.id }}"
                >
                    <i class="fas fa-play"></i>
                </button>

            </div>

            {% endfor %}

        </div>

    </div>

</div>

<script src="{{ url_for('static', filename='js/script.js') }}"></script>

</body>
</html>
```

---

# JS ACTUALIZADO

```js
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
            track.classList.remove('playing');
        });

        const currentTrack = document.querySelector(`.track[data-track-id="${trackId}"]`);

        if (currentTrack) {
            currentTrack.classList.add('playing');
        }
    }

    function changeTheme(trackId) {

        document.body.classList.remove(
            'mesh-blue-purple',
            'mesh-green-aqua',
            'mesh-red-purple'
        );

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
        }
    }

    function togglePlayPause() {

        if (currentTrackIndex === -1) {
            loadTrack(availableTracks[0]);
            return;
        }

        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
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
```

---

# CSS ACTUALIZADO

```css
:root {

    --bg: #090909;
    --surface: rgba(20,20,20,.45);

    --text: #f5f5f5;
    --muted: rgba(255,255,255,.55);

    --border: rgba(255,255,255,.08);

    --transition: .35s cubic-bezier(.22,.61,.36,1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {

    font-family: 'Archivo', sans-serif;

    background: var(--bg);

    color: var(--text);

    min-height: 100vh;

    overflow-x: hidden;

    transition: background 1s ease;
}

body::before {

    content: '';

    position: fixed;
    inset: 0;

    background:
        radial-gradient(circle at top left, rgba(255,255,255,.06), transparent 30%),
        radial-gradient(circle at bottom right, rgba(255,255,255,.04), transparent 30%);

    pointer-events: none;

    z-index: -2;
}

body::after {

    content: '';

    position: fixed;
    inset: 0;

    opacity: .03;

    pointer-events: none;

    background-image:
        radial-gradient(rgba(255,255,255,.4) 1px, transparent 1px);

    background-size: 3px 3px;

    z-index: -1;
}

.mesh-blue-purple {
    background:
        linear-gradient(-45deg, #10214f, #3f1670, #163570, #57268f);

    background-size: 400% 400%;

    animation: gradientMove 14s ease infinite;
}

.mesh-green-aqua {
    background:
        linear-gradient(-45deg, #0e3b2d, #12907f, #195a47, #1eb6a5);

    background-size: 400% 400%;

    animation: gradientMove 14s ease infinite;
}

.mesh-red-purple {
    background:
        linear-gradient(-45deg, #561313, #5e1f5f, #7e2222, #7a2d8b);

    background-size: 400% 400%;

    animation: gradientMove 14s ease infinite;
}

@keyframes gradientMove {

    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.container {

    width: min(920px, calc(100% - 32px));

    margin: 0 auto;

    padding: 40px 0 80px;

    animation: fadeUp .8s ease;
}

@keyframes fadeUp {

    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

header {
    margin-bottom: 40px;
}

.album-label {

    font-size: .75rem;

    letter-spacing: .25em;

    color: var(--muted);
}

header h1 {

    font-size: clamp(4rem, 10vw, 7rem);

    font-weight: 800;

    line-height: .9;

    margin: 10px 0;
}

header p {
    color: var(--muted);
}

.player-container,
.track-list-container {

    background: var(--surface);

    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);

    border: 1px solid var(--border);

    border-radius: 30px;

    box-shadow:
        0 10px 40px rgba(0,0,0,.35),
        inset 0 1px 0 rgba(255,255,255,.04);
}

.player-container {

    position: sticky;

    top: 20px;

    z-index: 100;

    padding: 2rem;

    margin-bottom: 24px;
}

.now-playing {

    display: flex;

    align-items: center;

    gap: 18px;

    margin-bottom: 28px;
}

.track-id-wrap {

    width: 70px;
    height: 70px;

    border-radius: 22px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255,255,255,.06);

    border: 1px solid rgba(255,255,255,.08);
}

.track-number {

    font-size: 1.3rem;

    font-weight: 700;
}

.track-info {

    display: flex;

    flex-direction: column;

    gap: 4px;
}

#current-track-title {

    font-size: 1.1rem;

    font-weight: 600;
}

#current-track-duration {
    color: var(--muted);
}

.progress-bar {

    width: 100%;

    height: 8px;

    background: rgba(255,255,255,.06);

    border-radius: 999px;

    overflow: hidden;

    cursor: pointer;
}

.progress {

    height: 100%;

    width: 0;

    border-radius: inherit;

    background: linear-gradient(90deg, white, rgba(255,255,255,.5));
}

.time-info {

    display: flex;

    justify-content: space-between;

    margin-top: 10px;

    color: var(--muted);

    font-size: .85rem;
}

.controls {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    margin-top: 24px;
}

.control-btn {

    width: 48px;
    height: 48px;

    border-radius: 50%;

    border: 1px solid rgba(255,255,255,.08);

    background: rgba(255,255,255,.04);

    color: white;

    cursor: pointer;

    transition: var(--transition);
}

.control-btn:hover {

    transform: translateY(-2px) scale(1.05);

    background: rgba(255,255,255,.1);
}

.play-pause {

    width: 64px;
    height: 64px;

    background: white;

    color: black;

    box-shadow: 0 8px 30px rgba(255,255,255,.18);
}

.pause-icon {
    display: none;
}

.playing .play-icon {
    display: none;
}

.playing .pause-icon {
    display: inline;
}

.volume-container {

    display: flex;

    align-items: center;

    gap: 12px;

    margin-left: auto;
}

.volume-slider {
    width: 90px;
}

.track-list-container {
    padding: 2rem;
}

.track-list-header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 24px;
}

.track-list-header span {
    color: var(--muted);
}

.track-list {

    display: flex;

    flex-direction: column;

    gap: 14px;
}

.track {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 1rem 1.2rem;

    border-radius: 22px;

    background: rgba(255,255,255,.03);

    border: 1px solid rgba(255,255,255,.05);

    transition: var(--transition);
}

.track:hover {

    transform: translateX(6px);

    background: rgba(255,255,255,.05);
}

.track.playing {

    background: rgba(255,255,255,.08);

    border-color: rgba(255,255,255,.14);

    backdrop-filter: blur(12px);
}

.track-left {

    display: flex;

    align-items: center;

    gap: 18px;
}

.track-meta {

    display: flex;

    flex-direction: column;

    gap: 4px;
}

.track-title {
    font-weight: 600;
}

.track-duration {

    color: var(--muted);

    font-size: .9rem;
}

.play-btn {

    width: 44px;
    height: 44px;

    border-radius: 50%;

    border: none;

    background: rgba(255,255,255,.1);

    color: white;

    cursor: pointer;

    transition: var(--transition);
}

.play-btn:hover {

    transform: scale(1.08);

    background: white;

    color: black;
}

.track.disabled {

    opacity: .45;

    pointer-events: none;
}

.visualizer {

    margin-left: auto;

    display: flex;

    align-items: end;

    gap: 4px;

    height: 20px;
}

.visualizer span {

    width: 3px;

    border-radius: 999px;

    background: white;

    animation: bounce 1s infinite ease-in-out;
}

.visualizer span:nth-child(1) {
    height: 8px;
    animation-delay: .1s;
}

.visualizer span:nth-child(2) {
    height: 16px;
    animation-delay: .2s;
}

.visualizer span:nth-child(3) {
    height: 10px;
    animation-delay: .3s;
}

.visualizer span:nth-child(4) {
    height: 18px;
    animation-delay: .4s;
}

@keyframes bounce {

    0%,100% {
        transform: scaleY(.5);
        opacity: .4;
    }

    50% {
        transform: scaleY(1.2);
        opacity: 1;
    }
}

@media (max-width: 768px) {

    .controls {
        flex-wrap: wrap;
    }

    .volume-container {

        width: 100%;

        justify-content: center;

        margin-left: 0;

        margin-top: 14px;
    }

    header h1 {
        font-size: 4rem;
    }
}
```
