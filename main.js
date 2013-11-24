// Little tester
//
var trie = new Trie();

_.each(fullList.fighters, function(fighter) {
    // Insert firt name:
    fighter.full_name = fighter.first_name + " " + fighter.last_name;

    trie.insert(fighter.first_name.toLowerCase(), fighter);
    trie.insert(fighter.last_name.toLowerCase(), fighter);
    trie.insert(fighter.full_name.toLowerCase(), fighter);


});


console.log("results ", trie.lookup("o"));


// Now we are gonna prepare a quick demo using auto complete:
//
//
//


$(document).ready(function(){
    var searchBox = $("#searchBox");
    var resultsContainer = $("#autoSuggestResults");


    var render = function(results, resultsContainer) {
        resultsContainer.empty();
        // Render our results:
        _.each(results, function(result ) {
            var dom = $("<div>" + result.full_name + "</div>");
            console.log(dom.html());
            resultsContainer.append(dom);
        });

    };

    // var results = trie.getAllResults();
    // render(results, resultsContainer);

    searchBox.keyup(function(e) {

        var searchTerm = searchBox.val();
        searchTerm = searchTerm.trim();
        if (searchTerm.length > 0) {
            results = trie.lookup(searchTerm.toLowerCase());

        } else {
            // results = trie.getAllResults();
        }

        render(results, resultsContainer);

    });

});

