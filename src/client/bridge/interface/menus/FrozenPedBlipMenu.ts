import {cache} from "@overextended/ox_lib/client";
import {Blip} from "../../../blips/Blip";
import {FrozenPedTargetZone} from "../../zone/FrozenPedTargetZone";
import {ContextMenu} from "./ContextMenu";

export class FrozenPedBlipMenu {

  constructor(readonly blip: Blip, readonly zone: FrozenPedTargetZone, private mainMenuBuilder: () => Promise<ContextMenu>, private dynamicMenuBuilders: (() => Promise<ContextMenu>)[]) {
  }

  initialize() {
    onNet(`${cache.resource}:onPlayerLoaded`, () => {
      this.blip.displayBlip(this.zone.pedLocation)
      this.zone.createZone();
      this.zone.setTargetDataOnSelect(this.openMenu);
    });
  }

  openMenu = async () => {
    const mainMenu = await this.mainMenuBuilder();
    mainMenu.registerContext();

    for (const menuBuilder of this.dynamicMenuBuilders) {
      const menu = await menuBuilder();
      menu.registerContext();
    }

    mainMenu.showContext();
  }
}
