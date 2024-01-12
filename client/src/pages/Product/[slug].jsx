import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/productContext";
function ProductPage() {
    const { getProduct, product } = useProduct();
    const [dataLoaded, setDataLoaded] = useState(false);
    const { slug } = useParams();
    useEffect(() => {
        console.log("Slug changed:", slug);
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
        <div className="pt-24">
            <p>{product.description}</p>
        </div>
    )
}
export default ProductPage;