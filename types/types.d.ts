interface UnknownObjectShape {
  [key: string]: any;
}

interface ActionArg {
  type: string;
  payload: UnknownObjectShape;
}

interface SimpleRPCResponse {
  result: any;
}

interface SimpleRPCClientConfig {
  url: string;
  headers: UnknownObjectShape;
}

type SimpleRPCClient = (action: ActionArg) => Promise<SimpleRPCResponse>;

declare function createClient(config: SimpleRPCClientConfig): SimpleRPCClient;

export default createClient;
