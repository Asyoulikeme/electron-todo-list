import { Notification } from "electron";

declare interface Options {
  title?: string;
  body?: string;
  icon?: string;
}
function show(params: Options) {
  let notify = new Notification({
    ...params,
    icon:"",
  });
  notify.show();
}

export default {
  show
};
