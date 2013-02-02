#library.js

This is my collection of JavaScript helper function and data structures. All files in this repo have 100% unit test coverage

#### All

To run all the tests:
[Run all the  unit tests](http://sghiassy.github.com/library/spec/runtimes/AllTests.html "Run unit tests on all the files")

## Singly Linked Node

An object representing a node in a linked list. The node can store a single value and only has one pointer to a node.

-  [Source File](http://sghiassy.github.com/library/src/SinglyLinkedNode.js "SinglyLinkedNode.js")
-  [Unit Tests](http://sghiassy.github.com/library/spec/tests/SinglyLinkedNodeSpec.js "SinglyLinkedNode.js Unit Tests") ([Run Unit Tests](http://sghiassy.github.com/library/spec/runtimes/SinglyLinkedNodeTests.html "SinglyLinkedNode Stack.js Unit Tests"))

#### Private Variables

-  **value**: Maintains the value of the node. Undefined by default.
-  **nextNode**: A pointer to the next node. Undefined by default.

#### Public Methods

-  **setValue**: Sets the node's internal value
-  **getValue**: Returns the node's internal value
-  **setNextNode**: Sets a pointer to the next node
-  **getNextNode**: Returns a pointer to the next node

## Stack

A Linked List used exclusively for Stack (push/pop) operations.

-  [Stack.js Source File](http://sghiassy.github.com/library/src/Stack.js "Stack.js")
-  [Stack.js Unit Tests](http://sghiassy.github.com/library/spec/tests/StackSpec.js "Stack.js Unit Tests")
-  [Run Stack.js Unit Tests](http://sghiassy.github.com/library/spec/runtimes/StackTests.html "Run Stack.js Unit Tests")

#### Private Variables

-  **HEAD**: A pointer to the first node in the stack. Will be set to undefined on instantiation and when there are zero nodes in the list

#### Public Methods

-  **push**: Push a value into the stack
-  **pop**: Pop the last value from the stack
-  **print**: Print out the stack as a string of the nodes' values

## Singly-linked Circular Linked List

This is a single-linked, circular, linked-list. 

-  [SinglyLinkedCircualLinkedList.js Source File](http://sghiassy.github.com/library/src/http://sghiassy.github.com/library/src/SinglyLinkedCircualLinkedList.js "SinglyLinkedCurcualLinkedList.js")
-  [SinglyLinkedCircualLinkedList.js Unit Tests](http://sghiassy.github.com/library/spec/tests/SinglyLinkedCircualLinkedListSpec.js "SinglyLinkedCircualLinkedList.js Unit Tests")
-  [Run SinglyLinkedCircualLinkedList.js Unit Tests](http://sghiassy.github.com/library/spec/runtimes/SinglyLinkedCircualLinkedListTests.html "Run Stack.js Unit Tests")

#### Private Variables

-  **HEAD**: A pointer to the first node in the linked list. Will be set to undefined when there are zero nodes in the list
-  **POINTER**: An internal pointer used to traverse the list. This pointer maintains state throughout the life of the object

#### Public Methods

-  **push**: Pushes a single-linked node into the linked list
-  **pop**: Pops the last node from the linked list - maintains circular linked list
-  **next**: Moves the internal pointer of the linked list to the next node in the list
-  **removeNodeAtPointer**: - Removes the node being pointed at by the internal pointer
-  **getPointer**: - Returns the node currently being pointed to by the internal pointer
-  **resetPointer**: - Resets the pointer to the linked-lists' head
-  **print**: - Prints out the linked list as a string of the nodes' values