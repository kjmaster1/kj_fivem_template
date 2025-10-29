import {OxAlert} from "../../../../common/bridge/interface/alert/OxAlert";
import {triggerClientCallback} from "@overextended/ox_lib/server";


export class OxServerAlert extends OxAlert {

  async doAlert(): Promise<'cancel' | 'confirm' | void> {
    const netId = source;
    return triggerClientCallback('ox_lib:alertDialog', netId, this.alertData);
  }
}
