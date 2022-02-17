import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FanwallPage } from './fanwall.page';

describe('FanwallPage', () => {
  let component: FanwallPage;
  let fixture: ComponentFixture<FanwallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanwallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FanwallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
