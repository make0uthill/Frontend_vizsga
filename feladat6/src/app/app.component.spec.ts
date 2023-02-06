import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Mock fetch function that returns a known, dummy data
const mockFetch = async function (requestInfo: RequestInfo | URL, init?: RequestInit) {
  return {
    status: 200,
    statusText: 'OK',
    ok: true,
    json: async () => {
      return [
        { cim: 'bbb', polc: 1 },
        { cim: 'aaa', polc: 2 },
      ];
    }
  } as Response;
}

describe('AppComponent', () => {
  beforeEach(async () => {
    spyOn(window, 'fetch').and.callFake(mockFetch);
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should render the spinner', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;
    const imageElement = app.querySelector('img');
    expect(imageElement).not.toBeNull();
    expect(imageElement!.alt).toMatch(/Betöltés/i);
  });

  it('should render the table', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(app.innerHTML).toContain('aaa');
    expect(app.innerHTML).toContain('bbb');
  }));
});
