export default function MapEmbed() {
    return (
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4783374621636!2d-0.1275!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x7ef6b5f4e5c5c5c5!2sLondon!5e0!3m2!1sen!2suk!4v1234567890"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    )
  }