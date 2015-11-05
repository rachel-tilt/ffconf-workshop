class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person : Person) {
        return `Hello, ${person.firstname} ${person.lastname}`;
}

var user = new Student("Martin", "L", "Beeby");
var user1 = new Student("Martin", "Mavrick", "Kearn");
var user2 = new Student("Mike", "The Hit Man", "Taulty");

// Create 3 new variables and populate them from an array.
// Now we have 3 new variables called beeby, kearn , taulty
var [beeby, kearn, taulty] = printStudents(user,user1, user2)

// We can now send the beeby object to be printed again.
printStudents(beeby)

function printStudents(...listOfStudents: Student[]) {
    for (var v of listOfStudents) {
            document.body.innerHTML += greeter(v);
    }
    return listOfStudents;
}

var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
        return () => {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
