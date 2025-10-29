
export abstract class Alert {
  async doAlert(): Promise<'cancel' | 'confirm' | void> {}
}
