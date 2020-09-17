function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.initArray = function(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(null);
    }
    return array;
}
// Star of: Double Hashing with Linear Probing ----------------
HashTable.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw 'hash table is full'

    var hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != null) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}

HashTable.prototype.get = function(key) {
    var hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != key) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

    }
    return this.values[hashedIndex];
}

HashTable.prototype.hash = function(key) {
    if (!Number.isInteger(key)) throw 'must be int'; // check if int
    return this.secondHash(key);
}

HashTable.prototype.secondHash = function(hashedKey) {
    var R = this.size - 2;
    return R - hashedKey % R;
}


// End of Algorithm -----------------------------------

// Start of: test dataset -----------------------------------
var exampletable = new HashTable(13);
exampletable.put(145, "hello dude");
exampletable.put(20, "bbb");
exampletable.put(566, "sunny as f");
exampletable.put(46, "weather");
exampletable.put(5, "wow");
exampletable.put(82, "fourty");
exampletable.put(50, "happy");
exampletable.put(94, "sad");
exampletable.put(5, "shaun");
exampletable.put(112, "hashTabkles Rock");
exampletable.put(94, "sad");
// Run data-structure ------------------------------------0
console.log(exampletable);