import { TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ParentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Angular' title`, () => {
    const fixture = TestBed.createComponent(ParentComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ParentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Angular');
  });
});
