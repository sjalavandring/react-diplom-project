import { useState, useEffect, useMemo } from 'react'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import type { categoryType } from './../../store/store'
import defaultImage from '../../img/shop-logo.png'

function CategoryCard (props: {categoryData: categoryType}) {
    const [imageSrc, setImageSrc] = useState<string>(defaultImage);
  
    useEffect(() => {
      axios
        .get(`http://localhost:3001/img/${props.categoryData.category_image}`, { responseType: 'blob' })
        .then((response) => {
          const objectUrl: string = URL.createObjectURL(response.data);
          setImageSrc(objectUrl);
        });
    }, [props.categoryData.category_image]);
  
    const memoizedImageSrc = useMemo(() => imageSrc, [imageSrc]);

    return (
        <div className="category-about__item">
            <NavLink to={`${props.categoryData.category_name}/`}>
                <img className="category-about__image" src={imageSrc} loading="lazy" alt="shops-about__image" />
            </NavLink>
            <div className="category-about__description">{props.categoryData.category_name}</div>
        </div>
    )
}

export default CategoryCard