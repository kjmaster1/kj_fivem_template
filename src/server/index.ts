import { cache } from '@overextended/ox_lib/server';
import {ServerFramework} from "./bridge/framework/ServerFramework";
import {ServerInventory} from "./bridge/inventory/ServerInventory";
import {
  getPlayerData, getTopPlayers,
  initializeServerFramework,
  initializeServerInventory,
  initializeTests
} from "./bridge/initialization";
import lib from "@overextended/ox_lib/server";

export const serverInventory: ServerInventory = initializeServerInventory();
export const serverFramework: ServerFramework = initializeServerFramework(serverInventory);
initializeTests();

lib.onClientCallback(`${cache.resource}:getplayerdata`, (source: number, type: string) => {
  return getPlayerData(source, type);
});

lib.onClientCallback(`${cache.resource}:gettopplayers`, () => {
  return getTopPlayers();
});

lib.onClientCallback(`${cache.resource}:getMetadata`, (playerId, item: string) => {
  return serverFramework.getMetadata(playerId, item);
})

exports('GetPlayerData', getPlayerData);
