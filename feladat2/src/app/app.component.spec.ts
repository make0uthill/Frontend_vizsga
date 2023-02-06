import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should display second level headings correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const headings = app.querySelectorAll('h2');
    expect(headings.length).toBe(3);
    expect(headings[0].textContent).toContain('Az antikvárium története');
    expect(headings[1].textContent).toContain('Hírességek, akik itt jártak');
    expect(headings[2].textContent).toContain('Új híresség jelzése');
  });

  it('should display third level headings correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const headings = app.querySelectorAll('h3');
    expect(headings.length).toBe(3);
    expect(headings[0].textContent).toContain('Ady Endre');
    expect(headings[1].textContent).toContain('Móra Ferenc');
    expect(headings[2].textContent).toContain('Névtelen adományozó');
  });

  it('should have Wikipedia links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const links = app.querySelectorAll('a');
    expect(links.length).toBe(2);
    links.forEach(a => {
      expect(a.textContent).toContain('Wikipédia');
    });
  });

  it('shoud have the url field', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const urlField = app.querySelector('input[type=url]') as HTMLInputElement | null;
    expect(urlField).not.toBeNull();
    expect(urlField!.labels?.length).toBe(1);
    expect(urlField!.labels![0].textContent).toContain('Wikipédia link');
  });

  it('shoud have the description field', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const textField = app.querySelector('textarea');
    expect(textField).not.toBeNull();
    expect(textField).not.toBeNull();
    expect(textField!.labels?.length).toBe(1);
    expect(textField!.labels![0].textContent).toContain('Leírás');
  });

  it('shoud have a primary button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const button = app.querySelector('button[type=submit], input[type=submit]') as HTMLInputElement | HTMLButtonElement | null;
    expect(button).not.toBeNull();
    let content = button?.value || button?.textContent;
    expect(content).toContain('Elküld');
    expect(button!.classList).toContain('btn-primary');
  });
});
