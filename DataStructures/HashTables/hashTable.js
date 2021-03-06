class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        const hash = this._hash(key);
        if (!this.data[hash]) {
            this.data[hash] = [];
        }
        this.data[hash].push([key, value]);

    }

    get(key) {
        const hash = this._hash(key);
        const currentBucket = this.data[hash];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keysArray.push(this.data[i][j][0]);
                }

            }
        }
        console.log(keysArray);
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.set('oranges', 2);
myHashTable.keys();