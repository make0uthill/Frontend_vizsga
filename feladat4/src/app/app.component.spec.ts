import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { KonyvajanloComponent } from './konyvajanlo/konyvajanlo.component';

describe('Konyvajanlo Component', () => {
  let component: KonyvajanloComponent;
  let fixture: ComponentFixture<KonyvajanloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonyvajanloComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KonyvajanloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a recommendation correctly', () => {
    component.nev = 'Test1';
    component.ar = 1000;
    fixture.detectChanges();

    const app = fixture.nativeElement as HTMLElement;
    const header = app.querySelector('h3');
    expect(header).not.toBeNull();
    expect(header!.textContent).toContain('Test1');

    const price = app.querySelector('p');
    expect(price).not.toBeNull();
    expect(price!.textContent).toContain('1000');
    expect(price!.classList).not.toContain('akcio');
  });

  it('should apply bargain sale class', () => {
    component.nev = 'Test2';
    component.ar = 123;
    component.akcio = true;
    fixture.detectChanges();

    const app = fixture.nativeElement as HTMLElement;
    const price = app.querySelector('p');
    expect(price).not.toBeNull();
    expect(price!.textContent).toContain('123');
    expect(price!.classList).toContain('akcio');
  });
});


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, KonyvajanloComponent
      ],
    }).compileComponents();
  });

  it('should display the test data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    expect(app.innerHTML).toMatch(/Gyűrű Szövetsége/i);

    const paragraph = Array.from(app.querySelectorAll('p')).filter(p => p.textContent?.includes('999'));
    expect(paragraph.length).toBe(1);
    expect(paragraph[0].classList).toContain('akcio');
  });
});
