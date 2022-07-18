import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {
    
    const [inputText, setInputText] = useState('')
   
    const onInputChange = (event) => {
        
        setInputText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputText.trim().length<=1) return;

        //setCategories( categories => [inputText, ...categories])
        onNewCategory(inputText.trim());
        setInputText('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputText}
                onChange= { onInputChange}
            />
        </form>
        
    )
}