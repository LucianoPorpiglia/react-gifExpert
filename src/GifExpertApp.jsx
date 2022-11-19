import { useState } from "react";
import { AddCategory,GifGrid } from "./components/index"

export const GifExpertApp = () => {
//!!!escribir esto useStateSnippet para empezar!!!

const [categories, setCategories] = useState(['One Punch ']);

 	const onAddCategory = (newCategory) => {

		if(categories.includes( newCategory )) return;
		setCategories([newCategory, ...categories])
	}

    return (
    	<>
    		{/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
			<AddCategory
				onNewCategory = { (value) => onAddCategory(value)}
			/>
        		{
				categories.map((category) => (
					<GifGrid
						key={category}
						category={category}
					/>
				))
				}
      		</>
    ) 
}