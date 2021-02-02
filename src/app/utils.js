export function loadJSON(name, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = reqListener;
    xhr.open("get", `./data/${name}`, true);
    xhr.send();

    function reqListener(e) {
        if (this.status === 200) {
            callback(JSON.parse(this.responseText));
        } else if (this.status === 404) {
            //callback(false);
            console.log("Ошибка! Данные не найдены.");
        }
    }
}