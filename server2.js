const express = require("express");
const app = express();
const jsonParser = express.json()
const PORT = process.env.PORT || 80
const {MongoClient} = require('mongodb')
const collection_name = 'situations'
const client = new MongoClient('mongodb+srv://kaelovek:letmekeepitsecret@cluster0.y4hpw.mongodb.net/memesituations?retryWrites=true&w=majority')


work = async ()=> {
    await client.connect()
    await client.db().collection(collection_name).find({'id': {$in: [12, 30, 48]}}).toArray((err, results) => {
        console.log(results)

    });

}
//work();
app.use(express.static(__dirname + "/page"));

app.post("/get_values",jsonParser, async function (request, response) {
    if (!request.body) return response.sendStatus(400);

        await client.connect()
        var id_s = []
        for (elem of request.body.id.split(',')){
            id_s.push(+elem)
        }

        await client.db().collection(collection_name).find({'id': {$in: id_s}}).toArray((err, results) => {
            //console.log(results)
            response.json(results);

    });






});

app.listen(PORT, () => console.log("Сервер работает"));
