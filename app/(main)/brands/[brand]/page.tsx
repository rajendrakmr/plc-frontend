
import BlogSection from "@/app/components/sections/BlogSection";
import BreadCrumb from "@/app/components/sections/BreadCrumb";
// import TeamSlider from "@/app/components/sections/TeamSlider";
import '@/app/components/css/product.css'
import FaqSection from "@/app/components/sections/FaqSection";
import ProductListSection from "@/app/components/sections/ProductListSection";
import ContactSection from "@/app/components/sections/common/ContactSection";
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


            <ProductListSection />

              <ContactSection />
        </main>
    );
}