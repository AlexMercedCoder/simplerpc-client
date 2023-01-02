export interface UnknownObjectShape {
  [key: string]: any;
}

export interface DispatchArg {
  type: string;
  payload: UnknownObjectShape;
}

export interface SimpleRPCResponse {
  result: any;
}

export interface SimpleRPCClientConfig {
  url: string;
  headers?: UnknownObjectShape;
}

export type SimpleRPCClient = (action: DispatchArg) => Promise<SimpleRPCResponse>;

declare function createClient(config: SimpleRPCClientConfig): SimpleRPCClient;

export default createClient;
