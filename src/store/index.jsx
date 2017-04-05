import { observable, action } from 'mobx';

export default class Store {
  @observable tools;

  @action updateTools(tools) {
    debugger;
    this.tools = tools;
  }

  constructor (tools) {
    this.tools = tools;
  }
}