console.log("HI");

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

Trie.prototype.insert = function(value) {
    console.log("value", value);
    if (prefix.length === 0 || prefix == " "){
        return;
    }


};

Trie.prototype._insertHelper= function(){
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



