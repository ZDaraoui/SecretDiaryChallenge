// Make a class


class SecretDiary {
    constructor() {
        this.entries = []
        this.state = 'locked'
    }

    addEntry(string) {
        if (this.state === 'unlocked') {
            this.entries.push(string);
        } else {
            console.log("Sorry, Diary is Locked!");
        }
    }

    getEntries() {
        if (this.state === 'unlocked') {
        console.log(this.entries);
    } else {
        console.log("Sorry, Diary is Locked!");
        }
    }

    
    lock() {
        this.state = 'locked'
    }

    unlock() {
        this.state = 'unlocked'
    }


}

let diary = new SecretDiary();
diary.unlock();
diary.addEntry('Today was good.');
diary.getEntries();
diary.lock();
diary.addEntry('Today was good.');
diary.getEntries();


