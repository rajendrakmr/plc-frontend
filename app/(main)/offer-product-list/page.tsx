 
import BreadCrumb from "@/app/components/sections/BreadCrumb";
import ProductSection from "@/app/components/sections/ProductSection";
 
export const metadata = {
    title: "Exclusive Offers on PLC Automation Group Products | Siemens, Allen-Bradley, ABB, Danfoss, Honeywell & B&R | Industrial Spare Parts Deals",
    description: "Grab exclusive offers on top automation products from Siemens, Danfoss, Honeywell, B&R, and Lenze. Find discounted models like Siemens 6ES7331-7KF02-0AB0, Danfoss 060G4412, Honeywell GLZ8C-DEU, and more. Shop now for the best deals on industrial automation spare parts!",
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