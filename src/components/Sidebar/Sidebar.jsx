import { Link } from "react-router-dom";
import { useState } from "react";
import defaultImgProfile from "../../assets/images/default-no-user-pic.jpg";

export const Sidebar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="sidebar">
            <div className="w-full mb-s px-s py-s relative flex-row align-center justify-between">
                <div className="flex-row align-center gap-s" onClick={() => setMenu(!menu)}>
                    <img src={defaultImgProfile} alt="default" className="avatar" />
                    <h4>Alexis Ruiz Diaz</h4>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
                <Link to="settings" className="btn btn-secondary fc-gray bg-white-hover">
                    <i className="fa-solid fa-gear"></i>
                </Link>
                {menu && (
                    <div className="menu">
                        <h5 className="mb-s px-m pt-s uppercase">Account</h5>
                        <div className="px-m pb-s flex-row align-center justify-start gap-s divide-bottom">
                            <i className="fa-solid fa-check"></i>
                            <img src={defaultImgProfile} alt="default" className="avatar"/>
                            <h4 className="flex-col fs-s">
                                Alexis Ruiz Diaz
                                <span className="fc-gray">arrd00.db@gmail.com</span>
                            </h4>
                        </div>
                        <ul>
                            <li className="px-m py-s divide-bottom">
                                Log out
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Search note */}
            <form className="w-full flex-col mb-m">
                <div className="mx-auto input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder="Search note" />
                </div>
            </form>
            <ul className="w-full flex-col gap-s">
                {/* Add note */}
                <li>
                    <button className="mb-s btn btn-primary mx-auto px-m justify-start gap-s bg-black-hover fc-white">
                        <i className="fa-solid fa-plus"></i>New note
                    </button>
                </li>
                {/* My notes */}
                <li>
                    <Link to="/" className="btn btn-primary mx-auto px-m justify-start gap-s bg-gray-hover fc-black">
                        <i className="fa-solid fa-file-pen"></i>My notes
                    </Link>
                </li>
                {/* Trash */}
                <li>
                    <Link to="trash" className="btn btn-primary mx-auto px-m justify-start gap-s bg-gray-hover fc-black">
                        <i className="fa-solid fa-trash"></i>Trash
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
