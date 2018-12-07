import React, { Component } from 'react'
import axios from 'axios';
 class SearchForm extends Component {
   state={
     term:'',
     images:null
   }
   
   changeHandler=(e)=>{
    this.setState({term:e.target.value});
  
   }
   submitHandler=(e)=>{
    e.preventDefault();
    const searchTerm = this.state.term;
    axios.get('https://api.unsplash.com/search/photos',{
      params:{query:searchTerm},
      headers:{
        Authorization:'Client-ID 8baf756fd48ee56cc641103d303070dd10e96ab51b4970d6c72f8888064d8696'
      }
    }).then(
      (response)=>{
       this.setState({images:response.data.results});
      }
    );
   }
  render() {
    return (
      <div className="row section container">
        <form onSubmit={this.submitHandler}>
        <div className="input-field col s10  l10  ">
        <input type="text" placeholder="Search..." value={this.state.term} onChange={this.changeHandler}/>
        </div>
        <div className="input-field col l2  ">
        <button className=" Button waves-effect waves-light btn" >Search</button>
        </div>
       
        
        </form>
      </div>
    )
  }
}
export default SearchForm;