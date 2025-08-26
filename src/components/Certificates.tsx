import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data/certicates";

const CertificateModal = ({ selected, onClose }:any) =>{
    return (
        <AnimatePresence>
            {
                selected && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative max-w-3xl w-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="w-full rounded-lg shadow-xl"
                            />
                            <button
                                onClick={onClose}
                                className="absolute top-2 right-2 rounded-full bg-white px-3 py-1 text-black font-bold hover:bg-gray-200"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
        )}
        </AnimatePresence>
    );
    }
const CertificatesAndTestimonials =() =>{
    type Certificate = {
  id: number;
  title: string;
  issuer: string;
  year: number;
  image: string;
};

    const [selected, setSelected] = useState<Certificate | null>(null);


    return (
        <section className="mx-auto max-w-6xl px-6 py-16 text-white">
        {/* Certificates */}
            <h2 className="text-3xl font-bold mb-8">Certificates and testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                 {certificates.map((cert) => (
                     <div
                        key={cert.id}
                        className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.05] p-4 hover:shadow-lg"
                        onClick={() => setSelected(cert)}
                        >
                        <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-40 w-full object-contain rounded-lg mb-3"
                        />
                        <h3 className="text-lg font-semibold">{cert.title}</h3>
                        <p className="text-sm text-white/70">{cert.issuer} · {cert.year}</p>
                    </div>
                     ))
                }
            </div>
        <CertificateModal selected={selected} onClose={() => setSelected(null)} />
        
        </section>
    );
    }

    export default CertificatesAndTestimonials;