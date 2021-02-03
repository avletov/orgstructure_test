export function loadJSON(name, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = reqListener;
    xhr.open("get", `./data/${name}`, true);
    xhr.send();

    function reqListener(e) {
        if (this.status === 200) {
            callback(JSON.parse(this.responseText));
        } else if (this.status === 404) {
            console.log("Ошибка! Данные не найдены.");
        }
    }
}

export function getRemark(children, significant) {
    if (significant < 3) {
        const { length } = children;
        const remark = length > 5 ? '(Число дочерних подразделений больше 5)' :
            length < 2 ? '(Число дочерних подразделений меньше 2)' : '';

        return remark;
    }
}

export function makeTree(data) {
    const structure = data.map(({ id, type, name, children }) => {

        if (children.length > 0) {
            children = replaceChildren(data, children);
        }

        return { id, type, name, children };
    }).filter(({ type }) => type === data[0].type);

    return structure;
}

function replaceChildren(data, children) {
    const replacedChildren = [];

    children.forEach((id) => {
        const unit = searchChildren(data, id);
        if (unit.children?.length > 0) {
            unit.children = replaceChildren(data, unit.children);
        }

        replacedChildren.push(unit);
    });

    return replacedChildren;
}

function searchChildren(data, id) {
    return data.filter(({ id: id_search }) => {
        return id === id_search;
    })[0] ?? {};
}