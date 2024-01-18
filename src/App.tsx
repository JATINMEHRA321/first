import { useState } from 'react';
import styles from './App.module.scss';
import { Navbarn } from './components/navbarn/navbarn';
import { Div2 } from './components/div-2/div-2';
import { Div3 } from './components/div-3/div-3';
import { Div4 } from './components/div-4/div-4';
import { Div5 } from './components/div-5/div-5';
import { Div6 } from './components/div-6/div-6';
import { Imagediv } from './components/imagediv/imagediv';
import Classnames from 'classnames';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbarn />
            <Imagediv />
            <Div2 />
            <Div3 />
            <Div4 />
            <Div5 />
            <Div6 /></div>
    );
}

export default App;
