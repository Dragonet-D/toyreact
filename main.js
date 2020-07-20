import {ToyReact, Component} from './ToyReact.js'

class MyCom extends Component{
  render() {
    return <div>
      <a>cool</a>
      <div>{this.children}</div>
    </div>
  }
}

let a = <MyCom name="a" id="ida">
  <div>123</div>
</MyCom>

ToyReact.render(
    a,
    document.querySelector('#root')
)