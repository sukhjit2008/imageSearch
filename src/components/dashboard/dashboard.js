import React, { Component } from 'react'
import Images from '../images/images';
import axios from 'axios';


 class Dashboard extends Component {
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
     
    this.setState({term:''});
   }
  render() {
    return (
      <div>
        <div className=" Dashboard row section container ">
            <form onSubmit={this.submitHandler}>
              <div className="input-field col s10  l10  ">
              <label htmlFor="image">Enter name to search for images</label>
              <input id="image" type="text"  value={this.state.term} onChange={this.changeHandler}/>
              </div>
              <div className="input-field col l2  ">
              <button className=" Button waves-effect waves-light btn" >Search</button>
              </div>
            </form>
          </div>
          
          <Images  images={this.state.images} isLoading={this.state.isLoading}/>
      </div>
    )
  }
}


export default Dashboard;