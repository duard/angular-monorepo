import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberedPagination } from './basic-pagination.interface';
import { ruler, allowNavigation } from './basic-navigation.roles';

@Component({
  selector: 'aqn-basic-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-pagination.component.html',
  styleUrls: ['./basic-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPaginationComponent {
  maxPages: number = 0;

  @Input() pageSize: number = 10;
  // @Input() page: number = 1;
  @Input() rows: number = 50;
  @Input() maxPage: number = 0;

  @Input() rulerLength: number = 7;
  @Input() pageNum: number = 1;
  @Input() searchValue: string = '';

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private ref: ChangeDetectorRef) {}

  get pagination(): NumberedPagination {
    console.log('PAGINATION KIKS');

    const { pageNum, maxPages, rulerLength } = this;
    const pages = ruler(pageNum, maxPages, rulerLength);
    this.ref.markForCheck();
    return { pageNum, maxPages, pages } as NumberedPagination;
  }

  ngOnInit() {
    // this.ref.markForCheck();
    this.ngDoCheck();
  }

  ngOnChanges() {
    console.log('CHANGES');
  }

  ngDoCheck() {
    console.log('DO CHECK');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  showMeValues(cicle: string) {
    console.log(cicle, this.pageNum, this.pageNum);
  }

  navigateToPage(pageNumber: number): void {
    this.maxPages = Math.ceil(this.rows / this.pageSize);

    console.log(`BasicPaginationComponent `, this.rows, this.maxPages);
    console.log('=> navegue ', pageNumber, this.pageNum, this.maxPages);

    if (allowNavigation(pageNumber, this.pageNum, this.maxPages)) {
      this.pageNum = pageNumber;
      this.pageChange.emit(this.pageNum);
    }
  }

  trackByFn(index: number): number {
    return index;
  }
}
