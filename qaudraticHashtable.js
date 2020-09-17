// Start of: Quadratic Probing --------------------------------
// function call----
function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}
// function call----
HashTable.prototype.initArray = function(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(null);
    }
    return array;
}
//  Quadradic HashTable
HashTable.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw 'hash table is full'

    var hashedIndex = this.hash(key),
        squareIndex = 1;

    // quadratic probing
    while (this.keys[hashedIndex % this.size] != null) {
        hashedIndex += Math.pow(squareIndex, 2);
        squareIndex++;
    }

    this.keys[hashedIndex % this.size] = key;
    this.values[hashedIndex % this.size] = value;
    this.limit++;
}

HashTable.prototype.get = function(key) {
    
    var hashedIndex = this.hash(key),
        squareIndex = 1;

    while (this.keys[hashedIndex % this.size] != key) {
        hashedIndex += Math.pow(squareIndex, 2);
        hashedIndex = hashedIndex % this.size;
        squareIndex++;
    }
    return this.values[hashedIndex % this.size];
}

//Function call
HashTable.prototype.hash = function(key) {
    // Check if int
    if (!Number.isInteger(key)) throw 'must be int';
    return key % this.size;
}

var exampletable = new HashTable(15);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(406, "weather is awesome");
exampletable.put(59, "wow");
exampletable.put(702, "fourty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");
exampletable.put(98, "sad");

console.log(exampletable);