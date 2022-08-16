const node = (value = null, nextNode = null) => {
    return { value, nextNode };
};

const linkedList = () => {
    let head = null;
    let tail = null;
    let size = 0;

    return {
        // Function returns the first node in the list
        head() {
            return head;
        },

        // Function returns the current last node in the list
        tail() {
            return tail;
        },

        // Function returns the size of the list
        size() {
            return size;
        },

        // Function adds new data to the end of the list
        append(data) {
            const newNode = node(data);
            size++;

            if (!head) {
                head = newNode;
                tail = newNode;
                return;
            }
            tail.nextNode = newNode;
            tail = newNode;
        },

        // Function adds new data to the beginning of the list
        prepend(data) {
            head = node(data, head);
            size++;
        },

        // Function returns node at given index
        at(index) {
            if (index < 0 || index > size - 1) return 'Invalid index';

            let currentNode = head;

            for (let i = 0; i < index; i++) {
                currentNode = currentNode.nextNode;
            }

            return currentNode;
        },

        // Function removes the last node from the list
        pop() {
            if (size < 2) {
                head = null;
                tail = null;
                size--;
                return 'Removed last node in list';
            }
            let currentNode = head;

            while (currentNode.nextNode !== tail) {
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = null;
            tail = currentNode;
            size--;
            return 'Removed last node in list';
        },

        // Function returns true or false depending on if the input data is in the list or not
        contains(data) {
            let currentNode = head;
            let result = false;
            while (currentNode !== null) {
                if (currentNode.value === data) result = true;
                currentNode = currentNode.nextNode;
            }

            return result;
        },

        // Function returns the index of the node containing the input data, or null if not found
        find(data) {
            let currentNode = head;
            let currentIndex = 0;
            let result = null;
            while (currentNode !== null) {
                if (currentNode.value === data) result = currentIndex;
                currentNode = currentNode.nextNode;
                currentIndex++;
            }

            return result;
        },

        // Function returns the list in string format
        toString() {
            let currentNode = head;
            let result = '';
            while (currentNode !== null) {
                result += `( ${currentNode.value} ) -> `;
                if (currentNode.nextNode === null) result += 'null';
                currentNode = currentNode.nextNode;
            }

            return result;
        },

        // Function adds new data at a given index of the list
        insertAt(data, index) {
            if (index < 0 || index > size - 1) return 'Invalid index';
            if (index === 0) return this.prepend(data);
            if (index === size - 1) return this.append(data);

            const newNode = node(data);
            let currentNode = head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.nextNode;
            }

            newNode.nextNode = currentNode.nextNode;
            currentNode.nextNode = newNode;
            size++;
            return `New node added at index (${index})`;
        },
    };
};

const list = linkedList();
const append1 = list.append('First');
const append2 = list.append('Second');
const append3 = list.append('Third');
const prepend1 = list.prepend('Start');

// console.log(list.head());
// console.log(list.tail());
// console.log(list.size());
// console.log(list.at(0));
// console.log(list.pop());
// console.log(list.contains('Third'));
// console.log(list.find('First'));
// console.log(list.toString());
// console.log(list.insertAt('Inserted', 2));

// Methods to be added the the linked list

// Append - Added
// Prepend - Added
// Size - Added
// Head - Added
// Tail - Added
// At index - Added
// Pop - Added
// Contains - Added
// Find - Added
// To String - Added
// Insert At - Added
// Remove At
