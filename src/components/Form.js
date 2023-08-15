import {useState} from 'react';

export default function Form (props) {

    const [formData, setFormData] = useState({
        searchterm: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData, 
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = () => {
        props.moviesearch(formData.searchterm);
    }

    return (
        <div className='input-group pt-4 w-50 mx-auto' >

                <label className='input-group-text' for='inputgroup'>Movie Search</label>
                <input 
                className='form-control'
                    type ="text" 
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                    placeholder='Search movie'
                    id="inputgroup"
                    required
                />
                <button className='btn btn-primary'  value="submit" onClick={handleSubmit}>Search</button>
        </div>
    )

}