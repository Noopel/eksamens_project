import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Title from "@/components/ui/Title";
import React from "react";

const KontaktPage = () => {
  

  return (
    <main>
      <Container>
        <section className="flex justify-center mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21137.34612069734!2d10.131917705477848!3d56.160738499510195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sM%C3%A6lkevejen%20123%2C%208000%20Aarhus%20C!5e0!3m2!1sda!2sdk!4v1744281572118!5m2!1sda!2sdk"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="flex flex-col">
          <div className="flex flex-wrap gap-10 mb-8">
            <Title className="font-bold text-4xl" text="Kontakt" />
            <p className="text-xl">Skulle du side med et spørgsmål eller to, så skriv endelig til os og vi vil kontakte dig hurtigts muligt</p>
          </div>
          <ContactForm />
        </section>
      </Container>
    </main>
  );
};

export default KontaktPage;
