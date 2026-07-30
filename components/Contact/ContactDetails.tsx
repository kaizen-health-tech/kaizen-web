import Link from "next/link";

export const CONTACT_EMAIL = "info@kaizenhealth.io";
export const CONTACT_ADDRESS = {
  streetAddress: "1875 Mission St Ste 103",
  addressLocality: "San Francisco",
  addressRegion: "CA",
  postalCode: "94103",
  addressCountry: "US",
};

const ContactDetails = () => {
  return (
    <div className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15">
      <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
        Find us
      </h2>

      <div className="mb-7">
        <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
          Our Location
        </h3>
        <address className="not-italic">
          {CONTACT_ADDRESS.streetAddress}
          <br />
          {CONTACT_ADDRESS.addressLocality}, {CONTACT_ADDRESS.addressRegion}{" "}
          {CONTACT_ADDRESS.postalCode}
        </address>
      </div>

      <div className="mb-7">
        <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
          Email Address
        </h3>
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>

      <div className="mb-7">
        <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
          Helpful Links
        </h3>
        <ul className="space-y-2">
          <li>
            <Link href="/how-it-works" className="hover:text-primary">
              How Kaizen works
            </Link>
          </li>
          <li>
            <Link href="/docs/privacy" className="hover:text-primary">
              Privacy policy
            </Link>
          </li>
          <li>
            <Link href="/docs" className="hover:text-primary">
              Policies &amp; docs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
