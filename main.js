// Little tester
//
var trie = new Trie();

/*
_.each(fullList.fighters, function(fighter) {
    // Insert firt name:
    fighter.full_name = fighter.first_name + " " + fighter.last_name;

    trie.insert(fighter.first_name.toLowerCase(), fighter);
    trie.insert(fighter.last_name.toLowerCase(), fighter);
    trie.insert(fighter.full_name.toLowerCase(), fighter);


}); */

var warmUpCacheWithList= function(list) {
    _.each(list , function(fighter) {
        // Insert firt name:
        fighter.full_name = fighter.first_name + " " + fighter.last_name;
        fighter.full_name_backwards =   fighter.last_name +  " " + fighter.first_name;
        trie.insert(fighter.first_name.toLowerCase(), fighter);
        trie.insert(fighter.last_name.toLowerCase(), fighter);
        trie.insert(fighter.full_name.toLowerCase(), fighter);
        trie.insert(fighter.full_name_backwards.toLowerCase(), fighter);
    });
};
var sports = s;
warmUpCacheWithList(sports['nba']);
warmUpCacheWithList(sports['mlb']);
warmUpCacheWithList(sports['nfl']);


// Total players = 5800 * 4

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

            dom.click(function(){
                //console.log("result", result)
                var base = "http://dev.sqor.com/athlete/"
                var url = base + result.id + "/" + 
                encodeURIComponent(result.first_name + "-" + result.last_name);
                window.location.href = url;
            });
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
             results = [];
        }

        render(results.slice(0,8), resultsContainer);

    });

});

