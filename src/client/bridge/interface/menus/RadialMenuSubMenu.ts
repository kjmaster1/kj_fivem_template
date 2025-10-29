import {RadialItemTable} from "./RadialMenuItem";
import lib from "@overextended/ox_lib/client";

interface RadialMenuSubMenuTable {
  id: string;
  items: Omit<RadialItemTable, 'id'>[];
}

export class RadialMenuSubMenu {

  constructor(readonly radialMenu: RadialMenuSubMenuTable) {}

  register() {
    lib.registerRadial(this.radialMenu)
  }

  hide() {
    if (lib.getCurrentRadialId() === this.radialMenu.id) {
      lib.hideRadial();
    }
  }

  private disableRadial(state: boolean) {
    if (lib.getCurrentRadialId() === this.radialMenu.id) {
      lib.disableRadial(state);
    }
  }

  disable() {
    this.disableRadial(true);
  }

  enable() {
    this.disableRadial(false);
  }

}
