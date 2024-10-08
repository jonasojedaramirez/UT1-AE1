import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyBibliotecaPage } from './my-biblioteca.page';

describe('MyBibliotecaPage', () => {
  let component: MyBibliotecaPage;
  let fixture: ComponentFixture<MyBibliotecaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBibliotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
