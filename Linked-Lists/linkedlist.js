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
    };
};

const list = linkedList();
const test1 = list.append('First');
const test2 = list.append('Second');
const test3 = list.append('Third');
const test4 = list.prepend('Start');

console.log(list.head());
console.log(list.tail());
console.log(list.size());

// Methods to be added the the linked list

// Append - Added
// Prepend - Added
// Size - Added
// Head - Added
// Tail - Added
// At index
// Pop
// Contains
// Find
// To String
// Insert At
// Remove At
