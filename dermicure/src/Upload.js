import React, { Component } from 'react';
import './Upload.css';
import {Link} from "react-router-dom"
const axios = require("axios");


export class App extends Component {
	
	constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',this.state.file);
        const config = {
            headers: {
                'content-type': 'file'
            }
        };
        axios.post("https://dermicure.herokuapp.com/api/upload",formData)
            .then((response) => {
				console.log(response)
				localStorage.setItem(`links`,JSON.stringify(response.data));
                console.log("file is submitter");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
		console.log("here....");
    }
	
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }

  /*imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  */
  
	render() {
    const { profileImg} = this.state
		return (
			<form onSubmit={this.onFormSubmit}>
			<div className="page">
				<div className="container">
					<h1 className="heading">Add the Image</h1>
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
				
					<input type="file" accept="image/*" name="file" id="input" onChange= {this.onChange} />
					<div className="label">
         		 <label className="image-upload" htmlFor="input">
						
						Choose your Photo
					</label>
                 </div>
				</div>

				<div className="button">
					<button className="button-up" type="submit">PREDICT</button>
				</div>
				
			</div>
			</form>
		);
	}
}

export default App;