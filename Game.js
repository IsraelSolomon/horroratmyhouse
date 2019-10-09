const GameState = Object.freeze({
    FIRST:   Symbol("FIRST"),
    SECOND:  Symbol("SECOND"),
    THIRD: Symbol("THIRD"),
    FOURTH: Symbol("FOURTH"),
    FIFTH: Symbol("FIFTH"),
    TOAST: Symbol("toast")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.FIRST;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.FIRST:
                sReply = "You are in an empty house, it's raining outside and you hear a knock at the door. Go check who it is or check the window?";
                this.stateCur = GameState.SECOND;
                break;
            case GameState.SECOND:
                if(sInput.toLowerCase().match("check" || "go check")){
                    sReply = "You are almost at the door and the knock is LOUDER! Still want to open?";
                    this.GameState.THIRD;
                }else{
                    sReply ="You open the blinds but it's dark out and you can't see anything.";
                    this.stateCur = GameState.FIRST;
                }
                break;
            case GameState.THIRD:
                if(sInput.toLowerCase().match("yes" || "open" || "ya")){
                    sReply = "You open the door to find a man that's covered in blood drunched with rain. Let him in or call police?"
                    this.stateCur = GameState.FOURTH;
                }else{
                    sReply = "You can't do that!";
                    this.stateCur = GameState.SECOND;

                }
                break;
            case GameState.FOURTH:
                if(sInput.toLowerCase().match("let him in" || "in" || "let him inside")){
                    sReply = "The man goes into the house dragging his left leg, you are in shock. He asks for water. give him or let him thirst?";
                    this.stateCur = GameState.FIFTH;

                }else{
                    sReply = "Don't let the man die!";
                    this.stateCur = GameState.THIRD;
    
                }
                break;
                case GameState.FIFTH:
                if(sInput.toLowerCase().match("give him drink" || "give drink")){
                    sReply = "The man thanks you and finishes the water in one gulp. Now breathing deeply he tells you to lock all doors. Ask him why or do it?";
                    this.stateCur = GameState.SECOND;

                }else{
                    sReply = "Kill one save a thousand!";
                    this.stateCur = GameState.FOURTH;
                }
                break;
        }
        return([sReply]);
    }
}