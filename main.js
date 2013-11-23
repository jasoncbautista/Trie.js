
// /Here is an example of a node:
var node = {
        children: []
    ,   value: ""
    ,   results: []
}

var Trie =  function(){
    // We initialize our node with an empty
    this._head = {
            children: {}
        ,   value: ""
        ,   results: []
    };
};

Trie.prototype.insert = function(word, item) {
    // Make sure we get a real value:
    if (word.length === 0 || word === " "){
        return;
    }

    // Sketchout algo:
    var currentNode  = this._head;
    var position = 0;
    this._insertHelper(0, currentNode, word, item);
};

Trie.prototype._insertHelper= function(position, currentNode, word, item){

    var currentLetter = word[position];
    // Check if the next node exists already
    var newNextNode = currentNode.children[currentLetter];
    if ( newNextNode === undefined ) {
        // Create a new next node with our letter
        newNextNode = {
                children: {}
            ,   value: currentLetter
            ,   results: []
        };
        // Remember to add our new node to the children:
        currentNode.children[currentLetter] = newNextNode;
    }

    position++;
    // Maybe len -1 ?
    if (position === word.length) {
        // We are done and we can push ourselves to the new next node
        newNextNode.results.push(item);
    } else {
        // Keep Recursing:
        this._insertHelper(position, newNextNode, word, item);
    }

}


Trie.prototype._getAllSubResultsHelper = function(currentNode ){
}
// Here we go through every sub branch to get all the nodes with results
Trie.prototype._getAllSubResults = function(currentNode){
    var self = this;
    var resultsCombined = [];
    // Make sure we add this nodes results:
    if (currentNode.results.length > 0) {
        resultsCombined = _.union(resultsCombined, currentNode.results);
    }
    _.each( currentNode.children, function(childNode) {
        var results = self._getAllSubResults(childNode);
        resultsCombined = _.union( resultsCombined, results);
    });

    return resultsCombined;
}

Trie.prototype._lookupHeler = function(currentNode, prefix, position){
    // First we look and see if the next letter in our prefix is a child
    // of the currentNode

    // So first we get our current letter:
    var currentLetter = prefix[position];
    // Now we check to see if our prefix exists:

    var nextNode = currentNode.children[currentLetter];
    if (nextNode   === undefined) {
        return []; // We don't have any results since we dont exist in the trie
    }


    // Next we continue to see if we have reached the end of our
    position++;
    // Maybe len -1 ?
    if (position === prefix.length) {
        // We are done  and now need to get our results
        return this._getAllSubResults(nextNode);
    } else {
        // Otherwise we recurse and keep looking
        return this._lookupHeler(nextNode, prefix, position);
    }

};

Trie.prototype.lookup = function(prefix) {
    console.log('prefix', prefix);
    if (prefix.length === 0 || prefix == " "){
        return [];
    }


    return this._lookupHeler(this._head, prefix, 0);
};


Trie.prototype.debug= function(){
    console.log(this._head);
}

// Little tester
//
var trie = new Trie();

trie.insert("co", {"word": "co", height: 6});
trie.insert("aaahh", {"word": "ahh", height: 6});
trie.insert("cork", {"word": "cork", height: 5});
trie.insert("col", {"word": "col", height: 5});
trie.insert("colateral", {"word": "colateral", height: 5});
trie.debug();

console.log("results ", trie.lookup("c"));
console.log("results ", trie.lookup("col"));
console.log("results ", trie.lookup("a"));
console.log("results ", trie.lookup("cor"));
console.log("results ", trie.lookup("o"));
console.log("results ", trie.lookup("ork"));


console.log("results ", trie.lookup("aax"));
console.log("results ", trie.lookup("b"));



