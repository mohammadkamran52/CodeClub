import {Link} from "react-router-dom";

export default function GalleryMarquee({ galleryItems }) {
  const tripled = [...galleryItems, ...galleryItems, ...galleryItems];

  return (
    <div className="overflow-hidden z-10">
      <div className="flex gap-4 marquee-track w-max">
        {tripled.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden h-48 md:h-56 w-64 md:w-72 shrink-0 group"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-bg/0 group-hover:bg-brand-bg/60 transition-colors flex items-end p-3">
              <p className="text-brand-text font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/gallery"
          className="px-4 py-2 text-sm font-semibold text-brand-bg bg-brand-accent rounded-lg hover:bg-[#0d9668] transition-all cursor-pointer"
        >
          View Full Gallery →
        </Link>
      </div>
    </div>
  );
}
