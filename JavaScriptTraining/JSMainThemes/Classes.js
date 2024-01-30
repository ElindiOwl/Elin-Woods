
{
    class Sword {
        constructor(type) {
            this.swordType = type;
        }
        present() {
            return "I have a " + this.swordType;
        }
    }
    class Model extends Sword {
        constructor(type, model) {
            super(type);
            this.model = model;
        }
        show() {
            return this.present() + ", it's a " + this.model;
        }
    }
    const mySword = new Model("Bastard", "One-half handed sword");
    document.getElementById("classInheritance").innerHTML = mySword.show();
}

{
    class Sword {
        constructor(model) {
            this._swordName = model;
        }
        get sName() {
            return this._swordName;
        }
        set sName(x) {
            this._swordName = x;
        }
        static fight(x) {
            return "Wanna fight? " + x._swordName;
        }
    }
    const mySword = new Sword("Bastard");
    document.getElementById("getterAndSetterInClass").innerHTML = mySword.sName;
    document.getElementById("ClassStaticMethod").innerHTML = Sword.fight(mySword);
}