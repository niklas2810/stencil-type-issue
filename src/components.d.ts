/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    /**
     * What fixes the issue?
     * - Using CSS instead of SASS file
     * - Only using one star at the internal attribute
     * - Changing the annotation name from internal to something else (tested both interna and internall and example)
     * - Removing the
     * @Prop attribute for the example property
     * - Setting generateTypeDeclarations to false for the dist-custom-elements target (types still generated by dist)
     * What does NOT fix the issue?
     * - Changing the type or name of the example property
     * - Switching the order of the prop and render function
     * - Introducing another property
     * - Adding attributes to the property (e.g. mutable to false)
     * - Messing around with the indentation
     */
    interface MyComponent {
        "example": string;
    }
}
declare global {
    /**
     * What fixes the issue?
     * - Using CSS instead of SASS file
     * - Only using one star at the internal attribute
     * - Changing the annotation name from internal to something else (tested both interna and internall and example)
     * - Removing the
     * @Prop attribute for the example property
     * - Setting generateTypeDeclarations to false for the dist-custom-elements target (types still generated by dist)
     * What does NOT fix the issue?
     * - Changing the type or name of the example property
     * - Switching the order of the prop and render function
     * - Introducing another property
     * - Adding attributes to the property (e.g. mutable to false)
     * - Messing around with the indentation
     */
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    /**
     * What fixes the issue?
     * - Using CSS instead of SASS file
     * - Only using one star at the internal attribute
     * - Changing the annotation name from internal to something else (tested both interna and internall and example)
     * - Removing the
     * @Prop attribute for the example property
     * - Setting generateTypeDeclarations to false for the dist-custom-elements target (types still generated by dist)
     * What does NOT fix the issue?
     * - Changing the type or name of the example property
     * - Switching the order of the prop and render function
     * - Introducing another property
     * - Adding attributes to the property (e.g. mutable to false)
     * - Messing around with the indentation
     */
    interface MyComponent {
        "example"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * What fixes the issue?
             * - Using CSS instead of SASS file
             * - Only using one star at the internal attribute
             * - Changing the annotation name from internal to something else (tested both interna and internall and example)
             * - Removing the
             * @Prop attribute for the example property
             * - Setting generateTypeDeclarations to false for the dist-custom-elements target (types still generated by dist)
             * What does NOT fix the issue?
             * - Changing the type or name of the example property
             * - Switching the order of the prop and render function
             * - Introducing another property
             * - Adding attributes to the property (e.g. mutable to false)
             * - Messing around with the indentation
             */
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
