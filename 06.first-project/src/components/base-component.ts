// Component Base Class
// Class only use for inheritance, not to instantiate
export abstract class Component<
  THostElement extends HTMLElement,
  TElement extends HTMLElement
> {
  templateElement: HTMLTemplateElement;
  hostElement: THostElement;
  element: TElement;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId) as THostElement;

    const importedNode: DocumentFragment = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as TElement;

    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    const position: InsertPosition = insertAtBeginning
      ? 'afterbegin'
      : 'beforeend';
    this.hostElement.insertAdjacentElement(position, this.element);
  }

  // For setup event handler
  abstract configure?(): void;

  // For render content inside template
  abstract renderContent(): void;
}
