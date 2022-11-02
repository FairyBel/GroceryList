import { Component } from "react";
import check from './delivery.png';

export class GrosseryList extends Component {
            state = {
            userInput:'',
            groceryList: []
        }

    

    onChangeEvent(e){
        this.setState({userInput: e}); //что пишет пользователь
    }
    addItem(input){
        if(input === ''){
            alert('Please enter an item')
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput:''}) //добавляем в список а userInput '' - опустошает
        
    }
    }

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }



    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');   //добавляем класс и удаляем за счет toggle
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type='text' 
                placeholder="What do you want to buy today"
                onChange={(e)=>{this.onChangeEvent(e.target.value)}} //доступ что пишет пользователь
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={()=> this.addItem(this.state.userInput)} className='btn btn-add'>Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index)=>(
                    <li onClick={this.crossedWord} key={index}>
                        <img src={check} width='40px' alt='bag'/>
                    {item}
                </li>
                ))}  
            </ul>
            <div className="container">
               <button onClick={() => this.deleteItem()} className='btn btn-delete'>DELETE</button>
            </div>
        </form>
           
        )
    }


}