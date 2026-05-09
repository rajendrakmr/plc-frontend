
import BreadCrumb from "@/app/components/sections/BreadCrumb"; 
import '@/app/components/css/product.css'
import ContactSection from "@/app/components/sections/common/ContactSection";
import BrandCategory from "@/app/components/sections/common/BrandCategory";
export const metadata = {
    title: "FAQ",
    description: "PLC automation spare parts supplier",
};

type Props = {
    params: {
        brand: string;
    };
};
export default function Brands({ params }: Props) {
    const { brand } = params;
    return (
        <main>
            <BreadCrumb
                title="FAQ"
                bgImage="/assets/engineering-services-4.jpg"
                items={[
                    { label: "Home", link: "/" },
                    { label: "Brands" },
                    { label: brand },
                ]}
            />


            <BrandCategory />

            <ContactSection />
        </main>
    );
}