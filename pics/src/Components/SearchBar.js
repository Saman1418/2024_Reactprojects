import React from "react";

class Searchbar extends React.Component {

state = {term:""}

onEnter = (event)=>{
    event.preventDefault()
    this.props.onSubmits(this.state.term)
}
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onEnter}>
                    <div className="field">
                        <label>Search Bar</label>
                        <input type="text"  value={this.state.term} onChange={(e)=>this.setState({term:  e.target.value}) } />
                    </div>
                </form>
            </div>
        );
    };


};

export default Searchbar;