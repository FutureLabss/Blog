import "./write.css"
import { useState } from "react";
import {db} from '../../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { AirlineSeatIndividualSuiteSharp } from "@material-ui/icons";


export default function Write() {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
      }
    console.log(db)
    var initialValues = {
        title: '',
        description: '',
    }
      const [values, setValues] = useState(initialValues)
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    async function submit(e){
        e.preventDefault()
        const doc = await addDoc(collection(db, 'posts'),{
            title: values.title,description:values.description })
        console.log('done')

    }

    return (
        <div className="write">
            <img className="writeImg" src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset=""/>
            <form className="writeForm" onSubmit={submit} >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}  />
                    <input name="title" value={values.title}
          onChange={handleChange}  type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
        
                <div className="writeFormGroup">
                    <textarea name="description" value={values.description}
          onChange={handleChange} placeholder="Tell your story...." type="text" className="writeInput writeText"></textarea>
                </div>
                
                <button value="Submit"  className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    )
}
