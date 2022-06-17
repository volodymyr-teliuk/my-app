import './App.css';
import Button from './components/button/button';
import Input from "./components/input/input";
import Result from "./components/result/result";
import {useState} from 'react';

function App() {

    useState(1)

    const [endpoint, setEndpoint] = useState('');
    const [isLoading, setLoader] = useState(true);
    const [resultData, setResultData] = useState({});

    const sendRequest = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', endpoint);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false
            }

            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                setLoader(false);
                setResultData(xhr.responseText);
            }
        }
    }

    const renderWait = () => (<div>
        <Input updateValue={e => setEndpoint(e.target.value)}/>
        <Button onCLick={sendRequest}/>
    </div>)

    const renderResult = () => (<div>
        <Input updateValue={e => setEndpoint(e.target.value)}/>
        <Button onCLick={sendRequest}/>
        <Result data={resultData}/>
    </div>)


    return (
        <div>
            {isLoading ? renderWait() : renderResult()}
        </div>);
}

export default App;
