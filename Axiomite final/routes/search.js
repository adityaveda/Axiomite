/**
 * Created by Ishan on 5/6/2016.
 */
var express = require('express');
var router = express.Router();
var watson  = require('watson-developer-cloud');
var qs = require('qs');


/*function searchSlogan (req, res){
    console.log("inside searchSlogan");
    var input = req.body.searchInput;
    console.log("search input"+ input);
}*/

router.get('/searchSlogan', function (req, res, next) {
    var searchItem = req.query.searchString;
    var collection = req.query.collection;
    console.log("searchItem is :" + searchItem);
    console.log("collection is :" + collection);

    var retrieve_and_rank = watson.retrieve_and_rank({
        username: 'af2441bb-552b-4383-aaee-b946d48d2c85',
        password: 'tGl63NBgTyIn',
        version: 'v1'
    });

    var params = {
        cluster_id: 'sc7c3959ec_dca3_421c_96fb_1c97c606ac0b',
        collection_name: collection
    };

    solrClient = retrieve_and_rank.createSolrClient(params);

    var ranker_id = '';
   // var question  = 'q=save';
    var query     = qs.stringify({q: searchItem, ranker_id: ranker_id, fl: 'body'});

    solrClient.get('fcselect', query, function(err, searchResponse) {
        if(err) {
            console.log('Error searching for documents: ' + err);
        }
        else {
            console.log(searchResponse.response.docs);

            var json_responses = searchResponse.response.docs;
            console.log(json_responses);
            res.send(json_responses);
        }
    });


});

module.exports = router;