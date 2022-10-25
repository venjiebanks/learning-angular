import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit  {

  title = 'ViewChild Example';
  
  @ViewChild('changecolor')
  changeColor: ElementRef;

  ngAfterViewInit() {

    this.changeColor.nativeElement.style.color="red";

  }

}
