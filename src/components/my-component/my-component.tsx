import { Component, Prop, h } from '@stencil/core';

/**
 * What fixes the issue?
 * 
 * - Using CSS instead of SASS file
 * - Only using one star at the internal attribute
 * - Changing the annotation name from internal to something else (tested both interna and internall and example)
 * - Removing the @Prop attribute for the example property
 * - Setting generateTypeDeclarations to false for the dist-custom-elements target (types still generated by dist)
 * 
 * What does NOT fix the issue?
 * 
 * - Changing the type or name of the example property
 * - Switching the order of the prop and render function
 * - Introducing another property
 * - Adding attributes to the property (e.g. mutable to false)
 * - Messing around with the indentation
 * 
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {

  /** @internal */
  @Prop() example: string;

  render() {
    return <div>Hello, World!</div>;
  }
}
