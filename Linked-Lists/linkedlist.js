const node = (value = null, nextNode = null) => {
    return { value, nextNode };
};

const linkedList = () => {
    let head = null;
    let size = 0;

    return {
        // Function returns the current head of the list
        head() {
            return head;
        },

        // Function adds new data to the beginning of the list
        prepend(data) {
            head = node(data, head);
        },
    };
};

const list = linkedList();
const test = list.append('New Data');
const test2 = list.append('New Data 2');

console.log(list.head());

// Methods to be added the the linked list

// Append
// Prepend - Added
// Size
// Head - Added
// Tail
// At index
// Pop
// Contains
// Find
// To String
// Insert At
// Remove At
