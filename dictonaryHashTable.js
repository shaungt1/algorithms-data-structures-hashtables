// let dict ={};
// dict["PI"]=3.14;
// const getValue = dict.PI;
// var dict = new HashTable();
// dict.set("PI", 3.14)
// dict.get("PI") // ==> 3.14
// // declare hash function
// var hash = hashFunction("PI") // => 127,872
// var arraySize = 1000
// var bucketIndex = hash % arraySize

function makeid(i){
  return i=0;
   i++;
}


// Niave Dict
function NaiveDict(){
    this.keys = []
    this.values = []
}

NaiveDict.prototype.set = function(key, value){
    this.keys.push(key)
    this.values.push(value)
}
NaiveDict.prototype.get = function(lookupKey){
    for (var i=0;i<this.keys.length;i++){
        var key = this.keys[i];
        if (key === lookupKey) {
            return this.values[i]
        }
    }
}




// hash Table Function

function HashTable(){
    this.bucketCount = 100000;
    this.buckets = [];
    for (var i=0; i< this.bucketCount;i++){
        this.buckets.push(new NaiveDict())
    }
}

// Hash function
// HashTable.prototype.hashFunction = function(key){
//     var hash = 0;
//     for (var i=0;i< key.length;i++){
//         hash += key.charCodeAt(i) * i
//     }
//     return hash;
// }
// Hash function 2
HashTable.prototype.hashFunction = function(key){
    var hash = 0;
    if (key.length == 0) return hash;
    for (var i = 0; i < key.length; i++) {
        hash = (hash<<5) - hash;
        hash = hash + key.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

// getbucketindex
HashTable.prototype.getBucketIndex = function(key){
    return this.hashFunction(key) % this.bucketCount
}

//getbucket
HashTable.prototype.getBucket = function(key){
    return this.buckets[this.getBucketIndex(key)]
}

//set
HashTable.prototype.set = function(key, value){
   this.getBucket(key).set(key, value)
}

//get
HashTable.prototype.get = function(lookupKey){
    return this.getBucket(lookupKey).get(lookupKey)
}

// Testing
var dict = new HashTable();

var keys = []
var values = []
for (var i = 0;i< 100000;i++){
    keys.push(makeid(i))
    values.push(Math.round())
}

console.time("SET")
for (var i = 0;i < keys.length;i++){
    dict.set(keys[i], values[i])
}
console.timeEnd("SET")

console.time("GET")
for (var i = 0;i < keys.length;i++){
    var val = dict.get(keys[i])
}
console.timeEnd("GET")

console.log(makeid(i))