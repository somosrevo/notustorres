import React from "react";

import * as s from './styles'
import * as t from '../fontStyles'
import { StaticImage } from "gatsby-plugin-image";
import {useTranslation, Trans} from 'react-i18next'

export default function ServiceBox(props){

    function imgSelect(){
        switch (props.idImg) {
            case 1:
                return <StaticImage src="../../images/services/wpp5.jpeg" />
        
            case 2:
                return <StaticImage src="../../images/services/wpp1.jpeg" />
            
            case 3:
                return <StaticImage src="../../images/services/wpp4.jpeg" />
            
            case 4:
                return <StaticImage src="../../images/services/wpp2.jpeg" />

            case 5:
                return <StaticImage src="../../images/services/maintence.jpg" />

            case 6:
                return <StaticImage src="../../images/services/maintence2.jpg" />

            case 7:
                return <StaticImage src="../../images/services/data.jpg" />

            case 8:
                return  <StaticImage src="../../images/services/cert.jpg" />
        }
    }

    const translator = useTranslation()

    return(
        <s.serviceBox id={props.id} >
            {imgSelect()}
            <div>
                <t.h3 weight="600">
                    <Trans components={{span: <span/>}} >{props.title}</Trans>
                </t.h3>
                <t.p>{translator.t(props.description)}</t.p>
            </div>
        </s.serviceBox>
    )
}