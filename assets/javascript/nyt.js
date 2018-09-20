var q, begin_date, end_date, numberRecords;


$(document).on('click', '#searchBtn', function () {
    event.preventDefault();
    q = $('#searchTerm').val();
    begin_date = $('#startYear').val();
    end_date = $('#endYear').val();
    numberRecords = $('#numberofRecords').val();
    console.log(q, begin_date, end_date, numberRecords);
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "a9e1b9d42d384d5592c4f55605343dca",
        'q': q,
        'begin_date': begin_date,
        'end_date': end_date,
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (result) {

        for (i = 0; i < numberRecords; i++) {
            console.log(result.response.docs[i]);
            console.log(result.response.docs[i].headline.main);
           // console.log(result.response.docs[i].headline.byline.original);
            var newDiv = $('<div>');
            var paragraph = $('<p>');
            paragraph.append(result.response.docs[i].headline.main);
           // paragraph.append(result.response.docs[i].headline.byline.original);
            newDiv.append(paragraph);
            $('#articleHolder').append(newDiv);
        }



    });
});
$(document).on('click', '#clearBtn', function () {
    $('#searchTerm').val('');
    $('#startYear').val('');
    $('#endYear').val('');
    $('#numberofRecords').val('');
});