import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  isCompleted = input(false);
  el = inject(ElementRef)

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.backgroundColor = '#d4edda'; // Light green for completed
    } else {
      this.el.nativeElement.style.backgroundColor = '#f8d7da'; // Light red for pending
    }
  })
}
