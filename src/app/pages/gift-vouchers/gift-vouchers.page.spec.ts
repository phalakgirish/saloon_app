import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiftVouchersPage } from './gift-vouchers.page';

describe('GiftVouchersPage', () => {
  let component: GiftVouchersPage;
  let fixture: ComponentFixture<GiftVouchersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftVouchersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiftVouchersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
