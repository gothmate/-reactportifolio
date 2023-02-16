import { useState, useEffect } from 'react'
// import { contains } from 'sequelize/dist/lib/operators';



interface NavItemsProps extends React.HTMLAttributes<HTMLLIElement> {
    link: string;
    item: string;
    image: string;
    isActive: boolean;
} 


export function NavItems(props:NavItemsProps) {
    
    return (
        <li className={props.isActive ? 'list active' : 'list'} onClick={props.onClick}>
            <a className="anchor" href={props.link} >
                <span className="text">{props.item}</span>
                <span className="icon">
                    <img src={props.image} alt={props.item} />
                </span>
            </a>
        </li>
    )

}