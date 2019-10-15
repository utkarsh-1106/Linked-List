class node {
	constructor(value){
		this.value = value
		this.next = null
	}
}
class linkedList {
		constructor(value) {
			this.head = {
				value: value,
				next: null
			}
			this.tail = this.head
			this.length = 1
		}
		append(value) {
			const newNode = new node(value)
			this.tail.next = newNode
			this.tail = newNode
			this.length++
		}
		prepend(value) {
			const newNode = new node(value)
			newNode.next = this.head
			this.head = newNode
			this.length++
		}
		insert(index, value) {
			if(index <= 0){
				this.prepend(value)
			}
				else {
					if(index >= this.length) {
					this.append(value)
				}
					else {
						let newNode = new node(value)
						let currentNode = this.head    //For traversing the list
						let holdPointer
						while(index-1){
							currentNode = currentNode.next
							index--
						}
						holdPointer = currentNode.next
						currentNode.next = newNode
						newNode.next = holdPointer
						this.length++
					}
				}
		}
		remove(index) {
			if(index >= 0 && index < this.length) {
				if(index === 0)
				this.head = this.head.next
				else {
					let currentNode = this.head
					while(index-1) {
						currentNode = currentNode.next
						index--
					}
					let holdPointer = currentNode.next.next
					currentNode.next = holdPointer
				}
				this.length--
			}
				else console.log('Invalid Index for removing node :(')
		}
		pop() {
			this.remove(this.length-1)
		}
		printList() {
			const array = []
			let currentNode = this.head
			while(currentNode.next !== null) {
				array.push(currentNode.value)
				currentNode = currentNode.next
			}
			array.push(currentNode.value)
			console.log(array)
		}
	}

const myLinkedList = new linkedList(5);
myLinkedList.append(12);
myLinkedList.append(18);
myLinkedList.append(34);
myLinkedList.append(1);
myLinkedList.prepend(7);
myLinkedList.prepend(19);
myLinkedList.insert(1,23);
myLinkedList.insert(-2,9);
myLinkedList.insert(100,45);
myLinkedList.printList();
// 9-->19-->23-->7-->5-->12-->18-->34-->1-->45
myLinkedList.remove(9);
myLinkedList.printList();
// 9-->19-->23-->7-->5-->12-->18-->34-->1
myLinkedList.remove(2);
myLinkedList.printList();
// 9-->19-->7-->5-->12-->18-->34-->1
myLinkedList.remove(0);
myLinkedList.printList();
// 19-->7-->5-->12-->18-->34-->1
myLinkedList.pop();
myLinkedList.printList();
// 19-->7-->5-->12-->18-->34
console.log('\nList length: ',myLinkedList.length);
// 6
// console.log(myLinkedList);
