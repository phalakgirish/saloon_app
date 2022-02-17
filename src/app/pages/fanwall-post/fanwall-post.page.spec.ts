import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FanwallPostPage } from './fanwall-post.page';

describe('FanwallPostPage', () => {
  let component: FanwallPostPage;
  let fixture: ComponentFixture<FanwallPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanwallPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FanwallPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
