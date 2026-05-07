
import BlogSection from "@/app/components/sections/BlogSection";
import BreadCrumb from "@/app/components/sections/BreadCrumb";
// import TeamSlider from "@/app/components/sections/TeamSlider";
import '@/app/components/css/blogs.css'
import ContactSection from "@/app/components/sections/common/ContactSection";
export const metadata = {
    title: "Blogs - Insights into Industrial Automation",
    description: "Explore PLC Automation Group's blogs for valuable insights into the world of industrial automation. Stay updated on trends, technologies, and best practices shaping the future of manufacturing.",
};

export default function Blogs() {
    return (
        <main>
            <BreadCrumb
                title="Blogs"
                bgImage="/assets/engineering-services-4.jpg"
                items={[
                    { label: "Home", link: "/" },
                    { label: "Blogs" },
                ]}
            />

            <BlogSection />


              <ContactSection />
        </main>
    );
}