import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesNotificationComponent } from './updates-notification.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

describe('UpdatesNotificationComponent', () => {
  let component: UpdatesNotificationComponent;
  let fixture: ComponentFixture<UpdatesNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesNotificationComponent ],
      imports: [
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
