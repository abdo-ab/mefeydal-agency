import globe from '../assets/images/globe.png';
import doc from '../assets/images/doc.png';
import interpretation from '../assets/images/interpretation.png';
import media from '../assets/images/multi-media.png';

export default function Services() {
    return (
        <section id="services" className="bg-white py-12 ">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Our Services</h2>
                    <p className="text-gray-700 mt-2">
                        We offer a variety of services to help you achieve your goals.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Service Card */}
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                        <img src={globe} alt="Translation" className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Translation</h3>
                        <p className="text-gray-600 text-sm">
                            Accurate and culturally relevant translations for all your business needs.
                        </p>
                    </div>

                    <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                        <img src={doc} alt="Document Translation" className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Document Translation</h3>
                        <p className="text-gray-600 text-sm">
                            Professional translations of legal, technical, and business documents.
                        </p>
                    </div>

                    <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                        <img src={interpretation} alt="Interpretation" className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
                        <p className="text-gray-600 text-sm">
                            Expert interpretation services for meetings, conferences, and events.
                        </p>
                    </div>

                    <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                        <img src={media} alt="Media Translation" className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Multimedia Translation</h3>
                        <p className="text-gray-600 text-sm">
                            Localization of video, websites, and other media content.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
