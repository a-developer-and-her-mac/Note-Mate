import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {

    let style = window.getComputedStyle(this.bodyText.nativeElement, null); 
    let viewableHeight = parseInt(style.getPropertyValue('height'), 10);
  }
}
