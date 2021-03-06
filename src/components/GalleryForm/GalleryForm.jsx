import {useState} from 'react';

function GalleryForm ({addImage}) {

    // variables for tracking url input
    let [pathInput, setPathInput] = useState('');
    // let [url, setUrl] = useState('');
    // variables for tracking description input
    let [descriptionInput, setDescriptionInput] = useState('');
    // let [description, setDescription] = useState('');

    const onSubmit = () => {
        addImage(pathInput, descriptionInput)
        setPathInput('');
        setDescriptionInput('');
    }

    return (
        <>
        {/* input for image url */}
        <input type="text" placeholder="image url" value={pathInput} onChange={(event) => {
            setPathInput(event.target.value)
            }}/>

        {/* input for image description */}
        <input type="text" placeholder="description of image" value={descriptionInput} onChange={(event) => {
            setDescriptionInput(event.target.value)
            }} />

        <button onClick={onSubmit}>Submit</button>
        </>
    );
};

export default GalleryForm;