import { observable, action } from 'mobx'

class SidebarStore {
  @observable isSidebarShown = true;
  @observable isAddLabelMode = false;
  @observable isLabelEditMode = false;

  @action.bound
  toggleSidebarVisibility() {
    this.isSidebarShown = !this.isSidebarShown;
  }

  @action.bound
  toggleAddLabelMode() {
    this.isAddLabelMode = !this.isAddLabelMode;
  }

  @action.bound
  toggleEditLabelMode() {
    this.isLabelEditMode = !this.isLabelEditMode;
  }
}

export default new SidebarStore()

