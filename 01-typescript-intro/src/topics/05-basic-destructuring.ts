interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}


interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

// const { song: anotherSong, songDuration: duration } = audioPlayer;
// const { author } = audioPlayer.details
// console.log('Song: ', anotherSong, ', Duration:', duration, ', Author: ', author);

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3: ', trunks);



export { };