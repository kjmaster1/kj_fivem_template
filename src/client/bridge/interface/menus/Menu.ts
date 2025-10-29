import lib from "@overextended/ox_lib/client";

type MenuPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type ChangeFunction = (selected: number, scrollIndex?: number, args?: any, checked?: boolean) => void;
type IconAnimation = 'spin' | 'spinPulse' | 'spinReverse' | 'pulse' | 'beat' | 'fade' | 'beatFade' | 'bounce' | 'shake';

interface MenuOptions {
  label: string;
  icon?: string;
  iconColor?: string;
  iconAnimation?: IconAnimation;
  checked?: boolean;
  values?: Array<string | {
    label: string;
    description: string;
  }>;
  description?: string;
  defaultIndex?: number;
  args?: Record<any, any>;
  close?: boolean;
}

interface OxMenuProps {
  id: string;
  title: string;
  options: MenuOptions[];
  position?: MenuPosition;
  disableInput?: boolean;
  canClose?: boolean;
  onClose?: (keyPressed?: 'Escape' | 'Backspace') => void;
  onSelected?: ChangeFunction;
  onSideScroll?: ChangeFunction;
  onCheck?: ChangeFunction;
  cb?: ChangeFunction;
}

export class Menu {

  constructor(readonly properties: OxMenuProps) {
  }

  registerMenu(callback: ChangeFunction): void {
    lib.registerMenu(this.properties, callback);
  }

  showMenu() {
    lib.showMenu(this.properties.id);
  }

  hideMenu(onExit?: boolean): void {
    lib.hideMenu(onExit);
  }

  setMenuOptions(options: MenuOptions, index?: number): void {
    lib.setMenuOptions(this.properties.id, options, index);
  }
}
