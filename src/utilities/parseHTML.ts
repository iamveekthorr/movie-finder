import React from 'react';

export function parseHTML(
  htmlString: string,
  props: {
    keyPrefix?: string;
    className?: string;
  }
): React.JSX.Element[] {
  const { keyPrefix = 'html-', className } = props; // Destructure with correct default value

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const reactElements: React.JSX.Element[] = [];

  function convertNodeToReact(
    node: Node | ChildNode | Text | Element,
    key: string,
    customClassName?: string
  ): React.JSX.Element | string | null {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent || '';
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      const children = Array.from(element.childNodes).map((child, index) => {
        const childKey = `${key}-${index}`;
        return convertNodeToReact(child, childKey, customClassName);
      });
      const elementProps = { key, className: customClassName || className };
      return React.createElement(
        element.tagName.toLowerCase(),
        elementProps,
        ...children
      );
    }
    return null;
  }

  Array.from(doc.body.childNodes).forEach((node, index) => {
    const key = `${keyPrefix}${index}`;
    const reactElement = convertNodeToReact(node, key, className);
    if (reactElement) {
      reactElements.push(reactElement as React.JSX.Element);
    }
  });

  return reactElements;
}
