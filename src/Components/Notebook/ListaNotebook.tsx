// Components/Notebook/ListaNotebook.tsx
import { NotebookProps } from "../../Objects/NotebookArray";

interface typeProps {
    propiedad: NotebookProps;
}

export const ListaNotebook = ({ propiedad }: typeProps) => {
    return (
        <li key={propiedad.id}>{propiedad.titulo} ({propiedad.anio})</li>
    );
}
