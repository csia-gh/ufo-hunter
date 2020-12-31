// --- positionPause --- //
class PausePosition {
    constructor() {
    }
    draw(play) {
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.font = "40px Comic Sans MS";
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = "center";
        ctx.fillText("Paused", play.width / 2, play.height / 2 - 300);
        ctx.fillStyle = '#D7DF01';
        ctx.font = "36px Comic Sans MS";
        ctx.fillText("P: jatek folytatasa", play.width / 2, play.height / 2 - 250);
        ctx.fillText("ESC: kilepes", play.width / 2, play.height / 2 - 210);
        ctx.font = "40px Comic Sans MS";
        ctx.fillStyle = '#ffffff';
        ctx.fillText("Jatek iranyitas emlekezteto", play.width / 2, play.height / 2 - 120);
        ctx.fillStyle = '#D7DF01';
        ctx.font = "36px Comic Sans MS";
        ctx.fillText("Bal nyil : Menj balra", play.width / 2, play.height / 2 - 70);
        ctx.fillText("Jobb nyil : Menj jobbra", play.width / 2, play.height / 2 - 30);
        ctx.fillText("Szokoz 'space' : Tuz", play.width / 2, play.height / 2 + 10);
    }
    keyDown(play, keyboardCode) {
        if (keyboardCode == 80) { // Back: P
            play.popPosition();
        }
        if (keyboardCode == 27) { // Quit: ESC
            play.pushPosition(new GameOverPosition());
        }
    }
}



