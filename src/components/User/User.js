import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    
    // let greetings;
    // if(familiar){
    //     greetings = <p>Welcome, my friend.</p>
    // }

    // else{
    //     greetings = <p>Who the hell are you?</p>
    // }

    // const greetings = familiar ? <p>Welcome, my friend.</p> : <p>Who the hell are you?</p>

    return (
        <div>
            <div>
                <h2>Greeting</h2>
                {
                    familiar ? <p>Welcome, my friend.</p> : <p>Who the hell are you?</p>
                }  
            </div>

            <div>
                <h2>Food</h2>
                {
                    familiar ? <p>I will buy Food for you.</p> : <p>Lets eat his his whose whose?</p>
                }
            </div>

            <div>
                <h2>Connection</h2>
                {
                    familiar ? <p>Let's join my facebook.</p> : <p>I don't add stranger?</p>
                }
                   
            </div>
        </div>
        
    );
};

export default User;