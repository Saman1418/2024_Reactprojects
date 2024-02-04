import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
    const [search, setsearch] = useState("programing")
    const [results, setresult] = useState([])

    const onChangevalue = (e) => {
        setsearch(e.target.value)
    }

    // const onEnterSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(search)

    // }

    useEffect(() => {
        const searchs = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: search,

                },

            });
            setresult(data.query.search)

        }
        if (search) {
            searchs();
        }


    }, [search])

    const renderResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                    >
                        Go
                </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    {/* {result.snippet} */}


                </div>

            </div>
        )
    })


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search</label>
                    <input
                        value={search}
                        onChange={onChangevalue}
                        className="input"
                        type="text"
                    />

                </div>

            </div>

            <div className="ui celled list">
                {renderResults}

            </div>

        </div>
    )
}
export default Search;