export default class Component {
  constructor(target, state = {}) {
    this.root = target;
    this.state = state;
    this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState,
      };
      // this.render()
    };
  }
}
