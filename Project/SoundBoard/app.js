const sounds = [
    "Effect1",
    "Effect2",
    "Effect3",
    "Effect4",
    "Effect5",
];

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    document.getElementById("controller").appendChild(btn);
    btn.addEventListener("click", () => {
        stopSounds();
        document.getElementById(sound).play();
    });
});

function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}