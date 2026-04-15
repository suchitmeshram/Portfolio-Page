import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSearchHighlight]',
  standalone: true
})
export class SearchHighlightDirective implements OnChanges {
  @Input('appSearchHighlight') searchTerm = '';

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('searchTerm' in changes) {
      this.applyHighlight();
    }
  }

  private applyHighlight(): void {
    const host = this.elementRef.nativeElement;
    const query = this.searchTerm.trim();

    this.clearHighlights(host);

    if (!query) {
      return;
    }

    const matcher = new RegExp(this.escapeRegExp(query), 'gi');
    const textNodes = this.collectTextNodes(host);

    for (const textNode of textNodes) {
      const text = textNode.textContent ?? '';

      if (!text.trim() || !matcher.test(text)) {
        matcher.lastIndex = 0;
        continue;
      }

      matcher.lastIndex = 0;
      const fragment = host.ownerDocument.createDocumentFragment();
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = matcher.exec(text)) !== null) {
        const [matchedText] = match;
        const start = match.index;
        const end = start + matchedText.length;

        if (start > lastIndex) {
          fragment.appendChild(this.renderer.createText(text.slice(lastIndex, start)));
        }

        const mark = this.renderer.createElement('span');
        this.renderer.addClass(mark, 'search-match');
        mark.textContent = matchedText;
        fragment.appendChild(mark);
        lastIndex = end;
      }

      if (lastIndex < text.length) {
        fragment.appendChild(this.renderer.createText(text.slice(lastIndex)));
      }

      textNode.parentNode?.replaceChild(fragment, textNode);
    }
  }

  private clearHighlights(root: HTMLElement): void {
    const marks = Array.from(root.querySelectorAll('span.search-match'));

    for (const mark of marks) {
      const textNode = this.renderer.createText(mark.textContent ?? '');
      mark.parentNode?.replaceChild(textNode, mark);
    }

    root.normalize();
  }

  private collectTextNodes(root: HTMLElement): Text[] {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const parentElement = node.parentElement;

        if (!parentElement) {
          return NodeFilter.FILTER_REJECT;
        }

        const tagName = parentElement.tagName;

        if (['SCRIPT', 'STYLE', 'TEXTAREA'].includes(tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        if (parentElement.closest('.search')) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes: Text[] = [];
    let currentNode = walker.nextNode();

    while (currentNode) {
      nodes.push(currentNode as Text);
      currentNode = walker.nextNode();
    }

    return nodes;
  }

  private escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}