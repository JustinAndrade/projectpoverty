import Image from 'next/image'
import logo from './pp_logo.png'

export default function Logo() {
    return (
    <Image height={48} src={logo} alt="project poverty logo"/>
    )
}