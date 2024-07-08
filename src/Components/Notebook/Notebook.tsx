import { notebooks } from '../../Objects/NotebookArray';
import { ListaNotebook } from './ListaNotebook';

export const Notebook = () => {
    return (
      
        <div  className="list d-flex justify-content-center align-items-center">
            <ol >
                {notebooks.map((prop) => (
                    <ListaNotebook propiedad={prop} />
                ))}
            </ol>
         </div>
    
    );
}
