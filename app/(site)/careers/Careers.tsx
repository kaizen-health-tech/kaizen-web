"use client";

import Link from "next/link";
import Image from "next/image";

export default function CareersClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background image */}
        <Image
          src={"/images/hero/contact-us-hero-bg.png"}
          alt=""
          fill
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="mx-auto max-w-4xl px-4 text-center mt-20">
          <h1 className="text-3xl font-semibold leading-tight text-black md:text-5xl">
            Help Redefine Family Health
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-800">
            We&apos;re building more than just a health app.
            <br className="hidden sm:block" />
            We&apos;re building peace of mind for millions of families.
          </p>

          <Link
            href="/careers/open-roles"
            className="mt-10 inline-block rounded-md bg-primary px-8 py-3 font-semibold text-white shadow-md transition hover:bg-primary/90"
          >
            View Open Positions
          </Link>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10 lg:px-20 bg-white dark:bg-blacksection">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-left space-y-6 text-gray-700 dark:text-gray-300 mb-10">
            <div>
              <h2 className="text-2xl font-semibold text-primary dark:text-white mb-2">
                Transforming Family Health Through Technology and Heart
              </h2>
              <p>
                At Kaizen Health, we believe every family deserves the power to
                make informed health decisions, regardless of distance or
                medical complexity. Our mission goes beyond building another
                health app – we're creating a movement that revolutionizes how
                families care for each other across generations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-1">
                Why We Exist
              </h3>
              <p>
                41 million Americans struggle to coordinate their loved ones'
                healthcare while managing their own lives. We're changing that
                narrative, one family at a time. Our AI-powered platform
                transforms scattered health information into actionable
                insights, turning overwhelming into empowering.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-1">
                What Drives Us
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Every prevented health crisis through early detection</li>
                <li>
                  Every family member who sleeps better knowing their loved ones
                  are monitored
                </li>
                <li>
                  Every caregiver who can finally take a breath, supported by
                  smart technology
                </li>
                <li>
                  Every child who will inherit a complete picture of their
                  family's health journey
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-1">
                Our Impact
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Helped thousands of families predict and prevent hereditary
                  health conditions
                </li>
                <li>Reduced caregiver burnout by 60%</li>
                <li>
                  Saved an average of 15 hours monthly on health coordination
                </li>
                <li>
                  Empowered better decision-making through AI-powered insights
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-1">
                Join Our Mission
              </h3>
              <p>If you're passionate about:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Leveraging technology to solve real human challenges</li>
                <li>Creating solutions that touch millions of lives</li>
                <li>Building with empathy and innovation</li>
                <li>
                  Measuring success in families helped—not just metrics achieved
                </li>
              </ul>
              <p>
                Then we want to hear from you. At Kaizen Health, every line of
                code, every design, and every solution directly impacts lives.
                We see beyond the tech—to the people it serves.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-1">
                Why Kaizen?
              </h3>
              <p>
                Our name 'Kaizen' represents continuous improvement—in our
                platform, in family health outcomes, and in ourselves. We offer:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Work that matters</li>
                <li>A culture of innovation and empathy</li>
                <li>Competitive compensation and benefits</li>
                <li>
                  The opportunity to shape the future of family healthcare
                </li>
              </ul>
            </div>

            <div className="text-xl font-semibold text-primary mt-8">
              Your Skills. Their Health. Our Mission.
            </div>
            <p>
              Join us in building a world where distance doesn't determine care
              quality, where prevention trumps reaction, and where every family
              has the tools to thrive.
            </p>
            <p>
              Because at Kaizen Health, we're not just building software. We're
              building peace of mind.
            </p>
            <div className="mt-6">
              <Link
                href="/careers/open-roles"
                className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
