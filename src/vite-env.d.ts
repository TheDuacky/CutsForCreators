
/// <reference types="vite/client" />

interface Window {
  Trustpilot?: {
    loadFromElement: (element: HTMLElement, config: {
      businessUnitId: string;
      templateId: string;
      theme?: string;
    }) => void;
  };
}
