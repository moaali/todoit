import { observable, action } from 'mobx'

class SearchStore {
  @observable isSearchBarShown = false;

  @action.bound
  toggleSearchBarVisibility() {
    this.isSearchBarShown = !this.isSearchBarShown;
  }
}

export default new SearchStore()
