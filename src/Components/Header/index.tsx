import React,{useState} from 'react'
import "./_header.scss";
import { Link } from '../../Utils/constants'

export interface HeaderProps{
    name:string,
    link?:Array< {href?:string, linkName?:string}>,
    toggle?:boolean
    theme?:boolean
    onclick?:() => void
}

export default function Header(props:HeaderProps){
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prevClicked => !prevClicked)
    }

    return(
        <div className={'header'}>
            <div 
                className='header__main-container'
                data-toggle={props.toggle}
            >
                <div className='header__name-wrapper'>
                    <p 
                        className='header__name'
                        data-toggle={props.toggle}
                    >
                    {props.name}
                    </p>
                </div>

                <div className='header__nav-wrapper'>
                    <ul className='header__nav'>
                        {Link.map((link,index) => {
                            return(
                                <li className='header__nav-item' 
                                    key={index + 1}
                                >
                                    <a 
                                        href={link.href} 
                                        data-toggle={props.toggle}
                                    >
                                        {link.linkName}
                                    </a>
                                </li> 
                            )
                        })}
                    </ul>

                    <div 
                        className={'app__toggler'}
                        onClick={props.onclick}
                        >
                        {props.theme ? 
                            <i className="fa-solid fa-sun"></i>:
                            <i className="fa-regular fa-moon"></i> 
                        }
                    </div>

                    <div 
                        className='header-mobile-nav-icon'
                        onClick={handleClick}
                    >
                        { clicked ?
                            <i className="fa-regular fa-circle-xmark"></i>:
                            <i className="fa-solid fa-bars"></i>
                        }
                    </div>
                </div>
            </div>
            
            {/* Mobile Nav */}
            <div className='header__nav-container'>
                {clicked && <ul className='header__mobile-nav'>
                    {Link.map((link,index) => {
                        return(
                            <li className='header__mobile-nav-item' 
                                key={index + 1}
                            >
                                <a 
                                    href={link.href} 
                                    data-toggle={props.toggle}
                                >
                                    {link.linkName}
                                </a>
                            </li> 
                        )
                    })}
                </ul>}
            </div>
        </div>
    )
}