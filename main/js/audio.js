class AudioManager {
    constructor() {
        this.playlist = [];
        this.isMobile = false;

        this.$players = $('<div id="players">');
        $('body').append(this.$players);

        this.musicPlayer = this.createPlayer('musicPlayer', 'music');
        this.voicePlayer = this.createPlayer('voicePlayer', 'voice');

        $(document).one('mousedown', () => {
            this.isMobile = true;

            try {
                this.musicPlayer.jPlayer('play');
            } catch (e) {}

            try {
                this.voicePlayer.jPlayer('play');
            } catch (e) {}
        });
    }

    createPlayer(id, audioType) {
        const $div = $(`<div id="${id}" class="jplayer ${audioType}"></div>`);

        $div.jPlayer({
            swfPath: `${document.baseURI}jplayer`,
            supplied: 'mp3',
            preload: 'auto',
            solution: 'html',
            volume: audioType === 'music' ? 0.8 : 1.0,
            errorAlerts: false,
            warningAlerts: false
        });

        this.$players.append($div);

        return $div;
    }

    initializeAudio() {
        if (systemSettings.audioSettings.enableMusic) {
            this.buildPlaylist();

            if (systemSettings.audioSettings.randomStart) {
                this.shuffleStart();
            }

            if (systemSettings.audioSettings.shuffle) {
                shuffle(this.playlist);
            }

            this.playMusicLoop();
        }
    }

    shuffleStart() {
        const firstHalf = this.playlist;
        const secondHalf = firstHalf.splice(
            Math.floor(Math.random() * firstHalf.length)
        );

        this.playlist = [...secondHalf, ...firstHalf];
    }

    buildPlaylist() {
        const musicPath = 'music/';
        const v1MusicPath = 'music/v1/';

        systemSettings.audioSettings.order.forEach(order => {
            if (order >= 34) {
                this.playlist.push(
                    `${v1MusicPath}Track ${order - 33}.mp3`
                );
            } else {
                this.playlist.push(
                    `${musicPath}Track ${order}.mp3`
                );
            }
        });
    }

    playMusicLoop() {
        if (!this.playlist.length) return;

        let current = 0;

        const playTrack = () => {
            const track = this.playlist[current];

            this.musicPlayer
                .jPlayer('clearMedia')
                .jPlayer('setMedia', {
                    mp3: track
                })
                .jPlayer('play');

            current++;

            if (current >= this.playlist.length) {
                current = 0;

                if (systemSettings.audioSettings.shuffle) {
                    shuffle(this.playlist);
                }
            }
        };

        this.musicPlayer
            .off($.jPlayer.event.ended)
            .on($.jPlayer.event.ended, playTrack);

        playTrack();
    }

    playVoice(files) {
        if (!files || !files.length) return;

        let current = 0;

        this.musicPlayer.jPlayer('volume', 0.3);

        const playNext = () => {
            if (current >= files.length) {
                this.musicPlayer.jPlayer('volume', 0.8);
                return;
            }

            const file = files[current++];

            this.voicePlayer
                .jPlayer('clearMedia')
                .jPlayer('setMedia', {
                    mp3: file
                })
                .jPlayer('play');
        };

        this.voicePlayer
            .off($.jPlayer.event.ended)
            .on($.jPlayer.event.ended, playNext);

        playNext();
    }

    playCC() {
        if (!systemSettings.audioSettings.narrations) return;

        this.playVoice([
            '/narrations/Local-CurrentConditions_Default1.wav'
        ]);
    }

    playLF() {
        if (!systemSettings.audioSettings.narrations) return;

        this.playVoice([
            '/narrations/Local-TextForecast_Default1.wav'
        ]);
    }

    playDP() {
        if (!systemSettings.audioSettings.narrations) return;

        this.playVoice([
            '/narrations/Local-DaypartForecast_Default1.wav'
        ]);
    }

    playTrafficCond() {
        if (!systemSettings.audioSettings.narrations) return;

        this.playVoice([
            '/narrations/Local-TrafficOverview_Default1.wav'
        ]);
    }

    playTrafficFlow() {
        if (!systemSettings.audioSettings.narrations) return;

        this.playVoice([
            '/narrations/Local-TrafficFlow_Default1.wav'
        ]);
    }

    playRegionalForecast() {
        if (!systemSettings.audioSettings.narrations) return;

        this.playVoice([
            '/narrations/Local-RegionalForecastConditions_Default1.wav'
        ]);
    }

    playPollenReport() {
        if (!systemSettings.audioSettings.narrations) return;

        this.playVoice([
            '/narrations/Local-AllergyReport_Default1.wav'
        ]);
    }

    playWarningBeep() {
        this.playVoice([
            '/narrations/beep.wav',
            '/narrations/beep.wav',
            '/narrations/beep.wav',
            '/narrations/beep.wav'
        ]);
    }

    playAirportConditions() {
        if (!systemSettings.audioSettings.narrations) return;

        this.playVoice([
            '/narrations/Local-LocalAirportConditions_Default1.wav'
        ]);
    }

    playDopplerRadar() {
        if (!systemSettings.audioSettings.narrations) return;

        this.playVoice([
            '/narrations/Local-LocalDoppler_Default1.wav'
        ]);
    }
    startPlaying(arr, loop = false) {
    if (loop) {
            this.playlist = [...arr];
            this.playMusicLoop();
        } else {
            this.playVoice(arr);
        }
    }
    stopPlaying() {
        this.musicPlayer.jPlayer('pause');
    }

    resumePlaying() {
        this.musicPlayer.jPlayer('play');
    }

    destroy() {
        this.musicPlayer.jPlayer('destroy');
        this.voicePlayer.jPlayer('destroy');
        this.$players.remove();
    }
}

var audioPlayer;