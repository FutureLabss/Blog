import "./write.css"
import {db} from '../../firebase'
import { collection, addDoc } from "firebase/firestore"; 


export default function Write() {

    console.log(db)

    async function submit(e){
        e.preventDefault()
        const doc = await addDoc(collection(db,'fr'),{
            title:'test',description:'this is a testthis is a testthisvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv is a testthis is a testthis is a testthis is a test'
        })
        console.log('done')

    }

    return (
        <div className="write">
            <img className="writeImg" src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset=""/>
            <form className="writeForm" >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input   type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
        
                <div className="writeFormGroup">
                    <textarea  placeholder="Tell your story...." type="text" className="writeInput writeText"></textarea>
                </div>
                <button onClick={submit} value="Submit"  className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    )
}
