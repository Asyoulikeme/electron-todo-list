
interface ElectronApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>
  readonly request: (type: EventType, params) => void,
  readonly onResponse: (fn: Function) => any,
}

declare interface Window {
  electron: Readonly<ElectronApi>
  electronRequire?: NodeRequire
}

declare interface NotificationType {
  show: (params: Options) => void
}

declare type EventType = 'notify' | 'test'