import { Component, Pipe, PipeTransform } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageObject = [{
    image:'assets/images/slider_1.jpg',
    thumbImage: 'assets/images/slider_1.jpg'
}, 
{
  image:'assets/images/slider_2.jpg',
  thumbImage: 'assets/images/slider_2.jpg'
},{
  image:'assets/images/slider_3.jpg',
  thumbImage: 'assets/images/slider_3.jpg'
}];
  countDown!: Subscription;
counter = 4000;
tick = 1000;
ngOnInit() {
  this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
}


}
@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    const hour: number = Math.floor(minutes / 60);
    const calculatedMinute = minutes - hour * 60;
    return (
      ('00' + hour).slice(-2) +
      ':' +
      ('00' + calculatedMinute).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}

