const node = (value = null, nextNode = null) => {
    return { value, nextNode };
};

const linkedList = () => {
    let head = null;
    let tail = null;
    let size = 0;

    return {
        // Function returns the first item in the list
        head() {
            return head;
        },

        // Function returns the current last item in the list
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

        // Function adds new data at a given index of the list
        at(index) {
            if (index < 0 || index > size - 1) return 'Invalid index';

            let currentNode = head;
            let nextNode = currentNode.nextNode;

            for (let i = 0; i < index; i++) {
                currentNode = nextNode;
                nextNode = currentNode.nextNode;
            }

            return currentNode;
        },

        // Function removes the last item from the list
        pop() {
            if (size < 2) {
                head = null;
                tail = null;
                size--;
                return 'Removed last item in list';
            }
            let currentNode = head;

            while (currentNode.nextNode !== tail) {
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = null;
            tail = currentNode;
            size--;
            return 'Removed last item in list';
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
// Insert At
// Remove At
