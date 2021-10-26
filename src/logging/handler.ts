import {UntypedHandleCall, ServerUnaryCall, sendUnaryData} from "@grpc/grpc-js";
import {ApplicationLogMessage, SerializedApplicationLogMessage} from "groupo-shared-service/grpc/logging";
import {serialize} from "./serializer";
import {publish, RabbitMQQueue} from "groupo-shared-service/datasource/rabbitmq";

const serializeBuffer = (log: ApplicationLogMessage): Buffer => {
    return Buffer.from(JSON.stringify(log));
}

export const info: UntypedHandleCall = (call: ServerUnaryCall<ApplicationLogMessage, SerializedApplicationLogMessage>, callback: sendUnaryData<SerializedApplicationLogMessage>) => {
    // publish(RabbitMQQueue, serializeBuffer(call.request));
    const msg = serialize(call.request, "info");
    console.log("[grpc-call]", msg);
    callback(null, {msg})
}

export const debug: UntypedHandleCall = (call: ServerUnaryCall<ApplicationLogMessage, SerializedApplicationLogMessage>, callback: sendUnaryData<SerializedApplicationLogMessage>) => {
    // publish(RabbitMQQueue, serializeBuffer(call.request));
    const msg = serialize(call.request, "debug");
    console.log("[grpc-call]", msg);
    callback(null, {msg})
}

export const warn: UntypedHandleCall = (call: ServerUnaryCall<ApplicationLogMessage, SerializedApplicationLogMessage>, callback: sendUnaryData<SerializedApplicationLogMessage>) => {
    // publish(RabbitMQQueue, serializeBuffer(call.request));
    const msg = serialize(call.request, "warn");
    console.log("[grpc-call]", msg);
    callback(null, {msg})
}

export const error: UntypedHandleCall = (call: ServerUnaryCall<ApplicationLogMessage, SerializedApplicationLogMessage>, callback: sendUnaryData<SerializedApplicationLogMessage>) => {
    // publish(RabbitMQQueue, serializeBuffer(call.request));
    const msg = serialize(call.request, "error");
    console.log("[grpc-call]", msg);
    callback(null, {msg})
}
