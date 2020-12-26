import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  /**
   * type of input field
   */
  @Input('type') type = 'text';

  /**
   * type of input field
   */
  @Input('formGroup') formGroup: FormGroup;

  /**
   * type of input field
   */
  @Input('controlName') controlName: string;

  /**
   * name of input field
   */
  @Input('name') name: string;

  /**
   * placeholder of input field
   */
  @Input('placeholder') placeholder: string;

  /**
   * input text label
   */
  @Input('label') label: string;

  /**
   * to add class error if there is an error
   */
  @Input('error') error: boolean;

  /**
   * value of input field
   */
  value: string;

  hidePassword: boolean = true;

  /**
   * input value emitter to parent
   */
  @Output('valueEmitter') valueEmitter = new EventEmitter<any>();

  onChange: (value: any) => void;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * `preventWhiteSpace()` to prevent white space
   * @param event 
   */
  preventWhiteSpace(event) {
    if (!event.target.value.length && event.keyCode === 32) {
      event.preventDefault();
    }
  }

  /**
   * emitValue() function to emit input value to parent
   */
  emitValue() {
    if (this.formGroup.get(this.controlName).value) {
      this.value = this.formGroup.get(this.controlName).value.trim();
      this.valueEmitter.emit(this.value);
    }
  }

}
