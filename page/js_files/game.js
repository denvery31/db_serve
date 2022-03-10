async function req_func(data_to_send) {
    let response = await fetch("/get_values", {
        method: 'POST',
        headers: {
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(data_to_send)
    });
    let result = await response.json();
    let innering = '';
    for(elem of result){

        innering = innering + elem.situation + '\n'
    }
    document.getElementById('wait').innerText = innering

};

function send_room_data(){
    let id_s = document.getElementById("sit_id_s").value;
    let data_to_send = {id: id_s};
    req_func(data_to_send);
};