export default function AboutPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 flex flex-col py-10 justify-center items-center">
            <h1 className="text-3xl font-bold mb-6">About Cook<span className="text-accent">Ease</span></h1>
            <section className="mb-8 flex flex-col items-center text-center border-b border-borderLight shadow-sm rounded-lg py-6 px-3 pb-8">
                <h2 className="text-2xl font-semibold mb-4 relative">Our Mission  <span className="carvedLine"></span></h2>
                <p className="text-lg text-textMuted">
                    At CookEase, our mission is to make cooking enjoyable and accessible for everyone. We believe that with the right tools and ingredients, anyone can create delicious meals at home.
                </p>
            </section>
            <section className="mb-8 flex flex-col items-center text-center border-b border-borderLight shadow-sm rounded-lg py-6 px-3 pb-8">  
                <h2 className="text-2xl font-semibold mb-4 relative">Our Story  <span className="carvedLine"></span></h2>
                <p className="text-lg text-textMuted">
                    Founded in 2023, CookEase started as a small online store dedicated to providing high-quality kitchen essentials. Over the years, we have grown into a trusted brand known for our commitment to quality and customer satisfaction.
                </p>
            </section>
            <section className="mb-8 flex flex-col items-center text-center border-b border-borderLight shadow-sm rounded-lg py-6 px-3 pb-8">   
                <h2 className="text-2xl font-semibold mb-4 relative">Our Team  <span className="carvedLine"></span></h2>
                <p className="text-lg text-textMuted">
                    Our team is made up of passionate food enthusiasts, culinary experts, and dedicated customer service professionals who are all committed to helping you on your cooking journey.
                </p>
            </section>
        </main>
    );
}