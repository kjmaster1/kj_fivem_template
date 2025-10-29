import {ClientInventory} from "./bridge/inventory/ClientInventory";
import {ClientFramework} from "./bridge/framework/ClientFramework";
import {TargetBase} from "./bridge/target/TargetBase";
import {NotifyBase} from "./bridge/interface/notify/NotifyBase";
import {
  initializeClientFramework,
  initializeClientInventory,
  initializeMiniGame,
  initializeNotify,
  initializeProgressBar,
  initializeTarget,
  initializeTests
} from "./bridge/initialization";
import {MiniGame} from "./bridge/interface/minigame/MiniGame";
import {ProgressBar} from "./bridge/interface/progress/ProgressBar";
import {getPlayerData} from "./bridge/utils";

exports('GetPlayerData', getPlayerData)

export const clientInventory: ClientInventory = initializeClientInventory();
export const clientFramework: ClientFramework = initializeClientFramework(clientInventory).initializeEvents();
export const target: TargetBase = initializeTarget();
export const notify: NotifyBase = initializeNotify();
export const miniGame: MiniGame = initializeMiniGame();
export const progressBar: ProgressBar = initializeProgressBar();
initializeTests().catch(console.error);
