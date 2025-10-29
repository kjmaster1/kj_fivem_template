import lib from "@overextended/ox_lib/client";

export interface RadialItemTable {
  id: string;
  label: string;
  icon: string;
  onSelect?: (currentMenu: string | null, itemIndex: number) => void | string;
  menu?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export class RadialMenuItem {

  constructor(readonly radialItemTable: RadialItemTable) {}

  addItemToMenu() {
    lib.addRadialItem(this.radialItemTable);
  }

  removeItemFromMenu() {
    lib.removeRadialItem(this.radialItemTable.id);
  }


}
