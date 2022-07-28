import { useState } from 'react'
import { useUserContext } from '../../context/UserContext'

export const MyNotes = () => {
    // const [notes, setNotes] = useState([
    //     {title: "Title",description:"Description"},
    //     {title: "Title 2",description:"Description"}
    // ])
    const {notes} = useUserContext()

    console.log('notes', notes)

    return (
        <>
        <main>
            <div className="w-full px-m py-m flex-col gap-s divide-bottom">
                <h2 className='flex-row align-center gap-s'><i className="fa-solid fa-file-pen"></i>My notes</h2>
                <div className='flex-row align-center justify-between'>
                    <span className='fc-secondary'>{notes.length} notes</span>
                    <div className='flex-row align-center gap-xs'>
                        <button className='btn btn-secondary fs-s fc-gray bg-white-hover'>
                            <i className="fa-solid fa-arrow-down-wide-short"></i>
                        </button>
                        <button className='btn btn-secondary fs-s fc-gray bg-white-hover'>
                            <i className="fa-solid fa-filter"></i>
                        </button>
                        <button className='btn btn-secondary fs-s fc-gray bg-white-hover'>
                            <i className="fa-solid fa-list"></i>
                        </button>
                    </div>
                </div>
            </div>
            <ul className='list'>
                {notes.map((note,index) => (
                    <li key={index} className='card'>
                        <h4>{note.title}</h4>
                        <p>{note.description}</p>
                    </li>
                ))}
            </ul>
        </main>
        <div>
            Note
        </div>
        </>
    )
}