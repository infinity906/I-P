import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SectionPage } from '../section/section'
//formbuilder and formgroup for form validation


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private fb: FormBuilder) {

  }

  selection(){
    this.navCtrl.push(SectionPage);
  }

//ngOnInit() {
  //this.myControl = this.fb.group({
  //  email: ('', Validators.required, Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'))
//validation.pattern = pattern required for verifying email ID

//  });

}
