import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'aqn-input-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  @Input() pageNum: number = 1;
  @Input() searchValue: string = '';
  @Output() search = new EventEmitter<string>();
  @Input() loading: boolean = false;

  formSearch: FormGroup = new FormGroup({
    searchField: new FormControl(''),
  });

  submitted = false;

  ngOnInit() {
    this.formSearch = this.fb.group({
      searchField: ['', Validators.required],
    });
    this.setFormFromUrl();
    console.log(`INPUT SEARCH PARAMS`, this.pageNum, this.searchValue);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formSearch.controls;
  }

  submitSearch(): void {
    this.submitted = true;

    if (this.formSearch.invalid) {
      return;
    }

    console.log('INPUT : ', this.formSearch.value['searchField']);

    const searchValue = this.formSearch.value.searchField;

    this.setUrlFromForm(1, searchValue);
    this.search.emit(searchValue.toLocaleLowerCase());
  }

  resetForm(formData: any, formDirective: FormGroupDirective): void {
    this.submitted = false;
    this.formSearch.updateValueAndValidity();
    formDirective.resetForm();
    this.formSearch.reset();
    // this.fieldToSearch.nativeElement.focus();
  }

  setUrlFromForm(pagenum: number, searchValue: string) {
    this.router.navigate(['/movies'], {
      queryParams: { pageNum: 1, searchValue: searchValue },
    });
  }

  setFormFromUrl() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.pageNum = params['pageNum'];
      this.searchValue = params['searchValue'];
      if (this.searchValue) {
        this.formSearch.setValue({
          searchField: this.searchValue,
        });
      }
    });
  }
}
