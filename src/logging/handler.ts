import {UntypedHandleCall, ServerUnaryCall, sendUnaryData} from "@grpc/grpc-js";
import {ApplicationLogMessage, SerializedApplicationLogMessage} from "groupo-shared-service/grpc/logging";
import {serialize} from "./serializer";

export const info: UntypedHandleCall = (call: ServerUnaryCall<ApplicationLogMessage, SerializedApplicationLogMessage>, callback: sendUnaryData<SerializedApplicationLogMessage>) => {
    const msg = serialize(call.request, "info");
    console.log("[grpc-call]", msg);
    callback(null, {msg})
}

export const debug: UntypedHandleCall = (call: ServerUnaryCall<ApplicationLogMessage, SerializedApplicationLogMessage>, callback: sendUnaryData<SerializedApplicationLogMessage>) => {
    const msg = serialize(call.request, "warn");
    console.log("[grpc-call]", msg);
    callback(null, {msg})
}

export const warn: UntypedHandleCall = (call: ServerUnaryCall<ApplicationLogMessage, SerializedApplicationLogMessage>, callback: sendUnaryData<SerializedApplicationLogMessage>) => {
    const msg = serialize(call.request, "warn");
    console.log("[grpc-call]", msg);
    callback(null, {msg})
}

export const error: UntypedHandleCall = (call: ServerUnaryCall<ApplicationLogMessage, SerializedApplicationLogMessage>, callback: sendUnaryData<SerializedApplicationLogMessage>) => {
    const msg = serialize(call.request, "warn");
    console.log("[grpc-call]", msg);
    callback(null, {msg})
}
