import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AproposPageComponent } from "./apropos-page.component";

describe("AproposPageComponent", () => {
  let component: AproposPageComponent;
  let fixture: ComponentFixture<AproposPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproposPageComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproposPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
