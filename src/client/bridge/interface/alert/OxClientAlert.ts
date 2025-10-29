import {OxAlert} from "../../../../common/bridge/interface/alert/OxAlert";
import lib from "@overextended/ox_lib/client";

export class OxClientAlert extends OxAlert {

  async doAlert(): Promise<void | 'cancel' | 'confirm'> {
    return await lib.alertDialog(this.alertData);
  }
}
