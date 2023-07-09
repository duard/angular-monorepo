import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[bindScssVariable]',
  standalone: true,
})
export class BindScssVariableDirective implements OnChanges {
  @Input('bindScssVariable') variable!: string;
  @Input('bindScssVariableValue') value!: string;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    const value = changes['value'].currentValue;
    this.host.nativeElement.style.setProperty(`--${this.variable}`, value);
  }
}
