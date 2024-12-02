import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import LogoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from "./nav-link";



export default function MainHeader()
{
    
    return(
        <>
        <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <Image src={LogoImg} alt="a plate with food on it" priority />
            NexLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                   <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
    );


}