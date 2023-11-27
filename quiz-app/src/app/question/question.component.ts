import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @Input() question: any;
  @Output() answerSelected = new EventEmitter<string>();

  onAnswerSelected(answer: string) {
    this.answerSelected.emit(answer);
  }
}
