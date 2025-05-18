export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-400">Have questions or feedback? We'd love to hear from you.</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-black text-center rounded-md font-medium hover:bg-green-400"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="space-y-2">
          <p className="text-gray-300">
            <strong>Email:</strong> support@betdrip.com
          </p>
          <p className="text-gray-300">
            <strong>Hours:</strong> Monday-Friday, 9am-5pm EST
          </p>
        </div>
      </div>
    </div>
  )
}
