// App.tsx
import './App.css';
import  Card from './Components/Card/Card';
import { Notebook } from './Components/Notebook/Notebook';
import { notebooks } from './Objects/NotebookArray';

function App() {
    return (
        <>
            <h1 className='title'> Lista de Notebook (Gama Alta)</h1>
            <div className='d-flex flex-wrap justify-content-center align-items-center'>
                {notebooks.map((notebook) => (
                    <Card key={notebook.id} notebook={notebook} />
                ))}
            </div>
            <hr />
            <Notebook />
        </>
    );
}

export default App;
