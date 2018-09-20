var q = 
var begin_date = 
var end_date = 
var numberRecords = 

$(document).on('click','#searchButton', function() {

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
    'api-key': "a9e1b9d42d384d5592c4f55605343dca",
    'q': q ,
    'begin_date' :  begin_date ,
    'end_date':  end_date  ,
    });
    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(result) {

        for(i;i<numberRecords;i++) {
            console.log(result.response.docs[i]);
            console.log(result.response.docs[i].headline.main);
            console.log(result.response.docs[i].headline.byline.original);
            var newDiv = $('<div>');
            var paragraph = $('<p>');
            paragraph.append(result.response.docs[i].headline.main);
            paragraph.append(result.response.docs[i].headline.byline.original);
            newDiv.append(paragraph);
            $('#top-articles').prepend(newDiv);
        }

    }).fail(function(err) {
    throw err;
    });
});