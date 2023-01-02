export interface UnknownObjectShape {
  [key: string]: any;
}

export interface ActionArg {
  type: string;
  payload: UnknownObjectShape;
}

export interface SimpleRPCResponse {
  result: any;
}

export interface SimpleRPCClientConfig {
  url: string;
  headers: UnknownObjectShape;
}

export type SimpleRPCClient = (action: ActionArg) => Promise<SimpleRPCResponse>;

declare function createClient(config: SimpleRPCClientConfig): SimpleRPCClient;

export default createClient;
