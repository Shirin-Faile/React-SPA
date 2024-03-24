function song(image, artist, title) {
    this.image = image;
    this.artist = artist;
    this.title = title;
}

export const top10AppleMusicSongs = [
    new song("src/assets/arianaGrande.jpeg", "Ariana Grande", "We can't be friends (wait for your love)"),
    new song("src/assets/kanyeWest.jpeg", "¥$, Kanye West, Playboi Carti ,Ty Dolla $ign & Rich The Kid", "CARNIVAL"),
    new song("src/assets/bensonBoone.jpeg", "Benson Boone", "Beautiful Things"),
    new song("src/assets/creepyNuts.jpeg", "Creepy Nuts", "Bling-Bang-Bang-Born"),
    new song("src/assets/sexyyRed.jpeg", "Sexyy Red", "Get it Sexyy"),
    new song("src/assets/taylorSwift.jpeg", "Taylor Swift", "Cruel Summer"),
    new song("src/assets/teddySwims.jpeg", "Teddy Swims", "Lose Control"),
    new song("src/assets/beyonce.jpeg", "Beyonce", "TEXAS HOLD 'EM"),
    new song("src/assets/djo.jpeg", "Djo", "End of Beginning"),
    new song("src/assets/sza.jpeg", "SZA", "Snooze")
];

export const top10SpotifySongs = [
    new song("src/assets/teddySwims.jpeg", "Teddy Swims", "Lose Control"),
    new song("src/assets/bensonBoone.jpeg", "Benson Boone", "Beautiful Things"),
    new song("src/assets/duaLipa.jpeg", "Dua Lipa", "Training Season"),
    new song("src/assets/jackHarlow.jpeg", "Jack Harlow", "Lovin On Me"),
    new song("src/assets/kenyaGrace.jpeg", "Kenya Grace", "Strangers"),
    new song("src/assets/djo.jpeg", "Djo", "End of Beginning"),
    new song("src/assets/michaelMarcagi.jpeg", "Michael Marcagi", "Scared To Start"),
    new song("src/assets/arianaGrande.jpeg", "Ariana Grande", "We can't be friends (wait for your love)"),
    new song("src/assets/zachBryan.jpeg", "Zach Bryan", "I Remember Everything"),
    new song("src/assets/duaLipa2.jpeg", "Dua Lipa", "Houdini")

];


export const getCurrentDate = () => {
    return new Date().toLocaleDateString();
}