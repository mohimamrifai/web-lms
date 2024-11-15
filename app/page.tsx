import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                LMS Platform
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                Login
              </button>
              <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Our Learning Management System
              </h1>
              <p className="text-gray-600 mb-8">
                Empower your learning journey with our comprehensive online education platform. Access courses, track progress, and achieve your goals.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image 
                src="/hero-image.jpg" 
                alt="Learning Platform"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Interactive Courses</h3>
              <p className="text-gray-600">Engage with dynamic content and learn at your own pace</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your learning journey with detailed analytics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals and subject matter experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">
            Ready to Start Learning?
          </h2>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
}
