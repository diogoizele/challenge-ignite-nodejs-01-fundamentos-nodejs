export function elementNotFound(element) {
  if (!element || element === -1) {
    throw new Error("Element not found");
  }

  return element;
}
