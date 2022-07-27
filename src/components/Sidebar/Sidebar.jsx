import { Link } from 'react-router-dom'
import { useState } from 'react'
import defaultImgProfile from '../../assets/images/default-no-user-pic.jpg'

export const Sidebar = () => {
    const [menu, setMenu] = useState(false)

    return (
        <nav className='sidebar'>
            <div className='sidebar__cta m__bottom--s pos__rel'>
                <div className='flex flex__ali--center gap-s flex--g' onClick={() => setMenu(!menu)}>
                    <img src={defaultImgProfile} alt="default photo" className='avatar' />
                    <h4>Alexis Ruiz Diaz</h4>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <Link to='settings' className='btn btn__info'><i className="fa-solid fa-gear"></i></Link>
                {
                    menu &&
                    <div className='menu'>
                        <h5 className='title title--m p__left--m p__bottom--s'>Account</h5>
                        <div className='flex flex__ali--center gap-s p__left--m p__bottom--m border--bottom'>
                            <i className="fa-solid fa-check"></i>
                            <img src={defaultImgProfile} alt="default photo" className='avatar' />
                            <h4 className='flex flex--col fc--secondary'>Alexis Ruiz Diaz <span className='fs--s'>alexis00rodrigo@gmail.com</span></h4>
                        </div>
                        <ul>
                            <li className='border--bottom p__top--s p__bottom--s p__left--m'>Log out</li>
                        </ul>
                    </div>
                }
            </div>
            <form className='sidebar__cta'>
                <div className="input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder='Search note'/>
                </div>
            </form>
            <div className='sidebar__cta m__bottom--l'>
                <button className='btn btn__primary'><i className="fa-solid fa-plus"></i>New note</button>
            </div>
            <ul className='sidebar__menu'>
                <li>
                    <Link to='/' className='btn btn__link'><i className="fa-solid fa-file-pen"></i>My notes</Link>
                </li>
                <li>
                    <Link to='trash' className='btn btn__link'><i className="fa-solid fa-trash"></i>Trash</Link>
                </li>
            </ul>
        </nav>
    )
}