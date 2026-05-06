
import BlogSection from "@/app/components/sections/BlogSection";
import BreadCrumb from "@/app/components/sections/BreadCrumb";
// import TeamSlider from "@/app/components/sections/TeamSlider";
import '@/app/components/css/blogs.css'
export const metadata = {
    title: "Blogs",
    description: "PLC automation spare parts supplier",
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


            <section className="cta-section">
                <div style={{ 'maxWidth': '700px', 'margin': 'auto' }}>
                    <h2>
                        Can't Find Your Part? We'll Source It.
                    </h2>
                    <p>
                        We're here when you need us
                    </p>
                    <div className="cta-btns">
                        <a href="#" className="btn-white">
                            📋 Submit Part Request
                        </a>
                        <a href="#" className="btn-outline-white">
                            📞 Call Our Experts
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}