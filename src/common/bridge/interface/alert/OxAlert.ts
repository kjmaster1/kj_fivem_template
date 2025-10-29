import {Alert} from "./Alert";

export interface OxAlertTable {
  header: string;
  content: string;
  centered?: boolean;
  cancel?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  overflow?: boolean;
  labels?: {
    cancel?: string;
    confirm?: string;
  }
}

export abstract class OxAlert extends Alert {

  constructor(readonly alertData: OxAlertTable) {
    super();
  }

  async doAlert(): Promise<'cancel' | 'confirm' | void> {}
}
