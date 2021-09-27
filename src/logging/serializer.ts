import dayjs from "dayjs";
import {ApplicationLogMessage} from "groupo-shared-service/grpc/logging";

export type LogLevel = "info" | "debug" | "warn" | "error";

const levelColor: Record<LogLevel, string> = {info: "\x1b[32m", debug: "\x1b[34m", warn: "\x1b[31m", error: "\x1b[31m"}


export const serialize = (message: ApplicationLogMessage, level: LogLevel, service?: string): string => {
    let element: string[] = [];

    const d = dayjs();

    element.push(d.format("YYYY-MM-DD HH:mm:ss"));
    element.push(`[${service || message.service}]`)

    element.push(`${levelColor[level]}${level}\x1b[0m`);

    if (message.message) {
        element.push(`${message.message}`);
    }

    const fields: string[] = [];
    for (const k of Object.keys(message.fields)) {
        fields.push(`\x1b[36m${k}\x1b[0m: \x1b[36m${message.fields[k]}\x1b[0m`);
    }

    if (fields.length) {
        element.push("[" + fields.join(", ") + "]");
    }

    return element.join(" ");
}