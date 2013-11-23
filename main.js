
// /Here is an example of a node:
var node = {
        children: []
    ,   value: ""
    ,   results: []
}

var Trie =  function(){
    // We initialize our node with an empty
    this.head = {
            children: []
        ,   value: ""
        ,   results: []
    };
};

Trie.prototype.insert = function(word) {
    console.log("word", word);
    // Make sure we get a real value:
    if (word.length === 0 || word === " "){
        return;
    }

    // Sketchout algo:
    //
    var currentNode  = this.head;
    var position = 0;
    this._insertHelper(0, currentNode, word);
};

Trie.prototype._insertHelper= function(position, currentNode, word){
    console.log('arguments', arguments);


    var currentLetter = word[position];

    console.log(currentLetter);
    // Maybe len -1 ?
    if (position === word.length) {
    }




}

Trie.prototype._lookupHeler = function(){
};
Trie.prototype.lookup = function(prefix) {
    console.log('prefix', prefix);
    if (prefix.length === 0 || prefix == " "){
        return [];
    }

    return [];
};



// Little tester
//
var trie = new Trie();

trie.insert("cool");
