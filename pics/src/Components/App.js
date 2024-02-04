import React from "react";
import axios from "axios";
import SearchBar from './SearchBar';
import Imagelist from "./Imagelist";

class App extends React.Component {
    state = {image:[]}
    onSearchSubmit= async (term) => {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },

            headers: {
                Authorization: "Client-ID Ksf9ms0Rbkw8dLpqZtZg0baIll9L4AmdVkJVLCG9-YY"
        }
        })

        this.setState({image:response.data.results})
    
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmits={this.onSearchSubmit}></SearchBar>
                <Imagelist images={this.state.image}/>
            </div>
        );
    }
}
export default App;