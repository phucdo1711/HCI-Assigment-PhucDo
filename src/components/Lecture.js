import React, { Component } from 'react';
import Flex from './Flex';

class Lecture extends Component {
    render(){
        return (
            <Flex column>
                <h3>15 January - 21 January</h3>
                <img src="http://fit.hanu.vn/pluginfile.php/5192/mod_label/intro/maxresdefault4.jpg" width={300} height={200}/> 
                <h3>22 January - 28 January</h3>
                <img src="http://www.cwfgroup.com/eng/wp-content/uploads/2015/11/Seminar-1024x421.jpg" width={350} height={200}/> 
                <h3>29 January - 4 February</h3>
                <h3>19 February - 25 February</h3>                
            </Flex>
        )
    }
}

export default Lecture;