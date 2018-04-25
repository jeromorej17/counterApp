// App.js

import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';

const App = ()=> {
    return (<div className="container">
                <Counter /><br />
                <div className="columns">
                    <div className="column is-11">
                        <AddCounter />
                    </div>
                    <div className="column auto">
                        <RemoveCounter />
                    </div>
                </div>
            </div>
    )
        
}
    


export default App;