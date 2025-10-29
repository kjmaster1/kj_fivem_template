import lib from "@overextended/ox_lib/client";

type IconAnimation = 'spin' | 'spinPulse' | 'spinReverse' | 'pulse' | 'beat' | 'fade' | 'beatFade' | 'bounce' | 'shake';
interface OptionsProps {
  position?: 'right-center' | 'left-center' | 'top-center' | 'bottom-center';
  icon?: string;
  iconColor?: string;
  iconAnimation?: IconAnimation;
  style?: any;
  alignIcon?: 'top' | 'center';
}

interface TextUITable {
  text: string;
  options?: OptionsProps;
}

export class TextUI {

  constructor(readonly textUI: TextUITable) {}

  show() {
    lib.showTextUI(this.textUI.text, this.textUI.options);
  }
  hide() {
    lib.hideTextUI();
  }
  isOpen(): boolean {
    return lib.isTextUIOpen();
  }
}
