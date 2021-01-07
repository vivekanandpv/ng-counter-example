import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface OperationViewModel {
  title: string;
  label: string;
}

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss'],
})
export class OperationComponent implements OnInit {
  @Input() viewModel!: OperationViewModel;
  @Output() onOperation = new EventEmitter<OperationViewModel>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onOperation.emit(this.viewModel);
  }
}
