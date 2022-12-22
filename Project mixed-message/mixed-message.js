let pronoun = ["He", "She", "They", "It", "I", "Them","Only", "My friends", "I thought I", "There is no way I"]
let verb = ["jumped", "landed", "cut", "sold", "bought", "thought", "typed", "slept", "woke up", "watched the whole series of only murders in the building"]
let location = ["on the bed", "on the platform", "in the shower", "in the living room", "on the couch", "at my desk", "at the dining table", "on the road", "the morning show", "while coding"]

function randomElement(list){
    let num = list.length;
    return Math.floor(Math.random()*num)
}

function speak (){
    console.log(pronoun[randomElement(pronoun)] + " " +verb[randomElement(verb)] + " " +location[randomElement(location)] + ".")
}
speak();