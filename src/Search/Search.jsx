import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCardInfo } from '../reducer';

const Search = (props) => {
    const [value, setValue] = useState('');

    return (
        <div className="input-group my-5">
            <input type="text" className="form-control" placeholder="Enter city name..." value={value}
                onChange={(e) => {
                    setValue(e.target.value);
            }} />
            <div className="input-group-append">
                <button className="btn btn-warning" type="button" disabled={!value}
                    onClick={() => {                       
                        if (value)
                        props.getCardInfo(value);
                        setValue('');
                    }}>Search</button>
            </div>
        </div>);
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps, {getCardInfo})(Search);