import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mylib',
  template: `
    <p>
      mylib works11!
    </p>
  `,
  styles: [
  ]
})
export class MylibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
