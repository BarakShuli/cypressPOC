import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  // some test
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    
  });
 
});
