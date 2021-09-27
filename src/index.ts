import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/../.env' });

import * as grpc from "@grpc/grpc-js";
import {debug, error, info, warn} from "./logging/handler";

import {logger, registerApplicationLogger} from "groupo-shared-service/services/logger";
registerApplicationLogger("groupo-logging")

import {loggingDescription} from "groupo-shared-service/grpc";
import {serialize} from "./logging/serializer";

const server = new grpc.Server();

server.addService(loggingDescription.ApplicationLogService.service, {
    Info: info,
    Debug: debug,
    Warn: warn,
    Error: error,
});

server.bindAsync('0.0.0.0:' + process.env.GRPC_SERVER_PORT, grpc.ServerCredentials.createInsecure(), () => {
    const protoMessage = logger
        .set("GRPC_SERVER_PORT", process.env.GRPC_SERVER_PORT)
        .message("start logging gRPC server").proto();
    console.log(serialize(protoMessage, "info"))
    server.start();
});
