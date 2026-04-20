import { Icon } from "@iconify/react";
import { toneBadgeMap } from "../../constants/ui";
import Reveal from "../ui/Reveal";
import SectionWrapper from "../ui/SectionWrapper";
import GlassCard from "../ui/GlassCard";
import FormInput from "../ui/FormInput";
import FormTextarea from "../ui/FormTextarea";
import Button from "../ui/Button";
import SocialIconLinks from "../ui/SocialIconLinks";
import { useAppContext } from "../../hooks/useAppContext";
import { ANIMATION_DELAYS } from "../../constants/animations";

const cardMetaByLabel = {
  Email: {
    title: "Email Me",
    subtitle: "I'll respond as soon as possible.",
  },
  Phone: {
    title: "Call Me",
    subtitle: "Available for project discussions.",
  },
  Location: {
    title: "Visit Me",
    subtitle: "Based in Hyderabad, Sindh.",
  },
};

const defaultCardMeta = {
  title: "Connect",
  subtitle: "Reach out anytime.",
};

function ContactSection({ formState }) {
  const { contactInfo = [], socialLinks = [] } = useAppContext();
  const {
    formData,
    formStatus,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  } = formState;

  return (
    <SectionWrapper
      id="contact"
      variant="surface"
      heading={{
        title: "Get In Touch",
        description:
          "Ready to build something amazing together? Drop me a line and let's start creating.",
        align: "center",
      }}
    >
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <Reveal className="h-full">
          <GlassCard className="flex h-full flex-col">
            <div className="flex-1 space-y-4">
              <span className="text-title-lg font-semibold text-app-text">
                Send Me a Message
              </span>
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />

                <FormInput
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />

                <FormInput
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />

                <FormTextarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={5}
                  required
                />

                {formStatus.message ? (
                  <p
                    className={`text-body-sm ${
                      formStatus.type === "success"
                        ? "text-app-success"
                        : "text-app-error"
                    }`}
                    aria-live="polite"
                  >
                    {formStatus.message}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  icon="mdi:send-outline"
                  disabled={isSubmitting}
                  className="w-full py-3.5"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={ANIMATION_DELAYS.STAGGERED} className="h-full">
          <div className="grid h-full gap-4 lg:grid-rows-[repeat(3,minmax(0,1fr))_auto]">
            {contactInfo.map((info) => {
              const meta = cardMetaByLabel[info.label] || defaultCardMeta;

              return (
                <GlassCard key={info.label} className="h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                        toneBadgeMap[info.tone] ||
                        "bg-app-primary/12 text-app-primary"
                      }`}
                    >
                      <Icon icon={info.icon} className="text-lg" />
                    </div>

                    <div>
                      <h3 className="text-title font-semibold text-app-text">
                        {meta.title}
                      </h3>
                      <p className="mt-1 text-body-sm text-app-muted">
                        {meta.subtitle}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="mt-2 inline-block text-body-sm font-semibold text-app-primary hover:text-app-secondary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-body-sm font-semibold text-app-primary">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              );
            })}

            {socialLinks.length ? (
              <GlassCard className="px-5 py-4 sm:px-6">
                <p className="text-body-sm font-medium text-app-muted">
                  Also find me on
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <SocialIconLinks
                    links={socialLinks}
                    linkClassName="inline-flex h-10 w-10 items-center justify-center rounded-full border border-app-outline/30 bg-app-surfaceHigh/45 text-app-text transition-colors hover:text-app-primary"
                  />
                </div>
              </GlassCard>
            ) : null}
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

export default ContactSection;
