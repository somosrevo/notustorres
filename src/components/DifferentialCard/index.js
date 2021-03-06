import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "gatsby";

import * as t from "../fontStyles";
import * as s from "./styles";

export default function DifferentialCard(props) {
    function imgSelect() {
        switch (props.idImg) {
            case 1:
                return <StaticImage src="../../images/services/anemometrica.jpg" />;

            case 2:
                return <StaticImage src="../../images/services/solar.jpg" />;

            case 3:
                return <StaticImage src="../../images/services/tower.jpg" />;

            case 4:
                return <StaticImage src="../../images/services/instrumentacao.jpg" />;

            case 5:
                return <StaticImage src="../../images/services/maintence.jpg" />;

            case 6:
                return <StaticImage src="../../images/services/maintence2.jpg" />;

            case 7:
                return <StaticImage src="../../images/services/data.jpg" />;

            case 8:
                return <StaticImage src="../../images/services/cert.jpg" />;
        }
    }
    return (
        <s.cardWrapper>
            <Link to={props.link} >
                <s.cardBg>{imgSelect()}</s.cardBg>
                <s.styleIcon>
                    <BsCheckCircleFill size={40} color="#27AE60" />
                </s.styleIcon>
                <s.cardPanel>
                    <t.h5 mgBottom={"0"} weight={600}>{props.title}</t.h5>
                </s.cardPanel>
            </Link>
        </s.cardWrapper>
    );
}
