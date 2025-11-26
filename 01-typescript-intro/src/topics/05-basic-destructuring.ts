interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    } 
}

const song = 'New Song';

const {song: anotherSong, songDuration: duration, details: {author}} = audioPlayer;

// console.log('Song:', anotherSong, duration, author);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3', dbz[2]);

export {};