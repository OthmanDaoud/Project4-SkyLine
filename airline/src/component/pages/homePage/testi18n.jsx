import React, { Fragment } from "react";
import { useTranslation } from 'react-i18next';

const Testi18n = () => {
    const { t, i18n } = useTranslation();

    const changeEN = () => {
        i18n.changeLanguage('en');
    };
    
    const changeAR = () => {
        i18n.changeLanguage('ar');
    };

    return ( 
        <Fragment>
    
           
        </Fragment>
    );
}
 
export default Testi18n;
