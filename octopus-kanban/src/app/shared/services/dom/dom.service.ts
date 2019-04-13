import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendComponentToBody<T>(component: any): ComponentRef<T> {
    const componentRef = this.createComponent(component);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    return componentRef;
  }

  createComponent(component: any): ComponentRef<any> {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    this.appRef.attachView(componentRef.hostView);

    return componentRef;
  }

  destroyComponent<T>(componentRef: ComponentRef<T>): void {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
// start() {
//   this.loader = this.domService.appendComponentToBody<LoadingComponent>(LoadingComponent);
// }

// end() {
//   this.domService.destroyComponent(this.loader);
// }
