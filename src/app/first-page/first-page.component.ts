import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent implements OnInit {
  currentDate: Date = new Date();
  private route = inject(Router);  

  // add ngOnInit() and call this.twoSum() from it
  ngOnInit() {
    this.twoSum();
  }

  startClock() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  navigateToSecondPage() {
    this.route.navigateByUrl('/second-page');
  }

  // calculate the median of [1,3] and [2] and return 2.0.
  // calculate the median of [1,2] and [3,4] and return 2.5.
  twoSum() {
    let nums1 = [1, 3];
    let nums2 = [2];
    let nums = nums1.concat(nums2);
    let median = 0;
    let sortedNums = nums.sort();
    let length = sortedNums.length;
    if (length % 2 === 0) {
      let middle = length / 2;
      median = (sortedNums[middle - 1] + sortedNums[middle]) / 2;
    } else {
      let middle = Math.floor(length / 2);
      median = sortedNums[middle];
    }
    return median;
  }
  




}
