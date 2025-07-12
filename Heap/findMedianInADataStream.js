const { PriorityQueue } = require("@datastructures-js/priority-queue");

class MedianFinder {
  constructor() {
    this.small = new PriorityQueue((a, b) => b - a);
    this.large = new PriorityQueue((a, b) => a - b);
  }

  add(num) {
    if (num <= this.small.front() || this.small.isEmpty()) {
      this.small.enqueue(num);
    } else {
      this.large.enqueue(num);
    }
    if (this.small.size() > this.large.size() + 1) {
      this.large.enqueue(this.small.dequeue());
    } else if (this.large.size() > this.small.size() + 1) {
      this.small.enqueue(this.large.dequeue());
    }
  }

  findMedian() {
    if (this.small.size() > this.large.size()) {
      return this.small.front();
    } else if (this.large.size() > this.small.size()) {
      return this.large.front();
    }
    return (this.small.front() + this.large.front()) / 2;
  }
}
const medianFinder = new MedianFinder();
medianFinder.add(1);
console.log(JSON.stringify(medianFinder.small));
console.log(JSON.stringify(medianFinder.large));
console.log("Median: " + medianFinder.findMedian());
medianFinder.add(2);
console.log(JSON.stringify(medianFinder.small));
console.log(JSON.stringify(medianFinder.large));
console.log("Median: " + medianFinder.findMedian());
medianFinder.add(3);
console.log(JSON.stringify(medianFinder.small));
console.log(JSON.stringify(medianFinder.large));
console.log("Median: " + medianFinder.findMedian());
medianFinder.add(3);
console.log(JSON.stringify(medianFinder.small));
console.log(JSON.stringify(medianFinder.large));
console.log("Median: " + medianFinder.findMedian());
