import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterCol = ({ menuTitle, menuItems, children }) => {
    console.log(menuItems);
    return (
        <Col md={4}>
            <div className="pl-5">
                {
                    menuTitle &&
                    <>
                        <h4>{menuTitle}</h4>
                       
                    </>
                }
                <ul className='list-unstyled mx-0 p-0 my-4 text-left'>
                    {
                        menuItems && menuItems.map(item => <li>
                            <Link to={item.link}>{item.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
            {
                children && children
            }
        </Col>
    );
};

export default FooterCol;