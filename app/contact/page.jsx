export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We&apos;d love to hear from you.</p>

      <div>
        <h2>Send Us a Message</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div>
        <h2>Contact Information</h2>
        <div>
          <p>
            <strong>Email:</strong> support@betdrip.com
          </p>
          <p>
            <strong>Hours:</strong> Monday-Friday, 9am-5pm EST
          </p>
        </div>
      </div>
    </div>
  )
}
