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
                console.log("file is submitter");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
        console.log("here....");
    }

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
					
						<input type="file" accept="image/*" name="myImage" id="input" onChange= {this.onChange} />
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