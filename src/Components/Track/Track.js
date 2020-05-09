import React from 'react';


class Track extends React.Component {

    renderAction() {
        //return (this.props.isRemoval ? <button className="Track-action">-</button> : <button>-</button>);
        if (this.props.isRemoval) {
            return (
                <button className="Track-action">-</button>
            );
        } else {
            return (
                <button className="Track-action">-</button>
            );
        }

    }




    //<!-- + or - will go here -->


    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}


export default Track;
