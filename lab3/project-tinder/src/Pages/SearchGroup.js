import React from 'react';

class SearchGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {query: ""};
    }

    handleSearch = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        const lowerCaseValue = this.state.query.toLowerCase().trim();
        
        const groupsListHTML = this.props.groupsList
            .filter((it)=>
                it.name.toString().toLowerCase().includes(lowerCaseValue)
                || it.subject.toString().toLowerCase().includes(lowerCaseValue)
                || it.description.toString().toLowerCase().includes(lowerCaseValue))           
            .map((it, i) => {
                return (
                    <section className="group-box " key={i}>
                        <div>
                            <p>Name: {it.name}</p>
                            <p>Description: {it.description}</p>
                            <p>Subject: {it.subject}</p>
                        </div>
                        <div>{it.members.map((member, id) => {
                            return (
                                <div className="member" key={id}>
                                    <p>Name: {member.name}</p>
                                    <p>Role: {member.role}</p>
                                </div>
                            )}
                            )}
                        </div>

                    </section>
                );
            }); 

        return <div className="App">
            <input type="text" placeholder="Type to search.." value={this.state.query} onChange={this.handleSearch} />
            {groupsListHTML}
            {groupsListHTML == "" && <span>No groups found!</span>}
        </div>
    }
}

export default SearchGroup;