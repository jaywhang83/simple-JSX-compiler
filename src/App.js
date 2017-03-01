import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
        .transform(code, { presets: ['es2015', 'react']})
        .code,
        err: ''
      })
    } catch (err) {
        this.setState({err: err.message})
    }
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input} />
            <pre>
              {this.state.output}
            </pre>
        </div>
      </div>
    )
  }
}


// //Higher order component allow you to apply behaviors to multiple React components.
// const HOC = (InnerComponent) => class extends React.Component {
//   constructor() {
//     super();
//     this.state = {count: 0}
//   }
//   update() {
//     this.setState({count: this.state.count + 1})
//   }
//   componentWillMount() {
//     console.log('will mount')
//   }
//   render() {
//     return (
//       <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update.bind(this)}
//       />
//     )
//   }
// }
//
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Button>button</Button>
//         <hr/>
//         <LabelHOC>label</LabelHOC>
//       </div>
//     )
//   }
// }
//
// const Button = HOC((props) =>
//   <button onClick={props.update}>{props.children} - {props.count}</button>
// )
//
// class Label extends React.Component {
//   componentWillMount() {
//     console.log('label will mount')
//   }
//   render() {
//     return (
//       <label onMouseMove={this.props.update}>
//         {this.props.children} - {this.props.count}
//       </label>
//     )
//   }
// }
//
// const LabelHOC = HOC(Label)
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {items: []}
//   }
//   componentWillMount() {
//     fetch('http://swapi.co/api/people/?format=json')
//       .then(response => response.json())
//       .then(({results: items}) => this.setState({items}))
//   }
//   filter(e) {
//     this.setState({filter: e.target.value})
//   }
//   render() {
//     let items= this.state.items;
//     if(this.state.filter){
//       items = items.filter(item =>
//         item.name.toLowerCase()
//         .includes(this.state.filter.toLowerCase()))
//     }
//     return (
//       <div>
//         <input type='text'
//           onChange={this.filter.bind(this)}/>
//           {items.map(item =>
//             <Person key={item.name} person={item} />)}
//       </div>
//     )
//   }
// }
//
// const Person = (props) => <h4>{props.person.name}</h4>

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {increasing: false}
//   }
//   update() {
//     ReactDOM.render(
//       <App val={this.props.val+1} />,
//       document.getElementById('root'))
//   }
//   componentWillReceiveProps(nextProps) {
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.val % 5 === 0;
//   }
//   render() {
//     console.log(this.state.increasing)
//     return (
//       <button onClick={this.update.bind(this)}>
//         {this.props.val}
//       </button>
//     )
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevProps: ${prevProps.val}')
//   }
// }
//
// App.defaultProps = {val: 0}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount() {
//     console.log('componentWillMount')
//     this.setState({m: 2})
//   }
//   componentDidMount() {
//     console.log('componentDidMount')
//     this.inc = setInterval(this.update, 500)
//   }
//   render() {
//     console.log('render')
//     return <button onClick={this.update}>{this.state.val}
//             {this.state.val * this.state.m}
//           </button>
//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount')
//     clearInterval(this.inc)
//   }
// }
//
// class Wrapper extends React.Component {
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id='a'></div>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: 'this is the state txt',
//     }
//   }
//   update(e) {
//     this.setState({txt: e.target.value})
//   }
//   render() {
//     return(
//       <div>
//         <Widget update={this.update.bind(this)} />
//         <h1>{this.state.txt}</h1>
//       </div>
//     )
//
//     // this is props. Prop way to pass in collection of values as static to components. Props are not meant to e change by component.
//
//     // let txt = this.props.txt
//     // return <h1>{txt}</h1>
//  }
// }
//
// const Widget = (props) => <input type='text' onChange={props.update} />

// this is to set up propTypes. makes is easy for debugging.
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// this is to set default props.
// App.defaultProps = {
//   txt: 'this is the dafault txt'
// }

// Stateless Component
// const App = () => <h1>Hello stateless Component</h1>
// export default Wrapper

export default App
