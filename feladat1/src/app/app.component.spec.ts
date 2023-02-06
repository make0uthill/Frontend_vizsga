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

  it('should contain a main section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;
    expect(app.querySelector('main')).not.toBeNull();
  });

  it('should contain the expected text', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;
    const lastParagraph = app.querySelector('p:last-of-type');
    expect(lastParagraph?.textContent).toContain('Sed efficitur finibus tellus');
  });

  it('should contain the footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;
    const footerElement = app.querySelector('footer');
    expect(footerElement).not.toBeNull();
    expect(footerElement?.textContent).toMatch(/^Készítette:/i);
  });

  it('should contain the header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;
    const headerElement = app.querySelector('header');
    expect(headerElement).not.toBeNull();

    const imageElement = app.querySelector('header img') as HTMLImageElement | null;
    expect(imageElement).not.toBeNull();
    expect(imageElement?.alt).toBe('Antikvárium logó');

    const headingElement = app.querySelector('header h1');
    expect(headingElement).not.toBeNull();
    expect(headingElement?.textContent).toMatch(/Antikvárium/i);
  });
});
