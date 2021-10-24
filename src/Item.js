import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Item({title, checked}) {
    return (
        <div className="w-4/6 border-2 border-indigo-600 flex flex-row my-2">
            <div className="item-check py-2 px-5"><input className="" type="checkbox" name="check-item" id=""/></div>
            <p className={`p-2 flex-grow text-left text-white ${checked && "line-through text-grey-200"}`}>{title}</p>
            <button className="py-2 px-5 text-white"><FontAwesomeIcon icon={faTimes}/></button>
        </div>
    )
}

export default Item
