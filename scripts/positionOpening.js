// --- positionOpening --- //
class OpeningPosition {
    constructor() {
    }
    draw(play) {
        // UFO Hunter
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.font = "80px Comic Sans MS";
        ctx.textAlign = "center";
        const gradient = ctx.createLinearGradient((play.width / 2 - 180), (play.height / 2), (play.width / 2 + 180), (play.height / 2));
        gradient.addColorStop("0", "yellow");
        gradient.addColorStop("0.5", "red");
        gradient.addColorStop("1.0", "yellow");
        ctx.fillStyle = gradient;
        ctx.fillText("UfoVadasz", play.width / 2, play.height / 2 - 70);
        // Press 'Space' to start.
        ctx.font = "40px Comic Sans MS";
        ctx.fillStyle = '#D7DF01';
        ctx.fillText("Nyomj 'Space'-t a kezdeshez.", play.width / 2, play.height / 2);
        // Game Controls
        ctx.fillStyle = '#2e2f00';
        ctx.fillText("Jatek iranyitasa", play.width / 2, play.height / 2 + 210);
        ctx.fillText("Bal nyil : Menj balra", play.width / 2, play.height / 2 + 260);
        ctx.fillText("Jobb nyil : Menj jobbra", play.width / 2, play.height / 2 + 300);
        ctx.fillText("Szokoz 'space' : Tuz", play.width / 2, play.height / 2 + 340);
    }
    keyDown(play, keyboardCode) {
        if (keyboardCode == 32) {
            play.level = 1;
            play.score = 0;
            play.shields = 2;
            play.goToPosition(new TransferPosition(play.level));
        }
    }
}


