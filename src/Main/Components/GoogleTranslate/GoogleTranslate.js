import React from 'react';

const GoogleTranslate = (props) => {
    function googleTranslateElementInit() {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }
    return (
        <>
            <div id="google_translate_element"></div>
        </>
    )
}

export default GoogleTranslate