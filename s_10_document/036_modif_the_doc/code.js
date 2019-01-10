
/**
 * 
 * @param {HTMLElement} elem An element to clear
 */
function clear(elem) {
    if (elem) {
        let children = Array.of(...elem.childNodes);
        children.forEach(elem => elem.remove());
    }
}

/**
 * 
 * @param {HTMLUListElement} ul 
 */
function createList(ul) {
    if (ul) {
        let answer = true;
        while (answer) {
            answer = prompt('Enter the text for the list item', '');
            if (answer) {
                let li = document.createElement('li');
                li.innerText = answer;
                ul.appendChild(li);
            }
        }
    }
}

/**
 * 
 * @param {HTMLElement} container A container to place the list
 * @param {*} data A data to make the list of
 */
function createTree(parent, data) {
    if (parent && typeof (data) === 'object') {
        if (!Object.keys(data).length) return;
        let ul = document.createElement('ul');
        parent.appendChild(ul);
        for (let key in data) {
            let li = document.createElement('li');
            li.innerText = key;
            ul.appendChild(li);
            createTree(li, data[key]);
        };
    }
}
