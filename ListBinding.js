class ListBinding {
    constructor (element) {
        this.listElement = element;
        this.textList = [];
    }

    static createListItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }

    // update the DOM.
    update () {
        // remove existing <li> tags from the element.
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }
        // fill the <ul></ul> with li items.
        for (const text of this.textList) {
        this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    //add things to the list.
    add (text) {
        this.textList.push(text);
        this.update();
    }

    // remove item from the list element.
    remove (index) {
        this.textList.splice(index, 1);
        this.update();
    }
}