
/** Clears the element
 * 
 * @param {HTMLElement} elem An element to clear
 */
function clear(elem) {
    if (elem) {
        let children = Array.of(...elem.childNodes);
        children.forEach(elem => elem.remove());
    }
}

/** Creates a list from user's answers
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

/** Creates a tree with ul and li tags from the given data object
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

/** Adds numbers of descendants in non-empty leaves of the list
 * 
 * @param {HTMLUListElement | HTMLOListElement} list 
 */
function showDescendantsNumbers(list) {
    if (!list) {
        return 0;
    }
    let count = 0;
    
    for (let li of list.children) {
        count++;  // the count increments for every leaf
        count += showNumbersInLeaf(li);  // the number in leaves gets added to the count
    }

    function showNumbersInLeaf(li) {
        let count = showDescendantsNumbers(li.firstElementChild);
        if (count) {
            li.firstChild.data = `${li.firstChild.data} [${count}]` ;
        }
        return count;
    }

    return count;
}

function showDescendantsNumbers2(list) {
    let lis = list.getElementsByTagName('li');

    for (let li of lis) {
      // get the count of all <li> below this <li>
      let descendantsCount = li.getElementsByTagName('li').length;
      if (!descendantsCount) continue;

      // add directly to the text node (append to the text)
      li.firstChild.data += ' [' + descendantsCount + ']';
    }
}
