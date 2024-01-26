# Data-structures-and-Algorithms-

******Data Structures******

A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

******Linear and non-linear data structures******

Linear data structures are structures where data elements are arranged sequentially or linearly. Each element is connected to its previous and next element. Examples of linear data structures include arrays, stacks, queues, and linked lists.

Non-linear data structures are structures where data elements are not arranged sequentially or linearly. Elements can be connected to multiple other elements, forming a branching or hierarchical structure. Examples of non-linear data structures include trees, graphs, and heaps.

- [Arrays](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/data-structure/array)
- [Hash Table](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/data-structure/hash-table)
- [Linked List](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/data-structure/linked-list)
    - [Singly Linked List](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/data-structure/linked-list/singlyLinked-list.js)
    - [Doubly Linked List](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/data-structure/linked-list/doublyLinked-list.js)

- [Stack](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/data-structure/stack)
- [Linked List](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/data-structure/queue)
- [Tree](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/data-structure/tree)
- [Graph](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/data-structure/graphs)

# Algorithms
An algorithm is an unambiguous specification of how to solve a class of problems. It is a set of rules that precisely define a sequence of operations.
- [Sorting](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/algorithms/sorting)
    - [Bubble sort](https://github.com/Danish9991/Data-structures-and-Algorithms-/tree/main/algorithms/sorting/bubble-sort)
    - [Selection sort](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/algorithms/sorting/selection-sort)
    - [Insertion sort](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/algorithms/sorting/insertion-sort)
    - [Merge sort](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/algorithms/sorting/merge-sort)
    - [Qucik sort](https://github.com/Danish1112/Data-structures-and-Algorithms-/tree/main/algorithms/sorting/quick-sort)



   






  
<hr/>

## Useful Information


### Big O Notation

*Big O notation* is used to classify algorithms according to how their running time or space requirements grow as the input size grows.
On the chart below you may find most common orders of growth of algorithms specified in Big O notation.

![Big O graphs](./data-structure/assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Type        | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ----------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | Constant    | 1                            | 1                             | 1                               |
| **O(log N)**   | Logarithmic | 3                            | 6                             | 9                               |
| **O(N)**       | Linear      | 10                           | 100                           | 1000                            |
| **O(N log N)** | n log(n)    | 30                           | 600                           | 9000                            |
| **O(N^2)**     | Quadratic   | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | Exponential | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | Factorial   | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |

### Array Sorting Algorithms Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |

