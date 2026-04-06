class Queue {

    constructor() {
        this.items = []
    }

    enqueue(item){
        this.items.push(item)
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        return this.items.shift()
    }

    peek(){
        if (this.isEmpty()){
            return null
        }
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }
}

class EvacuationCenter {

    constructor() {
        this.regions = new Map()
    }

    arrive(region, name){
        if(!region){
            return null
        }
        if(!this.regions.has(region)){
            this.regions.set(region, new Queue())
        }
        this.regions.get(region).enqueue(name)
    }

    evacuate(region){
        if(!this.regions.has(region)){
            return null
        }
        return this.regions.get(region).dequeue()
    }

    nextInLine(region){
        if(this.regions.has(region)){
            return this.regions.get(region).peek()
        }
        return null
    }

    isEmpty(region){
        if(this.regions.has(region)){
            return this.regions.get(region).isEmpty()
        }
        return null
    }
}


const evac = new EvacuationCenter();
// evac.arrive("North", "Alice");
// evac.arrive("North", "Bob");
// evac.arrive("South", "Carlos");

// console.log(evac.nextInLine("North"))   // "Alice"
// console.log(evac.evacuate("North"))     // "Alice"
// console.log(evac.evacuate("North"))     // "Bob"
// console.log(evac.evacuate("North"))     // null (empty queue)
// console.log(evac.isEmpty("South"))      // false

// console.log(evac.evacuate("East"))       // null — region doesn't exist
// console.log(evac.nextInLine("East"))     // null — region doesn't exist
// console.log(evac.isEmpty("East"))        // null — region doesn't exist (not true/false!)

// evac.arrive("West", "Dana");
// evac.evacuate("West");
// console.log(evac.isEmpty("West"))        // true
// console.log(evac.nextInLine("West"))     // null — queue exists but is empty
// console.log(evac.evacuate("West"))                    // null — dequeue on empty queue

// evac.arrive("North", "Alice");
// evac.arrive("North", "Alice");
// console.log(evac.evacuate("North"))      // "Alice"
// console.log(evac.evacuate("North"))      // "Alice" — both should be there

// evac.arrive("North", "Alice");
// evac.arrive("South", "Alice");
// console.log(evac.evacuate("North"))      // "Alice"
// console.log(evac.evacuate("South"))      // "Alice" — regions are independent

evac.arrive("North", "")                 // empty string name — probably unintended
evac.arrive("", "Alice")                 // empty string region — creates a valid key
evac.arrive("North", null)              // null as a name
console.log(evac.evacuate(""))           // "Alice" — empty string is a valid Map key