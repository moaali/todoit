import { observable, action } from 'mobx'

class OffcanvasStore {
  @observable isOffcanvasShown = false;
  @observable isOffcanvasNewMode = false;

  @action
  toggleOffcanvasVisibility = () => {
    this.isOffcanvasShown = !this.isOffcanvasShown;
  }

  @action
  setOffcanvasNewMode = value => {
    this.isOffcanvasNewMode = value;
  }
}

export default new OffcanvasStore()
