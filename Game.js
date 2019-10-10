const GameState = Object.freeze({
    FIRST:   Symbol("FIRST"),
    SECOND:  Symbol("SECOND"),
    THIRD: Symbol("THIRD"),
    FOURTH: Symbol("FOURTH"),
    FIFTH: Symbol("FIFTH"),
    SIX: Symbol("SIX"),
    SEVENTH: Symbol("SEVENTH"),
    EIGHT: Symbol("EIGHT"),
    NINETH: Symbol("NINETH"),
    FINAL: Symbol("FINAL"),
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
                    sReply = "The man thanks you and finishes the water in one gulp. Now breathing deeply he tells you to lock all doors quickly. Ask him why or do it?";
                    this.stateCur = GameState.SIX;

                }else if (sInput.toLowerCase().match("do it")){
                    sReply = "Kill one save a thousand!";
                    this.stateCur = GameState.SIX;
                }
                else{
                    sReply = "Kill one save a thousand!";
                    this.stateCur = GameState.FOURTH;
                }
                break;
                case GameState.SIX:
                if(sInput.toLowerCase().match("why")){
                    sReply = "Just lock the doors! we don't have much time he shouts. he getts up and walks to the windows still dragging his foot. He tells you to look for a weapon. you look in the drawer and find a bread knife and butcher knife. choose your weapon!";
                    this.stateCur = GameState.SEVENTH;

                }else if ("do it" || "lock" || "lock doors"){
                    sReply = "You lock all the doors and he tells you that he was bit by a wolf while he was out walking in the woods. Ask him to leave so he doesnt turn into a wearwolf or let him stay?";
                    this.stateCur = GameState.SEVENTH;
                }

                else{
                      sReply = "You shall not enter....if you lock!";
                      this.stateCur = GameState.FIFTH;

                }
                break;
                case GameState.SEVENTH:
                    if(sInput.toLowerCase().match("bread" || "bread knife")){
                        sReply = "He shouts thats not going to work get something else. You hear you windows breaking";
                        this.stateCur = GameState.SIX;
                    }
                    else if(sInput.toLowerCase().match("butcher" || "butcher knife")){
                        sReply = "Pass it quickly he shouts there is something at the door!, you give it to him then he runs to the door and asks you to open it slowly while he's staying on the side. Do it and chicken out!"
                        this.stateCur = GameState.EIGHT;
                    }
                    else{
                        sReply = "Do your best to stay alive";
                        this.stateCur = GameState.SIX;
                    }
                case GameState.EIGHT:
                    if(sInput.toLowerCase().match("do it" || "open it")){
                        sReply = "As you open the door slowly a wearwolf jumps thru the door and trys to bite your neck. Ask for the knife or use ur hands to fight the wolf ";
                    }
                    else{
                        sReply = "The man treatens to kill you if you don't open the door."
                        this.stateCur = GameState.SEVENTH;
                    }
                case GameState.NINETH:
                    if (sInput.toLowerCase().match("ask" || "knife" || "ask for the knife" || "ask knife" || "the knife")){
                        sReply = "He watches while you ask for the knife and laughs. His eyes are turning red and you could see his face turning hairy. Finish what you started or give up.";
                        this.stateCur = GameState.FINAL;
                    }
                    else if (sInput.toLowerCase().match("fight" || "fight the wolf")){
                        sReply = "You manage to fight the wolf but you died of your injuries."
                        this.stateCur = GameState.EIGHT;
                    }
                case GameState.FINAL:
                    if (sInput.toLowerCase().match("finish" || "finish it")){
                        sReply = "You break the jaw of the wolf and got up. The man howls and attacks but you evade him and kill him with his own knife that he was holding. You decided never to let any sketchy people in your house ever. FIN "
                        this.stateCur = GameState.FIRST;
                    }
                    else if(sInput.toLowerCase().match("give up" || "giveup")){
                        sReply = "The wolf kills you and drags your body outside. The wolf turns into a women and goes into the house to live with the man happ forever in your house. Lesson learned. FIN"
                        this.stateCur = GameState.FIRST;
                    }
        }
        return([sReply]);
    }
}