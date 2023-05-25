import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { storeType } from '../../store/store';

type shopsListType = {
    shopsReducer: storeType[];
}

function Category() {
    const dispatch = useDispatch();
    const categoriesList =useSelector((state: shopsListType) => state.shopsReducer)

    return (
        <div className="category">
            hello
        </div>
    )
}

export default Category;