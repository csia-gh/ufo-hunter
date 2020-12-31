// --- positionGameOver --- //
class GameOverPosition {
    constructor() {
    }
    draw(play) {
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.font = "40px Comic Sans MS";
        ctx.textAlign = "center";
        ctx.fillStyle = '#ffffff';
        ctx.fillText("Vege a jateknak!", play.width / 2, play.height / 2 - 120);
        ctx.font = "36px Comic Sans MS";
        ctx.fillStyle = '#D7DF01';
        ctx.fillText("Elerted a " + play.level + ". szintet es " + play.score + " pontot szereztel.", play.width / 2, play.height / 2 - 40);
        ctx.font = "36px Comic Sans MS";
        ctx.fillStyle = '#D7DF01';
        ctx.fillText("Nyomd meg 'Space'-t folytatashoz.", play.width / 2, play.height / 2 + 40);
    }
    keyDown(play, keyboardCode) {
        if (keyboardCode == 32) {
            play.goToPosition(new OpeningPosition());
        }
    }
}


