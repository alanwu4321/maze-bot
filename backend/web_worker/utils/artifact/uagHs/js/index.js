// Player
var Player = function() {
    var _this = this,
        $playerAll = $('[data-player]'),
        $playerAlbum = $('[data-album]'),
        $playerCurrent = null,
        $playerCurrentAlbum = null,
        $displayArtistName = null,
        $displayAlbumName = null,
        $displaySongName = null,
        $displayTrackCount = null,
        $controlPrev = $('[data-player-prev]'),
        $controlPlay = $('[data-player-play]'),
        $controlNext = $('[data-player-next]'),
        $mutable = true
    index = 0,
        path = {
            audio: 'https://alan-wu.com/'
        },
        playing = false,
        playlist = null,
        audio = null;

    _this.methods = {
        init: function() {
            _this.methods.bindUserEvents();
        },
        bindUserEvents: function() {

            $playerAll.on('click', function() {
                if (!$(this).hasClass('player--open')) {
                    // pause the current player
                    if (audio !== null) {
                        audio.pause();
                        $playerCurrent.removeClass('player--open player--playing');
                    }

                    // get new player
                    $playerCurrent = $(this);
                    $playerCurrentAlbum = $playerCurrent.find("[data-album]")[0]
                    index = $playerCurrent.data('track');

                    // retrieve display elements
                    $displayArtistName = $playerCurrent.find('[data-player-album-artist]');
                    $displayAlbumName = $playerCurrent.find('[data-player-album-name]'),
                        $displaySongName = $playerCurrent.find('[data-player-album-song]');
                    $displayTrackCount = $playerCurrent.find('[data-player-album-track]');

                    // Audio
                    playlist = playlists[$playerCurrent.data('playlist')];
                    audio = $playerCurrent.find('audio').get(0);
                    audio.addEventListener('ended', function() {
                        _this.methods.nextTrack();
                    });
                    if (!audio.src) { _this.methods.loadTrack(0); }
                    _this.methods.playTrack();

                    $playerCurrent.toggleClass('player--open');
                    return
                }

                if ($(this)[0] == $playerCurrent[0] && $mutable) {
                    ($playerCurrent.hasClass('player--playing')) ?
                    $playerCurrent.removeClass('player--open'):
                        $playerCurrent.removeClass('player--open player--playing')
                }
                $mutable = true
            });

            $controlPlay.on('click', function() {
                $mutable = false
                if ($playerCurrent.hasClass('player--playing')) {
                    _this.methods.pauseTrack();
                } else {
                    _this.methods.playTrack();
                }

            });
            $controlNext.on('click', function() {
                $mutable = false
                _this.methods.nextTrack();
            });

            $controlPrev.on('click', function() {
                $mutable = false
                _this.methods.prevTrack();
            });

        },
        colorChange: function(playist) {
            var p = $("html")
            if (playing == false) {
                p.css("background-color", "#f0f39c");
                return
            }
            p.css("background-color", playlist.color);
        },
        loadTrack: function() {
            audio.src = path.audio + playlist.tracks[index].file;
            $displayArtistName.text(playlist.tracks[index].artist);
            $displayAlbumName.text(playlist.tracks[index].album);
            $displaySongName.text(playlist.tracks[index].song);
            $displayTrackCount.text(playlist.tracks[index].track + " / " + playlist.trackCount);
            $playerCurrent.data('track', index);
        },
        playTrack: function() {
            $playerCurrent.addClass('player--playing');
            playing = true;
            _this.methods.colorChange();
            audio.play();
        },
        pauseTrack: function() {
            $playerCurrent.removeClass('player--playing');
            playing = false;
            _this.methods.colorChange();
            audio.pause();
        },
        nextTrack: function() {

            if ((index + 1) < playlist.trackCount) {
                index++;
            } else {
                index = 0;
            }

            _this.methods.loadTrack(index);

            if (playing) {
                audio.play();
            }

        },
        prevTrack: function() {
            if ((index - 1) > -1) {
                index--;
            } else {
                index = (playlist.trackCount - 1);
            }

            _this.methods.loadTrack(index);

            if (playing) {
                audio.play();
            }

        }
    };

    return _this.methods;

};

// Load
$(function() {
    player = new Player();
    player.init();
});

// Data
var playlists = {
    lofi: {
        color: "#be82d2",
        slug: "lofi",
        trackCount: 2,
        tracks: [{
            "track": 1,
            "artist": "Alan Wu",
            "album": "Project: Lofi 🏴",
            "song": "Switch",
            "file": "switch"
        }, {
            "track": 2,
            "artist": "Alan Wu",
            "album": "Project: Lofi 🏴",
            "song": "Disco",
            "file": "lofi"
        }]
    },
    sadboi: {
        color: "pink",
        slug: "sadboi",
        trackCount: 1,
        tracks: [{
            "track": 1,
            "artist": "Alan Wu",
            "album": "Project: Sadboi 🦄",
            "song": "xxyyxx",
            "file": "xxyyxx"
        }]
    },
    trap: {
        color: "black",
        slug: 'trap',
        trackCount: 3,
        tracks: [{
                "track": 1,
                "artist": "Alan Wu",
                "album": "Project: Trap ⚡",
                "song": "Asian Boy",
                "file": "rap"
            }, {
                "track": 2,
                "artist": "Alan Wu",
                "album": "Project: Trap ⚡",
                "song": "Bell",
                "file": "yuh2"
            },
            {
                "track": 3,
                "artist": "Alan Wu",
                "album": "Project: Trap ⚡",
                "song": "C$sh",
                "file": "kash"
            }
        ]
    }
}