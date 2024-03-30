import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../../context/productContext";
import { useAuth } from "../../context/authContext";
import { toast, Toaster } from "sonner";
import { useCart } from "../../context/CartContext";
function ProductPage() {
    const { getProduct, product } = useProduct();
    const [dataLoaded, setDataLoaded] = useState(false);
    const { isAuthenticated } = useAuth();
    const { slug } = useParams();
    const { addToCart } = useCart(); 
    useEffect(() => {
        const fetchData = async () => {
            try {
                await getProduct(slug);
                setDataLoaded(true);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Agrega lógica para manejar el error, como mostrar un mensaje al usuario
            }
        };

        fetchData();
    }, [slug]);

    const handleClick = (event) => {
        event.preventDefault();
        if (isAuthenticated) {
            addToCart(product);
            console.log("Producto añadido al carrito:", product);
        } else {
            console.log("No estas autenticado")
            toast.info('No estas autenticado, por favor inicia sesion')
        }
    }


    if (!dataLoaded) {
        return (
            <div className='pt-32 flex justify-center items-center'>
                <div className="relative">
                    <div className="w-20 h-20 border-purple-200 border-2 rounded-full"></div>
                    <div className="w-20 h-20 border-primary border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-52 px-10 md:pt-24 ">
            <div className="flex flex-col justify-center items-center md:flex-row">
                <div className="w-full md:w-[50%] h-auto md:px-8">
                    <img
                        className="w-full h-auto object-cover rounded-md"
                        src={product.urlImage}
                        alt="Descripción de la imagen"
                    />
                </div>
                <div className="py-8 flex flex-col justify-center w-full md:w-[50%] md:px-4">
                    <h1 className="font-veneer text-3xl md:text-4xl text-center">{product.title}</h1>
                    <h3 className="text-xl md:text-2xl font-medium py-3">Descripción</h3>
                    <p className="text-sm md:text-base">
                        {product.description}
                    </p>
                    <div className="flex items-center justify-between py-3">
                        <h3 className="text-md md:text-2xl font-medium">Ingredientes</h3>
                        <h3 className="text-md md:text-lg font-medium">Cantidad</h3>
                    </div>
                    <div>
                        {product.ingredients.map((item, index) => (
                            <div className="flex justify-between" key={index}>
                                <p className="text-sm md:text-base">{item.name}</p>
                                <p className="text-sm md:text-base">{item.amount}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-lg md:text-3xl font-veneer text-redprimary py-3 text-center">${product.price}</p>
                        <p className="text-xs">Puedes ordenar hasta 20 productos.</p>
                        <div className="py-3 pb-3 flex items-center space-x-3">
                            <button className="border-2 py-2 px-3 rounded-md hover:bg-green-400 cursor-pointer">+</button>
                            <button className="py-2 px-3 border-2 rounded-md font-veneer">1</button>
                            <button className="border-2 py-2 px-3 rounded-md hover:bg-primary">-</button>
                        </div>
                        <button  onClick={handleClick} className="border rounded-lg text-lg bg-primary p-2 font-veneer text-white">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>

    )
}
export default ProductPage;