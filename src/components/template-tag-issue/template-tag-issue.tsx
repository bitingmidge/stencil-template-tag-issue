import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'template-tag-issue',
  styleUrl: 'template-tag-issue.css',
  shadow: true
})
export class MyComponent {

  @Prop() container: HTMLElement
  template!: HTMLTemplateElement;

  componentDidLoad() {
    console.log(this.template)
    //**************************************************************
    // Uncomment the following line to fix up the <template> content
    // this._fixupTemplate()
    //**************************************************************
    this.container.appendChild(this.template.content.cloneNode(true))
  }

  // This will fix up the <template> content. The content gets created as a
  // sibling of the #document-fragment instead of as a child. This fix-up simply
  // copies the <template> content into the document fragment.
  _fixupTemplate() {
    var frag: DocumentFragment = this.template.content
    frag.appendChild(this.template.firstChild.cloneNode(true))
  }

  render() {
    return ([
    <div>This is the stencil component content.</div>,
    <template ref={(el) => this.template = el as HTMLTemplateElement}>This is the template content inside the stencil component.</template>
    ]);
  }
}
