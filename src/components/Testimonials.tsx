const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Community Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-purple-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              "This platform is fantastic! It allows me to directly contribute to manga translation projects, which I truly enjoy."
            </p>
            <div className="font-semibold">John Doe</div>
            <div className="text-sm text-gray-500">Community Member</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-purple-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              "I love being part of this community! The projects are engaging and the team is very supportive."
            </p>
            <div className="font-semibold">Jane Smith</div>
            <div className="text-sm text-gray-500">Community Contributor</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-purple-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              "This is a great platform for manga lovers! I appreciate the effort everyone puts into the translations."
            </p>
            <div className="font-semibold">Alice Johnson</div>
            <div className="text-sm text-gray-500">Manga Enthusiast</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 