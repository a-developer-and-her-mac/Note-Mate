import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent {
  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {}
}
