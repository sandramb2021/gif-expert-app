import {useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Soy Goku']);

    const onAddCategory = (value) => {
        if (categories.includes( value)) return;

        setCategories([value,...categories ]);
    }

    //const apiKey ='vytz0CkYPeFxot9FfZ19kjFLSqd7BHMu';
    return(
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory onNewCategory={ (value) => onAddCategory(value)}/>
           
            {
                categories.map( ( category ) =>
                (
                    <GifGrid  key= { category } category={category}/>
                ))
            }
           
        </>

    )
}