/**
 * @fileoverview gRPC-Web generated client stub for helloworld
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  HelloReply,
  HelloRequest,
  RepeatHelloRequest} from './helloworld_pb';

export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSayHello = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloReply,
    (request: HelloRequest) => {
      return request.serializeBinary();
    },
    HelloReply.deserializeBinary
  );

  sayHello(
    request: HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HelloReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/helloworld.Greeter/SayHello',
      request,
      metadata || {},
      this.methodInfoSayHello,
      callback);
  }

  methodInfoSayRepeatHello = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloReply,
    (request: RepeatHelloRequest) => {
      return request.serializeBinary();
    },
    HelloReply.deserializeBinary
  );

  sayRepeatHello(
    request: RepeatHelloRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/helloworld.Greeter/SayRepeatHello',
      request,
      metadata || {},
      this.methodInfoSayRepeatHello);
  }

  methodInfoSayHelloAfterDelay = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloReply,
    (request: HelloRequest) => {
      return request.serializeBinary();
    },
    HelloReply.deserializeBinary
  );

  sayHelloAfterDelay(
    request: HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HelloReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/helloworld.Greeter/SayHelloAfterDelay',
      request,
      metadata || {},
      this.methodInfoSayHelloAfterDelay,
      callback);
  }

}

