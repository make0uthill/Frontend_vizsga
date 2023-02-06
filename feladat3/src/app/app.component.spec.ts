import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    router = TestBed.inject(Router);
  });

  it('should have a navbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const navbar = app.querySelector('nav');
    expect(navbar).not.toBeNull();
  });

  it('should load the main page by default and not the others', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
    tick();
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const main = app.querySelector('p');
    expect(main).not.toBeNull();
    expect(main!.textContent).toMatch(/Üdvözöljük a honlapunkon!/i);

    app.querySelector('nav')?.remove();
    const scifi = app.querySelector('li');
    expect(scifi).toBeNull();

    const humor = app.querySelector('table');
    expect(humor).toBeNull();
  }));

  it('should load the correct page with route /scifi', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/scifi']);
    tick();
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const main = app.querySelector('p');
    expect(main).toBeNull();

    app.querySelector('nav')?.remove();
    const scifi = app.querySelector('li:nth-of-type(4)');
    expect(scifi).not.toBeNull();
    expect(scifi!.textContent).toMatch(/Második Alapítvány/i);

    const humor = app.querySelector('table');
    expect(humor).toBeNull();
  }));

  it('should load the correct page with route /humor', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/humor']);
    tick();
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    const main = app.querySelector('p');
    expect(main).toBeNull();

    app.querySelector('nav')?.remove();
    const scifi = app.querySelector('li');
    expect(scifi).toBeNull();

    const humor = app.querySelector('table tr:nth-of-type(4) td:first-child');
    expect(humor).not.toBeNull();
    expect(humor!.textContent).toMatch(/Vadkanapó/i);
  }));


  it('should properly navigate', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
    tick();
    fixture.detectChanges();
    const app = fixture.nativeElement as HTMLElement;

    expect(app.innerHTML).toMatch(/Üdvözöljük a honlapunkon!/i);
    expect(app.innerHTML).not.toMatch(/Második Alapítvány/i);
    expect(app.innerHTML).not.toMatch(/Vadkanapó/i);

    const humor = app.querySelector('table');
    expect(humor).toBeNull();

    const scifiLink = Array.from(document.querySelectorAll('a')).find(e => e.textContent?.match(/Sci-fi/i));
    scifiLink?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    tick();
    fixture.detectChanges();

    expect(app.innerHTML).not.toMatch(/Üdvözöljük a honlapunkon!/i);
    expect(app.innerHTML).toMatch(/Második Alapítvány/i);
    expect(app.innerHTML).not.toMatch(/Vadkanapó/i);

    const humorLink = Array.from(document.querySelectorAll('a')).find(e => e.textContent?.match(/Humor/i));
    humorLink?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    tick();
    fixture.detectChanges();

    expect(app.innerHTML).not.toMatch(/Üdvözöljük a honlapunkon!/i);
    expect(app.innerHTML).not.toMatch(/Második Alapítvány/i);
    expect(app.innerHTML).toMatch(/Vadkanapó/i);
  }));
});
