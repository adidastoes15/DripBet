import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
          <p className="text-gray-400 md:text-xl">Have questions or feedback? We'd love to hear from you.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject of your message" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px] bg-zinc-800 border-zinc-700"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-500 text-black hover:bg-green-400">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <div className="flex flex-col gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here's how you can reach us directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400">support@betdrip.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-gray-400">Available Monday-Friday, 9am-5pm EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Quick answers to common questions.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">How often are sweepcoins offers updated?</h3>
                  <p className="text-sm text-gray-400">
                    We update our offers daily to ensure you have the most current information.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Are these sweepcoins offers really free?</h3>
                  <p className="text-sm text-gray-400">
                    Yes, all offers listed on BetDrip are completely free to claim. No purchase necessary.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">How do I report an issue with an offer?</h3>
                  <p className="text-sm text-gray-400">
                    Please use the contact form on this page to report any issues with specific offers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
