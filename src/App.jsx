import { Outlet } from 'react-router-dom'
import { useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";

export const App = () => {
    // const [note, setNote] = useState({})
    // const [notes, setNotes] = useState([])

    // const addNote = (e) => {
    //     e.preventDefault()
    //     setNotes([...notes,note])
    // }

    // const handleNote = ({target: {name,value}}) => {
    //     setNote({
    //         ...note,
    //         [name]:value
    //     })
    // }

    return (
        <>
        <div className='app'>
            <Sidebar />
            <Outlet />
        </div>
            {/* <form onSubmit={addNote}>
                <input type="text" name="noteHeader" placeholder="title" onChange={handleNote}/>
                <textarea name="noteBody" onChange={handleNote}></textarea>
                <button>Add note</button>
            </form>
            <div>
                {
                    notes.map((note,i) => (
                        <div key={i}>
                            <h2>{note.noteHeader}</h2>
                            <p>{note.noteBody}</p>
                        </div>
                    ))
                }
            </div> */}
        </>
    );
}