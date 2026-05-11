import BreadCrumb from "@/app/components/sections/BreadCrumb";
import "@/app/components/css/product.css";

import ContactSection from "@/app/components/sections/common/ContactSection";
import BrandCategory from "@/app/components/sections/common/BrandCategory";

export const metadata = {
    title: "Brands",
    description: "PLC automation spare parts supplier",
};

type Props = {
    params: Promise<{
        brand: string;
    }>;
};

export default async function Brands({
    params,
}: Props) {
    const { brand } = await params;

    const brandName = decodeURIComponent(brand);

    return (
        <main>
            <BreadCrumb
                title={brandName}
                bgImage="/assets/engineering-services-4.jpg"
                items={[
                    {
                        label: "Home",
                        link: "/",
                    },
                    {
                        label: "Brands",
                        link: "/brands",
                    },
                    {
                        label: brandName,
                    },
                ]}
            />

            <BrandCategory />

            <ContactSection />
        </main>
    );
}