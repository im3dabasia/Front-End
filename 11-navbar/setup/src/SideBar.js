import React from 'react'
import { links, social } from './data'

function SideBar() {
    return (
        <>
            <div className='links-container show-container'>

                <ul className='links'>
                    {
                        links.map((item) => {
                            return <li key={item.id}><a href={item.url}> {item.text}</a></li>
                        })
                    }

                </ul>

            </div>
        </>
    )
}

export default SideBar
