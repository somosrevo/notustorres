import React from "react";

import * as s from "./styles";
import * as t from '../fontStyles'
import { GiHamburgerMenu } from "react-icons/gi";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function Header(props) {
    const array = [
        {   
            link: "/",
            nome: "Home",
        },
        {
            link: "/about",
            nome: "Sobre nós",
        },
        {
            link: "/services",
            nome: "Serviços",
        },
        {
            link: "/",
            nome: "Contato",
        }
    ]

    const [scrollPosition, setScrollPosition] = React.useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        console.log(scrollPosition);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return (
        <s.headerWrapper colorChanger={props.colorChanger} scrollPosition={scrollPosition}>
            <s.headerBody>
                <s.toggleSidebarBtn onClick={props.onClick}>
                    <GiHamburgerMenu color="#fff" size={24} />
                </s.toggleSidebarBtn>
                <s.gridHeader>
                    {array.map((page) => (
                        <Link to={page.link} >
                            <t.p color="#fff" mgBottom={"0"} > {page.nome} </t.p>
                        </Link>
                    ))}
                </s.gridHeader>
                <StaticImage src="../../images/notustorrebranco.png" height={60} />
            </s.headerBody>
        </s.headerWrapper>
    );
}
