import React from 'react';

class Item extends React.Component{
  render(){
    return(
      <li>
        {this.props.name},
        ${this.props.price}
      </li>
    )
  }
}

class App extends React.Component{
  state = {
    items: [
      { id: 1, name: "Apple", price: 0.04},
      { id: 2, name: "Orange", price: 0.05}
    ]
  }

  add = ( name, price) =>{
    let id = this.state.items.length +1;

    this.setState({
      items: [
        ...this.state.items,
        { id, name, price}
      ]
    })
  }
  render(){
    return(
      <div>
        <ul>
          {this.state.items.map(i =>{
            return(
              <Item 
                key = {i.id}
                name = {i.name}
                price = {i.price}
              />
            )
          })}
        </ul>
        <AddForm add= {this.add}/>
      </div>
    )
  }
}

class AddForm extends React.Component{
  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () =>{
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.props.add( name, price);
  }
  render(){
    return(
      <div>
        <input type= "text" ref= {this.nameRef}/><br/>
        <input type= "text" ref= {this.priceRef}/><br/>
        <button onClick= {this.add}>Add</button>
      </div>
    )
  }
}

export default App;