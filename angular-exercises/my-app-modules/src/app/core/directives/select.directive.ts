import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export type DataSource = {
  response: Array<{id: number; value: string; role: string}>
}

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective implements OnInit {
  @Input() selectFrom!: DataSource;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const data = this.selectFrom.response.filter((el) => el.role === 'Reader');
    this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: data })
  }

}
