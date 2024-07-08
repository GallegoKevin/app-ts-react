// Objects/NotebookArray.tsx

export interface storeProps {
    stock: number;
    precio: string;
}

export interface NotebookProps {
    id: string;
    titulo: string;
    anio: number;
    descripcion: string;
    store: storeProps[]; // Quité las comillas dobles innecesarias
    imagen: string;
    video: string;
}

export const notebooks: NotebookProps[] = [
    {
        id: "1",
        titulo: "ASUS ROG Zephyrus Duo 16",
        anio: 2023,
        "descripcion": "Laptop gamer avanzado con pantalla QHD+ de 16\" y 240Hz, un Ryzen 9 7945HX, 32GB RAM, 1TB SSD y tarjeta gráfica RTX 4080. Diseño elegante en negro.",
        store: [
            {
                stock: 2,
                precio: " $ 5450",
            }
        ],
        imagen: "https://img.youtube.com/vi/Mh0HrQfRTl0/maxresdefault.jpg",
        video: "https://d1ifbi2yr6p9bt.cloudfront.net/6341732/1720402490676-58e5e86cdea5991c0b6e8feb6df38477.mp4?v=1720420666000"
    },
    {
        id: "2",
        titulo: "Asus ZenBook Duo OLED",
        anio: 2024,
        "descripcion": "Laptop con Windows 11 Pro, procesador Intel® Core™ Ultra 9 Processor 185H con NPU, 32GB RAM y 1TB SSD. Características de pantalla dual OLED táctil 14 y batería de 75 Wh.",
        store: [
            {
                stock: 1,
                precio: " $ 2472",
            }
        ],
        imagen: "https://img.youtube.com/vi/xgFdKYN33fs/maxresdefault.jpg",
        video: "https://d1ifbi2yr6p9bt.cloudfront.net/6341732/1720426129957-5de0d0ce17b55ba51a4d34ebbdfe581d.mp4?v=1720444285000"
    },
    {
    id: "3",
    titulo: "ROG Zephyrus G16",
    anio: 2024,
    descripcion: "Laptop gamer con procesador Intel Core Ultra 9 185H, 16GB RAM, 1TB SSD NVMe, y NVIDIA GeForce RTX 4070. Pantalla OLED 16 con 240Hz y  diseño elegante.",
    store: [
        {
            stock: 2,
            precio: " $ 3200",
        }
    ],
    imagen: "https://img.youtube.com/vi/MXDb6pAnFBg/maxresdefault.jpg",
    video: "https://d1ifbi2yr6p9bt.cloudfront.net/6341732/1720430642206-ceec86bcce0f86619a6440d776336c1c.mp4?v=1720448789000"
}
];
