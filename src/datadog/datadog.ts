import { datadogLogs } from "@datadog/browser-logs";

export class Datadog {


  public static addLog (title: string, info: object): void {
    try {
      datadogLogs.logger.info(title, info);
    } catch(error) {
      console.log(error)
    }
  }
}
