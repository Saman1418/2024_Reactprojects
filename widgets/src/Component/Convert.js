import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {



    const [translated, setTranslated] = useState("")
    useEffect(() => {
        const doTranslatin = async () => {
            const { data } = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                },
            })

            setTranslated(data.data.translations[0].translatedText)

        };

        doTranslatin();


    }, [language, text])
    return (
        <div>
            <h1 className="ui header">
                {translated}
            </h1>
        </div>
    )
}

export default Convert;