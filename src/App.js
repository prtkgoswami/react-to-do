import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import Item from './Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [todoItems, setTodoItem] = useState([
                                      "Sample Item For To-Do List",
                                      "Click Item to Mark as Done",
                                      "Click X Button to Delete Item"
                                    ]);
  const [doneItems, setDoneItem] = useState([]);

  return (
    <div className="App">
      <header className="relative text-left w-100 px-2 py-2 md:px-20 md:py-4">
        <p className="text-2xl md:text-4xl font-medium text-green-400 uppercase">React To-Do</p>
      </header>

      <div className="new-item py-3 px-2 md:px-20">
        <form onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          setTodoItem((items) => [...items, data.get("title")]);
          e.currentTarget.reset();
        }}>
          <input type="text" name="title" className="w-full sm:w-2/3 py-2 px-2 md:px-4 md:mx-3 bg-transparent border-b text-white focus:outline-none"
          placeholder="Enter Item...  " required/>
          <input type="submit" value="Add Item" className="py-2 px-3 sm:inline-block hidden md:px-4 bg-gray-900 text-green-300 mx-3 uppercase transition-colors duration-300 hover:bg-gray-700"/>
        </form>
      </div>

      <div className="item-container py-3 px-5 md:px-40">
        <div className="title py-2 border-b mb-4"><p className="text-xl font-light uppercase text-green-300">Pending</p></div>
        <div className="item-container flex flex-col items-center">
          {todoItems.length == 0 && <p className="p-5 text-green-100 text-md uppercase">--- No Items Found ---</p>}
          {
            todoItems.map((item, index) => (
              // <Item title={item, false}/>
              <div className="w-full md:w-5/6 flex flex-row my-2">
                <div className="item-check py-2 px-5 flex-grow text-left">
                  <a className="cursor-pointer" onClick={() => {
                    setTodoItem(todoItems.filter((_, i) => i !== index));
                    setDoneItem((items) => [...items, item]);
                  }}>
                    <p className={`text-white`}>{item}</p>
                  </a>
                </div>
                <button className="py-2 px-5 text-white bg-red-700 transition-colors duration-300 hover:bg-red-500" onClick={() => 
                  setTodoItem(todoItems.filter((_, i) => i !== index))
                }>
                  <FontAwesomeIcon icon={faTimes}/>
                </button>
              </div>
            ))
          }
        </div>
      </div>

      <div className="done-container py-3 px-5 md:px-40">
        <div className="title py-2 border-b mb-4"><p className="text-xl font-light uppercase text-green-300">Complete</p></div>
        <div className="item-container flex flex-col items-center">
          {doneItems.length == 0 && <p className="p-5 text-green-100 text-md uppercase">--- No Items Found ---</p>}
          {
            doneItems.map((item, index) => (
              <div className="w-full md:w-5/6 flex flex-row my-2">
                <div className="item-check py-2 px-5 flex-grow text-left">
                  <a className="cursor-pointer" onClick={() => {
                    setDoneItem(doneItems.filter((_, i) => i !== index));
                    setTodoItem((items) => [...items, item]);
                  }}>
                    <p className={`line-through text-gray-500`}>{item}</p>
                  </a>
                </div>
                <button className="py-2 px-5 text-white bg-red-700 transition-colors duration-300 hover:bg-red-500" onClick={() => 
                  setDoneItem(doneItems.filter((_, i) => i !== index))
                }>
                  <FontAwesomeIcon icon={faTimes}/>
                </button>
              </div>
            ))
          }
        </div>
      </div>

      <footer className="relative bottom-0 p-2">
        <p className="text-green-400">Made with <FontAwesomeIcon icon={faHeart} className="text-red-500"/> by <a href="http://prtkgoswami.github.io/">Pratik Goswami</a></p>
      </footer>
    </div>
  );
}

export default App;
