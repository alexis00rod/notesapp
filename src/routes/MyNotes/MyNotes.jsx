import { useState } from 'react'

export const MyNotes = () => {
    const [notes, setNotes] = useState([
        {title: "Title",description:"Description"},
        {title: "Title 2",description:"Description"}
    ])

    return (
        <>
        <main>
            <div className="px-m py-m flex-col gap-s divide-bottom">
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
            <section>
                <ul className='px-m py-s grid-cols-2 gap-s'>
                    {notes.map((note,index) => (
                        <li key={index} className='card'>
                            <h4>{note.title}</h4>
                            <p>{note.description}</p>
                        </li>
                    ))
                    }
                </ul>
            </section>
        </main>
        <div>
            Note
        </div>
        </>
    )
}