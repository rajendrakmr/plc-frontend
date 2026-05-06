 
import BreadCrumb from "@/app/components/sections/BreadCrumb";
import ProductSection from "@/app/components/sections/ProductSection";
 
export const metadata = {
    title: "All Offer Products",
    description: "PLC automation spare parts supplier sdfdfdfdfdf",
};

 
export default function OfferProductList() {
    return (
        <main>
            <BreadCrumb
                title="All Offer Products"
                bgImage="/assets/engineering-services-4.jpg"
                items={[
                    { label: "Home", link: "/" },
                    { label: "All Offer Products" },
                ]}
            />

            <ProductSection /> 
        </main>
    );
}