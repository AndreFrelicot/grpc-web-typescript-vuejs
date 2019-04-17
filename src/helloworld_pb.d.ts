import * as jspb from "google-protobuf"

export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class RepeatHelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepeatHelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RepeatHelloRequest): RepeatHelloRequest.AsObject;
  static serializeBinaryToWriter(message: RepeatHelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepeatHelloRequest;
  static deserializeBinaryFromReader(message: RepeatHelloRequest, reader: jspb.BinaryReader): RepeatHelloRequest;
}

export namespace RepeatHelloRequest {
  export type AsObject = {
    name: string,
    count: number,
  }
}

export class HelloReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloReply.AsObject;
  static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
  static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloReply;
  static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
  export type AsObject = {
    message: string,
  }
}

