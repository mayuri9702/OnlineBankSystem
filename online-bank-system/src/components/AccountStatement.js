import React from 'react'
import { NavbarLogout } from './NavbarLogout'
import { LeftNavbar } from './LeftNavbar'


export const AccountStatement = () => {
    return(
        <div>
        <NavbarLogout></NavbarLogout>
        <h1>Dashboard</h1>
        <LeftNavbar></LeftNavbar>
        </div>
    )
}