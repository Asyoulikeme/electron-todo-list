import { ipcMain } from "electron";

declare type EventName = string

class IPCEventReceiver {

    static on(event: EventName, ...args: Array<any>){
        ipcMain.on(event,(event, ...args) => {

        })
    }
}

// IPCEventReceiver.on